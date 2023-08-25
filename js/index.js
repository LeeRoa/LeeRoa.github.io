// side bar active
const logoBtn = $('#logo_btn');
const sideBtns = $('.side_bar_btn'); // side bar btn array
const scrollArr = [0, $('#content_2').offset().top, $('#content_3').offset().top, $('#content_4').offset().top, $('#content_5').offset().top, $('#content_6').offset().top];
const scrollSpead = 800;
var html = $("html");
var page = 1;
const skill_front_percent = $('.skill_front_percent');
const skill_back_percent = $('.skill_back_percent');
const skill_other_percent = $('.skill_other_percent');
const skill_front_percent_num = [90, 65, 75, 75];
const skill_back_percent_num = [70, 90, 75];
const skill_other_percent_num = [75, 70, 60];

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
    html.animate({ scrollTop: scrollArr[index] - 100 }, scrollSpead);
    page = $(btn).data('num');
    
    if (page == 3) {
        skill_front_percent.each(function (index) {
            $(skill_front_percent[index]).css('width', `${skill_front_percent_num[index]}%`);
        });
    }
}

$(window).scroll(function () {
    var scrollValue = $(document).scrollTop();

    if (scrollValue == 0) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[0]).addClass('side_bar_selected');
    }

    if (scrollValue > scrollArr[0] && scrollValue <= scrollArr[1]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[1]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[1] && scrollValue <= scrollArr[2]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });
        if (scrollValue >= scrollArr[1] + 200) {
            skill_front_percent.each(function (index) {
                $(skill_front_percent[index]).css('width', `${skill_front_percent_num[index]}%`);
            });
        }
        $(sideBtns[2]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[2] && scrollValue <= scrollArr[3]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });
        
        $(sideBtns[3]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[3] && scrollValue <= scrollArr[4]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[4]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[4] && scrollValue < scrollArr[5]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[5]).addClass('side_bar_selected');
    } else if (scrollValue > scrollArr[5]) {
        sideBtns.each(function (index) {
            $(sideBtns[index]).removeClass('side_bar_selected');
        });

        $(sideBtns[6]).addClass('side_bar_selected');
    }
});

// bookmark btn copy active
const notification = $('#notification-container');
const email = $('#email-container');
const phone = $('#phone-container');

notification.addClass('hide');
email.addClass('hide');
phone.addClass('hide');

// Show notification
const showNotification = () => {
    notification.addClass('show');
    notification.removeClass('hide');
    setTimeout(() => {
        notification.removeClass('show');
        notification.addClass('hide');
    }, 2000)
}

// Show email
const showEmail = () => {
    email.addClass('show');
    email.removeClass('hide');
    setTimeout(() => {
        email.removeClass('show');
        email.addClass('hide');
    }, 2000)
}

// Show phone
const showPhone = () => {
    phone.addClass('show');
    phone.removeClass('hide');
    setTimeout(() => {
        phone.removeClass('show');
        phone.addClass('hide');
    }, 2000)
}

  $(document).ready(function() {
    $(".content_bookmark_btn").click(function() {
        var textToCopy = $(".web_link").val(); // 복사할 텍스트를 가져옵니다.
        // Clipboard API를 사용하여 텍스트를 클립보드에 복사합니다.
        navigator.clipboard.writeText(textToCopy)
            .then(function(e) {
                    //we want only letters that are not already pressed
                    showNotification();
                  }
            )
            .catch(function(error) {
                alert("클립보드 복사 중 오류가 발생했습니다.");
                console.error(error);
            });
    });
    
    $("#email_btn").click(function() {
        var textToCopy = $("#email_btn").text(); // 복사할 텍스트를 가져옵니다.
        // Clipboard API를 사용하여 텍스트를 클립보드에 복사합니다.
        navigator.clipboard.writeText(textToCopy)
            .then(function(e) {
                    //we want only letters that are not already pressed
                    showEmail();
                  }
            )
            .catch(function(error) {
                alert("클립보드 복사 중 오류가 발생했습니다.");
                console.error(error);
            });
    });
    
    $("#phone_num").click(function() {
        var textToCopy = "010-2725-7717"; // 복사할 텍스트를 가져옵니다.
        // Clipboard API를 사용하여 텍스트를 클립보드에 복사합니다.
        navigator.clipboard.writeText(textToCopy)
            .then(function(e) {
                    //we want only letters that are not already pressed
                    showPhone();
                  }
            )
            .catch(function(error) {
                alert("클립보드 복사 중 오류가 발생했습니다.");
                console.error(error);
            });
    });
});

