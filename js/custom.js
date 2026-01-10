$('[name="default_lang"]').change(function () {
    let lang = $(this).val();
    if (typeof lang === 'undefined' || lang === '')
        return;
    $.ajax({
        url: site_url + 'common/main.php?check_lang',
        type: "POST",
        dataType: "JSON",
        data: { lang: lang },
        success: function (data) {
            if (data.success) {
                //  alert(data.message);
                location.reload();
            } else {
                //alert("soory there is some error please contact to adminstrator");
                console.log(data.message);
            }
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseJSON.message + ' Our technical staff has been automatically notified and will be looking into this with utmost urgency';
            }
            alert(msg);
            console.log(jqXHR);
        }
    });
});
$(function () {
    var d = new Date();
    var n = d.getFullYear();
    $('.get_current_year').html(n);
    if (typeof app_name !== 'undefined') {
        $(".app_name").html(app_name);
    }

})
// $(".answer").hide();
$(".coupon_question").click(function () {
    if ($(this).is(":checked")) {
        $(".hide").show(300);
    } else {
        $(".hide").hide(200);
    }
});
$(".coupon_question").click(function () {
    if ($(this).is(":checked")) {
        $('.simple_price').css('display', 'none');
    } else {
        $('.simple_price').css('display', 'block');
    }
});
$('body').delegate('.suffessform', 'submit', function (e) {
    e.preventDefault();
    $(this).validate({
        rules: {
            order_name: {
                required: true,
            },
            email: {
                required: true,
            },
            mobile: {
                required: true,
            },
            message: {
                required: true,
            },
        }

    });

    if (!$(this).valid()) return;
    let ele = $(this);

    let url = $(this).data('url');
    let formdata = new FormData(this);
    $.ajax({
        url: site_url + 'common/main.php?',
        type: 'POST',
        dataType: 'JSON',
        data: formdata,
        // contentType: false,
        // processData: false, 
        // cache: false, 
        processData: false,
        contentType: false,

        success: function (data) {

            if (data.success) {
                //alert(data.Message);
                // $(ele).find('[name="order_name"]').before("<div id='msg' class='alert alert-success'>"+data.Message+"<span class='close' data-dismiss='alert' data-style='cursor:pointer'>&times;</span></div>"); 

                window.location.href = "https://rushcodelab.com/thanks";
                //   $('#popup_modal').modal('hide');
                // }, 2000);  


            } else {
                // alert(data.Message);
                $(ele).find('[name="order_name"]').before("<div id='msg' class='alert alert-danger'>" + data.Message + "<span class='close' data-dismiss='alert' style='cursor:pointer'>&times;</span></div>");

                setTimeout(function () {
                    // $(ele).parent().find('#msg').remove();
                    $('#popup_modal').modal('hide');
                }, 2000);

                //alert("There is some error while submitting the form please try again or contact to adminstrator");
                console.log(data.Message);
            }
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else if (jqXHR.status == 422) {

                $.each(jqXHR.responseJSON.errors, function (i, error) {
                    var el = $(document).find('[name="' + i + '"]');
                    if ($(el).siblings('.validation_error').length >= 0) {
                        $(el).siblings('.validation_error').remove();
                        el.after($('<br><span style="color: red;" class="validation_error">' + error[0] + '</span>'));
                    }
                });
                return;
            }
            else {
                msg = 'Uncaught Error.\n' + jqXHR.responseJSON.message + ' Our technical staff has been automatically notified and will be looking into this with utmost urgency';
            }
            //alert(msg);
            console.log(msg);
            console.log(jqXHR);
        }
    });

});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("#bottom-header").addClass("sticky-menu");
    } else {
        $("#bottom-header").removeClass("sticky-menu");
    }
});

$(".custom-faq-heading").click(function (e) {
    e.preventDefault();
    $(this).closest('.custom-faq-heading').toggleClass("rotate-arrow");
    $(this).next().children(".custom-faq-para").toggleClass("show-faq");
});

