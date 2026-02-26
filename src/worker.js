var old_msg = self.onmessage;

self.onmessage = function(e) {
    if (e.data.cmd == "py") {
        _PyRun_SimpleString(allocateUTF8(e.data.payload));
    } else if (e.data.cmd == "dfu_status") {
        // Deliver a DFU status JSON string back into the C spinlock
        var ptr = allocateUTF8(e.data.json);
        _vialglue_set_dfu_status(ptr);
        _free(ptr);
    } else {
        old_msg(e);
    }
}

function vialgluejs_write_device(data) {
    var buf = [];
    for (var i = 0; i < 32; ++i) {
        buf.push(getValue(data + i, "i8"));
    }
    postMessage({cmd: "write_device", data: buf});
}

function vialgluejs_unlock_start(data, size, width, height) {
    var buf = []
    for (var i = 0; i < size; ++i) {
        buf.push(getValue(data + i, "i8"));
    }
    postMessage({cmd: "unlock_start", data: buf, width: width, height: height});
}

var window = {};
window.open = function() {};

// Called from C (vialglue_dfu_flash_start) via EM_ASM.
// Copies the firmware bytes from WASM memory and forwards to the main thread.
function vialgluejs_dfu_flash_start(data, size) {
    var buf = new Uint8Array(size);
    for (var i = 0; i < size; ++i) {
        buf[i] = getValue(data + i, "i8") & 0xFF;
    }
    postMessage({cmd: "dfu_flash_start", firmware: buf}, [buf.buffer]);
}
