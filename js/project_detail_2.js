// side bar active
const logoBtn = $('#logo_btn');
const sideBtns = $('.side_bar_btn'); // side bar btn array
const scrollArr = [0, $('#detail_2').offset().top, $('#detail_3').offset().top, $('#detail_4').offset().top];
const scrollSpead = 800;
var html = $("html");
var page = 1;

logoBtn.click(function (e) {
    html.animate({ scrollTop: 0}, scrollSpead);
});

function sideBarClickEvent(btn) {
    if (!$(btn).hasClass('side_bar_selected')) {

        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(btn).addClass('side_bar_selected');

    }
    var index = $(btn).data('num') - 1;
    html.animate({ scrollTop: scrollArr[index] - 50 }, scrollSpead);
    page = $(btn).data('num');
}

$(window).scroll(function () {
    var scrollValue = $(document).scrollTop();

    if (scrollValue >= 0 && scrollValue <= scrollArr[1] - 600) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[0]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[1] - 200 && scrollValue <= scrollArr[1]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[1]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[2] - 200 && scrollValue <= scrollArr[2]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[2]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[3] - 200 && scrollValue <= scrollArr[3]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });
        
        $(sideBtns[3]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[4] - 200 && scrollValue <= scrollArr[4]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[4]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[5] - 200 && scrollValue < scrollArr[5]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[5]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[6] - 200 && scrollValue < scrollArr[6]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[6]).addClass('side_bar_selected');
    }
});
