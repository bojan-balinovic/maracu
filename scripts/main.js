$.fn.isOnScreen = function() {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(document).ready(function() {
    checkAnimation();
    $(window).scroll(() => {
        checkAnimation();
    })

    function checkAnimation() {
        $('.has-animation').each(function(index, el) {

            if ($(this).isOnScreen()) {
                $(this).delay($(this).data('delay')).queue(function() {
                    $(this).addClass('animate-in');
                });
            }
        });
    }

    $('.addToCartForm').submit((e) => {
        e.preventDefault();
        var form = Object.fromEntries(new FormData(e.target).entries());
        let storage = JSON.parse(localStorage.getItem('cart') ? localStorage.getItem('cart') : '[]');
        //console.log(storage.find(e => e.image != form.image))
        //if (!storage.find(e => e.image != form.image)) {
        storage.push(form);
        //  }
        localStorage.setItem('cart', JSON.stringify(storage));
        $('#exampleModal').modal('show');
    })
    $('#closeModal').click(() => {
        $('#exampleModal').modal('hide');
    })

    function addItemToCart(item) {

    }

});