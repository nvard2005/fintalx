document.addEventListener('DOMContentLoaded', () => {
    console.log('FintalX page loaded successfully');
    

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
 document.addEventListener("DOMContentLoaded", () => {
    const footerImage = document.querySelector('.footer-image');

    if (!footerImage) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            footerImage.classList.add('show');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(footerImage);
  });
  (function(){
    emailjs.init("YOUR_PUBLIC_KEY"); 
  })();

  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const button = form.querySelector('button');
    button.textContent = 'Sending...';
    button.disabled = true;

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
      .then(() => {
        alert('✅ Message sent successfully!');
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        alert('❌ Failed to send message. Please try again.');
      })
      .finally(() => {
        button.textContent = 'Send';
        button.disabled = false;
      });
  });