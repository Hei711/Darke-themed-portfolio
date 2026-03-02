// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize EmailJS
  emailjs.init("QHHx3M3aW-KRsanBs");

  // Grab the form
  const form = document.getElementById('contact-form');
  if (!form) return; 

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    emailjs.send('service_y1cttjm', 'template_sq47jqv', formData)
      .then(function(response) {
        alert('Message sent successfully!');
        form.reset();
      }, function(error) {
        console.error('FAILED...', error);
        alert('Oops! Something went wrong. Check your public key, template, and Gmail settings.');
      });
  });
});