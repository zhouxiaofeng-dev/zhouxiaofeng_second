window.onload = function() {
    var login_main = document.querySelector('.login_main');
    var panda = document.querySelectorAll('.panda');
    var xh = 1;
    login_main.onclick = function() {
        for (var i = 0; i < panda.length; i++) {
            panda[i].style.display = 'none';
        }
        var xr = (xh + 2) % 3;
        console.log(xr);
        panda[xr].style.display = 'block';
        xh++;
        console.log(2);
    }
}