window.onload = function() {
    var panda = document.querySelectorAll('.panda');

    function choosePanda(k) {
        for (var i = 0; i < panda.length; i++) {
            panda[i].style.display = 'none';
            panda[k].style.display = 'block';
        }
    }
}