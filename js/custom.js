(function ($) {
  
  "use strict";

    // MENU
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

// --- EmailJS Contact Form Integration ---
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the page from reloading

            // Get the submit button to update its text for user feedback
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerText;
            submitButton.innerText = "Sending...";

            // REPLACE these strings with your actual IDs from the EmailJS dashboard
            const serviceID = 'service_m4yi48d';
            const templateID = 'template_vljgshc';

            // Send the form data
            emailjs.sendForm(serviceID, templateID, this)
                .then(function() {
                    console.log('SUCCESS!');
                    submitButton.innerText = "Message Sent!";
                    contactForm.reset(); // Clear the form fields
                    
                    // Reset button text back to normal after 3 seconds
                    setTimeout(() => {
                        submitButton.innerText = originalText;
                    }, 3000);
                }, function(error) {
                    console.log('FAILED...', error);
                    submitButton.innerText = "Error - Try Again";
                    
                    // Reset button text back to normal after 3 seconds
                    setTimeout(() => {
                        submitButton.innerText = originalText;
                    }, 3000);
                });
        });
    }
});
