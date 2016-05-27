$(document).on('click', function() {
    console.log('hey');
    $('.reveal-modal').each(function() {
        var currentSrc = this.getElementsByTagName('img')[0].getAttribute('src');
        var newSrc = currentSrc.slice(1, -4) + "-fullsize.jpg"
        this.getElementsByTagName('img')[0].setAttribute('src', newSrc);
    })
});