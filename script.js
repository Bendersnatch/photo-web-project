const backBtn = document.getElementById ('backBtn');

backBtn.addEventListener('click', function () {
   window.scrollTo (0, 0);
});

window.addEventListener ('scroll', function() {
    let posY = this.window.scrollY;

    if (posY > 0) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
});
