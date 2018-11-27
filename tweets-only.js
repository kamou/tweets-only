
var timeline = document.getElementById('stream-items-id')

var config = { childList: true, subtree: false };

var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            promoted = document.getElementsByClassName("js-promoted-badge")
            for (i = 0; i < promoted.length; i++) {
                promoted[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
                console.log('Removed promoted tweet.');
            }
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(timeline, config);

