const infoExpand = document.getElementsByClassName('contact-container');

for(let i= 0; i < infoExpand.length; i++) {
    infoExpand[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}