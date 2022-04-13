const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.getElementById( 'showTags' ).addEventListener( 'click', function () {
    document.getElementById( 'subforms' ).toggleClass( 'hide' );
}, false );

Element.prototype.toggleClass = function ( className ) {
    if( this.className.split( ' ' ).indexOf( className ) == -1 ) {
        this.className = ( this.className + ' ' + className ).trim();
    } else {
        this.className = this.className.replace( new RegExp( '(\\s|^)' + className + '(\\s|$)' ), ' ' ).trim();
    };
};

