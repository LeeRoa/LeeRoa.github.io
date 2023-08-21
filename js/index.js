// side bar active
const sideBtns = $('.side_bar_btn'); // side bar btn array

function sideBarClickEvent(btn) {
    if (!$(btn).hasClass('side_bar_selected')) {
        
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(btn).addClass('side_bar_selected');

    }
    if ($(btn).data('num') == 1) {
        $('html').animate({scrollTop : 0}, 500);
    } else if ($(btn).data('num') == 2) {
        $('html').animate({scrollTop : 1347}, 500);
    } else if ($(btn).data('num') == 3) {
        $('html').animate({scrollTop : 2693}, 500);
    } else if ($(btn).data('num') == 4) {
        $('html').animate({scrollTop : 4029}, 500);
    } else if ($(btn).data('num') == 5) {
        $('html').animate({scrollTop : 5391}, 500);
    } else if ($(btn).data('num') == 6) {
        $('html').animate({scrollTop : 6748}, 500);
    }
}