$('#portfolio-slider').owlCarousel({
    center: false,
    autoplay: false,
    navigation: true,
    dots: true,
    autoplayHoverPause: false,
    autoHeight: true,
    autoHeightClass: 'owl-height',
    loop: true,
    margin: 10,
    responsive: {
        320: { items: 1 },
        360: { items: 1 },
        400: { items: 1 },
        600: { items: 1 },
        768: { items: 1 }
    }
});

$('.portfolioslider').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        1366: {
            items: 4
        }
    }
});

$('.portfolioslider-whitelabel').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1366: {
            items: 3
        }
    }
});

$('.industry-demand-slide').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: true,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1366: {
            items: 5
        }
    }
});

$('.about-industry-slide').owlCarousel({
    autoplay: true,
    center: false,
    loop: true,
    nav: false,
    dots: true,
    autoplayTimeout: 3000,
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 2
        },
        769: {
            items: 3
        },
        1400: {
            items: 4
        },
    }
});

$('.client-testimonial-slide').owlCarousel({
    autoplay: true,
    center: false,
    loop: true,
    nav: false,
    dots: true,
    autoplayTimeout: 3000,
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 2
        },
        769: {
            items: 3
        },
    }
});

$('.about-emplyoee-slide').owlCarousel({
    autoplay: true,
    center: false,
    loop: true,
    nav: false,
    dots: true,
    autoplayTimeout: 3000,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 2
        },
        769: {
            items: 3
        },
        1251: {
            items: 4
        },
    }
});

$('.about-culture').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: false,
    dots: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    margin: 5,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1366: {
            items: 4
        }
    }
});

$('.web-tech-stacks-left').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: false,
    slideTransition: 'linear',
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    dots: false,
    margin: 30,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1366: {
            items: 5
        }
    }
});

$('.web-tech-stacks-right').owlCarousel({
    autoplay: true,
    touchDrag: false,
    mouseDrag: false,
    center: true,
    loop: true,
    rtl: true,
    nav: false,
    slideTransition: 'linear',
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    dots: false,
    margin: 30,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1366: {
            items: 5
        }
    }
});

$('.property-management-card-main').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: false,
    dots: true,
    autoplayTimeout: 5000,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 2
        },
        1200: {
            items: 3
        },
        1366: {
            items: 3
        }
    }
});

$('.rush-service-slide-card-main').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: true,
    dots: false,
    autoplayTimeout: 5000,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 2
        },
        1200: {
            items: 3
        },
        1366: {
            items: 3
        }
    }
});

$('.hear-clients-rush').owlCarousel({
    autoplay: true,
    center: false,
    loop: true,
    nav: true,
    dots: false,
    autoplayTimeout: 5000,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1200: {
            items: 2
        },
        1366: {
            items: 2
        }
    }
});

$('.testimonial-main-slide').owlCarousel({
    nav: false,
    loop: true,
    autoplay: true,
    items: 1,
    dots: true,
    dotsData: true,
    animateIn: 'fadeIn',
});

$('.popular-dating-slide').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: false,
    dots: true,
    autoplayTimeout: 5000,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        },
        1366: {
            items: 3
        }
    }
});

// SCRIPT

let getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
let serializeObj = function (obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}
$(document).ready(function () {
    let utm_source = getUrlParameter('utm_source');
    let utm_medium = getUrlParameter('utm_medium');
    let utm_campaign = getUrlParameter('utm_campaign');
    let utm_term = getUrlParameter('utm_term');
    let utm_params = {};
    if (utm_source != "")
        utm_params['utm_source'] = utm_source;
    if (utm_medium != "")
        utm_params['utm_medium'] = utm_medium;
    if (utm_campaign != "")
        utm_params['utm_campaign'] = utm_campaign;
    if (utm_term != "")
        utm_params['utm_term'] = utm_term;
    if (Object.keys(utm_params).length > 0) {
        $('a').map(function () {
            var link = $(this).attr('href');
            if (typeof link != "undefined") {
                var linkArray = link.split("://");
                if (linkArray[0] == "http" || linkArray[0] == "https") {
                    $(this).attr('href', `${link}?${serializeObj(utm_params)}`);
                }
            }
        });
    }
})
$(document).ready(function () {
    let w = $("footer").offset().top;
    if ($(".custom-single-blog-form").is(':visible')) {
        let blog_form = $(".custom-single-blog-form").offset().top;
        s = (w - 500);
        $(window).scroll(function () {
            if ($(this).scrollTop() > blog_form && $(this).scrollTop() < s)
                $('.custom-single-blog-form').addClass('addfixedform');
            else
                $('.custom-single-blog-form').removeClass('addfixedform');
        });
    }
});

