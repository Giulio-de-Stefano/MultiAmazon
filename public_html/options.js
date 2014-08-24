// Saves options to chrome.storage
function save_options() {

    chrome.storage.sync.set({
        UK: $('UKcb').checked,
        IT: $('ITcb').checked,
        DE: $('DEcb').checked,
        ES: $('EScb').checked,
        FR: $('FRcb').checked
    }, function() {
        // Update status to let user know options were saved.
        var status = $('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1000);
    });
}

// Restores checkbox states using the preferences
// stored in chrome.storage.
function restore_options() {

    chrome.storage.sync.get({
        UK: true,
        IT: true,
        DE: true,
        ES: true,
        FR: true
    }, function(items) {
        $("UKcb").checked = items.UK;
        $("ITcb").checked = items.IT;
        $("DEcb").checked = items.DE;
        $("EScb").checked = items.ES;
        $("FRcb").checked = items.FR;
    });
}

function $(id) {
    return document.getElementById(id);
}

document.addEventListener('DOMContentLoaded', restore_options);
$('save').addEventListener('click',
        save_options);