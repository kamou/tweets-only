function deletePromoted()
{
    promoted = document.getElementsByClassName("js-promoted-badge")
    for (i = 0; i < promoted.length; i++) {
        if (promoted[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes("js-stream-item stream-item stream-item")) {
            promoted[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        }
    }
    clearInterval(tmr)
    return;
}
var tmr = setInterval(deletePromoted, 2000);
