var modalShowing = false;

$('.image').on('click', function(e) {
    e.preventDefault();
    var thisPhoto = $(this).find('img')[0];
    var photoIndex = thisPhoto.parentNode.parentNode.getAttribute('data-photoIndex');
    var avatarIndex = thisPhoto.parentNode.parentNode.getAttribute('data-avatarIndex');

    var $realModal = $('#real-modal');
    var modalPhoto = $realModal.find('img')[0];
    var modalAvatar = $realModal.find('img')[1];
    modalPhoto.setAttribute('src', "img/photos/photo" + photoIndex + "-fullsize.jpg");
    modalAvatar.setAttribute('src', "img/avatars/avatar" + avatarIndex + ".jpg");
    console.log(modalAvatar);
    console.log($realModal);

    function hideModal(e) {
        console.log(e);
        $realModal.attr("style", "");
        console.log(window.removeEventListener('click', hideModal));
        modalShowing = false;
    }

    if (modalShowing === false) {
        $realModal.attr("style", "display: block; opacity: 1; visibility: visible; top: 718px;");
        modalShowing = true;
        scroll(0,718);

        setTimeout(function() {
            window.addEventListener('click', hideModal);
        }, 1);
    }
    
});