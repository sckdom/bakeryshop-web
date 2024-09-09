// Add event listener to navigation menu items
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Add event listener to "Learn More" button in hero section
document.querySelector('.hero-container button').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to "Order Now" buttons in menu section
document.querySelectorAll('#menu button').forEach((button) => {
  button.addEventListener('click', () => {
    alert('Order placed successfully!');
  });
});

// Add event listener to form submission in contact section
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector('form'));
  console.log(formData);
  alert('Message sent successfully!');
});
