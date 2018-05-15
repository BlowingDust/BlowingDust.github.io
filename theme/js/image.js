(function() {
    var img_on_click = function() {
        window.open(this.src)
    }

    var images = document.getElementsByClassName('entry-content')[0].getElementsByTagName('img');
    for(var i=0; i<images.length; i++) {
        images[i].addEventListener("click", img_on_click);
    }
})();