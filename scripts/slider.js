document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type: 'slide',
        fixedWidth: 200,
        fiedHeight: 200,
        perPage: 7,
        //width: '80vw',
        gap: '4vw',
        pagination: true,
        height: '200px',
    });
    splide.mount();
});