AOS.init({
    duration: 1200
})

$("#cards-slide").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    dots: true,
    navigation: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 2
        },
        1366: {
            items: 3
        }
    }
});

$("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: false,
    navigation: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1024: {
            items: 1
        },
        1366: {
            items: 1
        }
    }
});
$("#courier-service").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1024: {
            items: 1
        },
        1366: {
            items: 1
        }
    }
});
$("#clientcarousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1024: {
            items: 2
        },
        1366: {
            items: 2
        }
    }
});
$("#solutioncarousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1024: {
            items: 1
        },
        1366: {
            items: 1
        }
    }
});
$("#ourworkcarousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1024: {
            items: 1
        },
        1366: {
            items: 1
        }
    }
});
$('.cover').on('click', function () {
    $(this).children().css({
        'z-index': 1,
        'opacity': 1
    });
    $(this).children().trigger('play');
});
$('video').on('click', function () {
    console.log('a');
});
$(".cover").click(function () {
    $('.cover').css('backgroundImage', 'none');
});
$('.dropbtn').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass('show2')) {
        $this.next().removeClass('show2');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .dropdown-content').removeClass('show2');
        $this.parent().parent().find('li .dropdown-content').slideUp(350);
        $this.next().toggleClass('show2');
        $this.next().slideToggle(350);
    }
});
$(document).ready(function () {
    $("a[href='hideme']").remove();
    $("a[href='https://app.rushcodelab.com/signup']").remove();
    $("a[href='https://app.rushcodelab.com/login']").remove();
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(200);
            $(".set > a i").removeClass("fa-angle-up").addClass("fa-angle-right");
        } else {
            $(".set > a i").removeClass("fa-angle-up").addClass("fa-angle-right");
            $(this).find("i").removeClass("fa-angle-right").addClass("fa-angle-up");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this).siblings(".content").slideDown(200);
        }
    });
});
var addClassOnScroll = function () {
    $('section[id]').each(function (index, elem) {
        // if($(elem).is(':appeared')) {
        // const elemId = $(elem).attr('id');
        // $("#feature nav ul li a.active").removeClass('active');
        // $("#feature nav ul li a[href='#" + elemId + "']").addClass('active');
        // }
    });
};
$(window).on('scroll', function () {
    addClassOnScroll();
});
/*********************
     SET ROW'S HEIGHT
    *********************/
$.each($('.row'), function () {
    var h = $(this).attr("data-height");
    $(this).css("height", h);
});
/*************************
     ON WINDOW SCROLL FUNCTION
    *************************/
var sectionIds = {};
$(".row-nav").each(function () {
    var $this = $(this);
    sectionIds[$this.attr("id")] = $this.first().offset().top - 120;
});
var count2 = 0;
$(window).scroll(function (event) {
    var scrolled = $(this).scrollTop();
    //If it reaches the top of the row, add an active class to it
    $(".row-nav").each(function () {
        var $this = $(this);
        if (scrolled >= $this.first().offset().top - 120) {
            $(".row-nav").removeClass("active");
            $this.addClass("active");
            $(".animation").removeClass('animationActive');
            $this.find(".animation").addClass('animationActive');
        }
    });
    //when reaches the row, also add a class to the navigation
    for (key in sectionIds) {
        if (scrolled >= sectionIds[key]) {
            $(".nav-btn").removeClass("active");
            var c = $("[data-row-id=" + key + "]");
            c.addClass("active");
            var i = c.index();
            $('#nav-indicator').css('left', i * 100 + 'px');
        }
    }
});
/**************
 IN-NAVIGATION
**************/
$(".nav-btn").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var i = $(this).index();
    $('#nav-indicator').css('left', i * 100 + 'px');
    var name = $(this).attr("data-row-id");
    var id = "#" + name;
    var top = $(id).first().offset().top - 10;
    $('html, body').animate({
        scrollTop: top + 'px'
    }, 300);
});
/*****
 TOP
******/
$('#top').click(function () {
    $('html, body').animate({
        scrollTop: '0px'
    }, 300);
});
$("#open-country-btn").click(function () {
    $(".country-drop").toggleClass("country-drop-show");
});

