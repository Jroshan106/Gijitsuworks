(function ($) {
  
  "use strict";

    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
})(window.jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();


            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerText;
            submitButton.innerText = "Sending...";

            const serviceID = 'service_m4yi48d';
            const templateID = 'template_vljgshc';

            emailjs.sendForm(serviceID, templateID, this)
                .then(function() {
                    console.log('SUCCESS!');
                    submitButton.innerText = "Message Sent!";
                    contactForm.reset(); 
                    
                    setTimeout(() => {
                        submitButton.innerText = originalText;
                    }, 3000);
                }, function(error) {
                    console.log('FAILED...', error);
                    submitButton.innerText = "Error - Try Again";
                    
                    setTimeout(() => {
                        submitButton.innerText = originalText;
                    }, 3000);
                });
        });
    }
});
