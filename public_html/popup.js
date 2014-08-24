//"use strict";

var console = chrome.extension.getBackgroundPage().console;
var sync = chrome.storage.sync;

function openTabs(query) {

    console.log("@openTabs: --- Start ---");

    var baseUrls = {
        "UK": "http://www.amazon.co.uk/s/ref=nb_sb_noss?__mk_en_EN=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords=",
        "IT": "http://www.amazon.it/s/ref=nb_sb_noss?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords=",
        "DE": "http://www.amazon.de/s/ref=nb_sb_noss?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords=",
        "ES": "http://www.amazon.es/s/ref=nb_sb_noss?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords=",
        "FR": "http://www.amazon.fr/s/ref=nb_sb_noss?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords="
    };

    var sync_callback = function(country) {
        var callback = function(result) {
            var display = result[country];

            if (display === undefined) {
                display = true;
            }
            console.log("@openTabs: " + country + ": " + display);

            if (display) {
                chrome.tabs.create({url: baseUrls[country] + query});
            }
        };
        return callback;
    };

    for (var key in baseUrls) {
        if (baseUrls.hasOwnProperty(key)) {
            sync.get(key, sync_callback(key));
        }
    }

    console.log("@openTabs: --- End ---");

}

function $(id) {
    return document.getElementById(id);
}

function _clickHandler() {

    if ($("box").value.length < 1) {
        return false;
    } else {
        var query = $("box").value;
        openTabs(query);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    $("submit").onclick = _clickHandler;
});