$("#open-country-btn").click(function (event) {
    event.stopPropagation();
    $(document).one('click', function (e) {
        if (!$(e.target).is('#open-country-btn')) {
            $(".country-drop").removeClass('country-drop-show');

        }
    });
});
$("#democarousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1024: {
            items: 4
        },
        1366: {
            items: 4
        }
    }
});
$("#Delivearables_slid").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: false,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1024: {
            items: 4
        },
        1366: {
            items: 4
        }
    }
});
$(function () {
    $('[name="orders"],[name="values"]').trigger('change');
})
$('[name="orders"],[name="values"]').change(updateOutput);
//$('[name="orders"],[name="values"]').input(updateOutput);
function updateOutput() {
    var num1 = parseInt($('[name="orders"]').val());
    var num2 = parseInt($('[name="values"]').val());
    // var num2 = (document.getElementById("values").value);
    var outz = ((num1 * num2) * 0.25).toFixed(0);
    var outx = (((num1 * num2) * 0.25) - 99).toFixed(0);
    var outy = (((num1 * num2) * 0.25) * 12).toFixed(0);
    var outw = ((((num1 * num2) * 0.25) - 99) * 12).toFixed(0);
    // var outa = (document.getElementById("orders").value);
    // var outb = (document.getElementById("values").value);
    document.getElementById("x").innerHTML = '$' + outx;
    document.getElementById("w").innerHTML = '$' + outw;
    document.getElementById("a").innerHTML = num1;
    document.getElementById("b").innerHTML = '$' + num2;
}

// tabpane hover
function openEhr(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Hover Tabs
function openCity2(evt, cityName) {
    var i, dating_tabcontent, dating_tablinks;
    dating_tabcontent = document.getElementsByClassName("dating_tabcontent");
    for (i = 0; i < dating_tabcontent.length; i++) {
        dating_tabcontent[i].style.display = "none";
    }
    dating_tablinks = document.getElementsByClassName("dating_tablinks");
    for (i = 0; i < dating_tablinks.length; i++) {
        dating_tablinks[i].className = dating_tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Hover Tabs end
document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.querySelector('.post-text-content');
    const tocDiv = document.querySelector('.toc');

    // stop if either element doesn't exist
    if (!contentDiv || !tocDiv) return;

    const headings = contentDiv.querySelectorAll('h2');
    if (!headings.length) return;

    const tocList = document.createElement('ol');

    headings.forEach(heading => {
        // skip headings inside CTA sections
        const section = heading.closest('section');
        if (section && Array.from(section.classList).some(cls => cls.toLowerCase().includes('cta'))) return;

        if (heading.textContent.trim() !== "") {
            const tocItem = document.createElement('li');
            const tocLink = document.createElement('a');
            const id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
            heading.setAttribute('id', id);
            tocLink.setAttribute('href', `#${id}`);

            const tag = heading.tagName.toLowerCase();

            tocItem.classList.add(`toc-${tag}`);
            tocLink.innerHTML = `<span class="${tag}">${heading.textContent}</span>`;

            tocItem.appendChild(tocLink);
            tocList.appendChild(tocItem);
        }
    });

    tocDiv.appendChild(tocList);
});



// blog script
$window = $(window);
$window.scroll(function () {
    $scroll_position = $window.scrollTop();
    if ($scroll_position > 300) {
        $('.blog-sticky').addClass('blog-sticky-active');
    } else {
        $('.blog-sticky').removeClass('blog-sticky-active');
    }
});
