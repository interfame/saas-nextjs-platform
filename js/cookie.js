function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
$(document).ready(function () {
    function check_is_set() {
        return getCookie('is_accepted');
    }
    let check_cookies = check_is_set();
    let timer;
    if (typeof check_cookies == 'undefined' || check_cookies == null) {
        timer = setInterval(function () {
            $("#cookieConsent").fadeIn(200);
        }, 4000);
    }
    else {
        clearInterval(timer);
    }
    $(".cookieConsentOK").click(function () {
        setCookie('is_accepted', "Y", 10);
        clearInterval(timer);
        $("#cookieConsent").fadeOut(200);
    });
    $(".cookieConsentCancel").click(function () {
        setCookie('is_accepted', "N", 10);
        clearInterval(timer);
        $("#cookieConsent").fadeOut(200);
    });
    $("#closeCookieConsent").click(function () {
        $("#cookieConsent").fadeOut(200);
    });
});
// Cookie