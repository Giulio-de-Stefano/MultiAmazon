var console = chrome.extension.getBackgroundPage().console;
var sync = chrome.storage.sync;

function initOptions() {
    sync.set({
        UK: true,
        IT: true,
        DE: true,
        ES: true,
        FR: true
    }, function() {
        console.log("Options succesfully initialised!");
    });
}

console.log("init.js running...");

chrome.runtime.onInstalled.addListener(function(details) {
    console.log("onInstalled event catched, executing Listener");
    
    if(details.reason == "install") {
        console.log("New installation detected... initializing options");
        initOptions();
    }
});