const prevBtn = $('#skill_prev_btn');
const nextBtn = $('#skill_next_btn');
const skillContent = $('#main_mid_3');

const skillsDivs = $('.skills_div');
const frontDiv = $('#front_end_div');
const backDiv = $('#back_end_div');
const otherDiv = $('#other_div');

// 콘텐츠 prev, next btn active
const skillsDiv = $('.skills_div');

prevBtn.click(function (e) {
    if (skillContent.hasClass('view_1')) {
        return;
    } else if (skillContent.hasClass('view_2')) {
        skillsDivs.each(function (index) {
            $(skillsDivs[index]).removeClass('display_show');
            $(skillsDivs[index]).addClass('display_none');
        });
        skill_front_percent.each(function (index) {
            $(skill_front_percent[index]).css('width', `${skill_front_percent_num[index]}%`);
        });
        frontDiv.removeClass('display_none');
        frontDiv.addClass('display_show');
        skillContent.removeClass('view_2');
        skillContent.addClass('view_1');
    } else if (skillContent.hasClass('view_3')) {
        skillsDivs.each(function (index) {
            $(skillsDivs[index]).removeClass('display_show');
            $(skillsDivs[index]).addClass('display_none');
        });
        skill_back_percent.each(function (index) {
            $(skill_back_percent[index]).css('width', `${skill_back_percent_num[index]}%`);
        });
        backDiv.removeClass('display_none');
        backDiv.addClass('display_show');
        skillContent.removeClass('view_3');
        skillContent.addClass('view_2');
    }
});

nextBtn.click(function (e) {
    if (skillContent.hasClass('view_1')) {
        skillsDivs.each(function (index) {
            $(skillsDivs[index]).removeClass('display_show');
            $(skillsDivs[index]).addClass('display_none');
        });

        backDiv.removeClass('display_none');
        backDiv.addClass('display_show');
        skill_back_percent.each(function (index) {
            $(skill_back_percent[index]).css('width', `${skill_back_percent_num[index]}%`);
        });
        skillContent.removeClass('view_1');
        skillContent.addClass('view_2');
        
    } else if (skillContent.hasClass('view_2')) {
        skillsDivs.each(function (index) {
            $(skillsDivs[index]).removeClass('display_show');
            $(skillsDivs[index]).addClass('display_none');
        });

        otherDiv.removeClass('display_none');
        otherDiv.addClass('display_show');
        skill_back_percent.each(function (index) {
            $(skill_other_percent[index]).css('width', `${skill_other_percent_num[index]}%`);
        });
        skillContent.removeClass('view_2');
        skillContent.addClass('view_3');
    }
});

// think me pagination
const thinkDiv = $('#think_me_grid');
const thinkPrevBtn = $('#think_prev_btn');
const thinkNextBtn = $('#think_next_btn');
const pageTran = [0, -300, -600, -900];

if (thinkDiv.hasClass('page_1')) {
    thinkPrevBtn.hide();
}

thinkPrevBtn.click(function (e) {
    if (thinkDiv.hasClass('page_2')) {
        thinkDiv.removeClass('page_2');
        thinkDiv.addClass('page_1');
        thinkPrevBtn.hide();
        thinkNextBtn.show();
        thinkDiv.css('transform', `translate(${pageTran[0]}px)`);
    } else if (thinkDiv.hasClass('page_3')) {
        thinkDiv.removeClass('page_3');
        thinkDiv.addClass('page_2');
        thinkNextBtn.show();
        thinkDiv.css('transform', `translate(${pageTran[1]}px)`);
    }
});

thinkNextBtn.click(function (e) {
    if (thinkDiv.hasClass('page_2')) {
        thinkDiv.removeClass('page_2');
        thinkDiv.addClass('page_3');
        thinkNextBtn.hide();
        thinkPrevBtn.show();
        thinkDiv.css('transform', `translate(${pageTran[2]}px)`);
    } else if (thinkDiv.hasClass('page_1')) {
        thinkDiv.removeClass('page_1');
        thinkDiv.addClass('page_2');
        thinkPrevBtn.show();
        thinkDiv.css('transform', `translate(${pageTran[1]}px)`);
    }
});