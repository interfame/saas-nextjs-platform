$(document).ready(function(){
    if(window.location.pathname == "/contactus"){
        grecaptcha.ready(function() {
            grecaptcha.render($("#contactform").find("#html_element")[0], { 'sitekey' : '6LeLewkdAAAAAGlTlz538z8Ck6t49V4qPWoM-Wsg' });
        });
        let captcha_render = "true";
        let input = $('<input type="hidden" name="captcha_render"/>').val(captcha_render);
        $("#contactform").append(input);
        $("#contactform").validate({
            ignore: ".ignore",
            rules : {
                full_name : { required: true },
                email : { required: true, email: true },
                phone_number: {required:true, matches:/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/},
                message : { required: true },
                hiddenRecaptcha: {
                    required: function () {
                        if (grecaptcha.getResponse() == '') {
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                }
            },
            messages: {     
                full_name: "This field is required",
                email: {
                    required: "This field is required",
                    email: "Please provide an valid Email"
                },
                phone_number: {
                    required: "This field is required",
                    matches: "Please provide an valid Mobile Number With Country Code"
                },
                message: "Please share your message to understand you",
                hiddenRecaptcha: "Please prove you are not a robot"
            },
            submitHandler: function(form) {
                var params = $(form).serialize();
                grecaptcha.reset();
                $.ajax({
                    url: "https://rushcodelab.com/main_contact",
                    type: 'POST',
                    dataType: 'JSON',
                    data: params,
                    success:function(data){
                        if(data.success)
                            setTimeout(function(){ window.top.location = "https://rushcodelab.com/thanks"; }, 800);   
                        else
                            $("<label id='hiddenRecaptcha-error' class='error' for='hiddenRecaptcha'>"+data.Message+"</label>").insertAfter("#html_element");
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
                        }
                        else {
                            msg = 'Uncaught Error.\n' + jqXHR.responseJSON.message +' Our technical staff has been automatically notified and will be looking into this with utmost urgency';
                        }
                        console.log(jqXHR);
                    }
                });
            }
        });

        // PHONE WITH COUNTRY CODE VALIDATION
        $.validator.methods.matches = function( value, element, params ) {
            var re = new RegExp(params);
            return this.optional( element ) || re.test( value );
        }
    }
})

$('body').delegate('.hyper_form','submit',function(e){
    e.preventDefault();

    //if($(this).valid() == false) return;
    let url = $(this).data('url');
    let formdata = new FormData(this);
    $.ajax({
        url: "https://rushcodelab.com/main",
        type: 'POST',
        dataType: 'JSON',
        data: formdata,
        processData: false,
        contentType: false,
        
        success:function(data){
            if(data.success){
                   setTimeout(function(){ 
                   window.top.location = "https://rushcodelab.com/thanks";
               }, 800);   

            }else{
                // alert("There is some error while submitting the form please try again or contact to adminstrator");
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
            }
            else {
                 msg = 'Uncaught Error.\n' + jqXHR.responseJSON.message +' Our technical staff has been automatically notified and will be looking into this with utmost urgency';
            }
           console.log(jqXHR);
       }
    });
});
// SCRIPT 