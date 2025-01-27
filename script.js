// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

// Dropdown menu interaction
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
      dropdown.querySelector('.dropdown-menu').style.display = 'block';
  });
  dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
  });
});

// Dynamic card hover effect
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Carousel auto-slide animation
const carouselElement = document.querySelector('#carouselAchievements');
const carousel = new bootstrap.Carousel(carouselElement, {
  interval: 5000, // Auto-slide every 5 seconds
    ride: 'carousel',
});

// Adding animations on caption hover
const captions = document.querySelectorAll('.carousel-caption');
captions.forEach(caption => {
    caption.addEventListener('mouseenter', () => {
    caption.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    caption.style.transform = 'scale(1.1)';
    });
    caption.addEventListener('mouseleave', () => {
    caption.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    caption.style.transform = 'scale(1)';
    });
});


// Script for the contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Input fields and error messages
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    // Validate Name
    if (name.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate Subject
    if (subject.value.trim() === '') {
        subjectError.style.display = 'block';
        isValid = false;
    } else {
        subjectError.style.display = 'none';
    }

    // Validate Message
    if (message.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // If form is valid, display success message
    if (isValid) {
        successMessage.style.display = 'block';

        // Clear form fields
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
    }
});


// Animate cards on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate');
      }
  });
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

