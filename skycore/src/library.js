// Code moved to Main.js to prevent EMSCRIPTEN trying to be clever and breaking things
// We still have some fallback code in here to track if things are working but I don't think it's even loaded

function cpuRead8(address) {
    console.log("Library Read 8 " + address)
}

function cpuWrite8(address, data) {
    console.log("Library Write 8 " + address)
}

function cpuWrite32(address) {
    console.log("Library Write 32 " + address)
}

if (typeof mergeInto !== 'undefined') mergeInto(LibraryManager.library, {
    externalCpuRead8Intercept: function(address) {
        cpuRead8(address);
    },
    externalCpuWrite8Intercept: function(address, data) {
        cpuWrite8(address, data);
    },
    externalCpuWrite32Intercept: function(address, data) {
        cpuWrite32(address, data);
    }
});