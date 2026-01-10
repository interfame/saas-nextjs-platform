(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery"], factory );
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory( require( "jquery" ) );
    } else {
        factory( jQuery );
    }
}(function( $ ) {
    $.extend( $.fn, {
        appendForm: function( options ) {
            var len = $('script').filter(function () {
                return ($(this).attr('src') == 'https://api.suffescom.com/cdn/js/main.min.js?captcha_render='+options.captcha);
            }).length;
            
            if (len === 0) {
                $.getScript('https://api.suffescom.com/cdn/js/main.min.js?captcha_render='+options.captcha);
            }

            if ( !this.length ) {
                if ( options && options.debug && window.console )
                    console.log( "Nothing selected, can't validate, returning nothing." );
                return;
            }
            if ( !options.apikey ||  options.apikey == "") {
                console.log( "api key is required to get form." );
                return;
            }
            var elmnt, xhttp, url;
            elmnt = this[0];
            console.log(options.utm_tags);
            url = "https://api.suffescom.com/app.php?apikey="+options.apikey+"&action="+options.action+'&utm_tags='+options.utm_tags+'&captcha='+options.captcha;
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = JSON.parse(this.responseText).form;
                        checkFormParams();
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Unable to load";
                    }
                }
            };
            xhttp.open("POST", url, true);
            xhttp.send();
            return;
        },
    } );
    return $;
}));