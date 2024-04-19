document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.navbar__hamburger');
    const topNavLinks = document.querySelector('.navbar__links');
    const sideNav = document.querySelector('.side-nav'); // Assuming side-nav doesn't follow BEM for open state

    hamburger.addEventListener('click', () => {
        // Toggle BEM modifier class for showing the top navigation links
        topNavLinks.classList.toggle('navbar__links--open');
        // Assuming side-nav uses a similar BEM modifier for the open state
        sideNav.classList.toggle('side-nav--open'); // Adjust if your BEM naming for open state is different
    });
});





function animateCard(card) {
    card.style.transform = "scale(1.1)";
}

function resetCardAnimation(card) {
    card.style.transform = "scale(1)";
}

document.querySelector('.products-section__show-more-btn').addEventListener('click', function() {
    var additionalProducts = document.getElementById('additionalProducts');
    
    // Check if the section is currently shown
    if (additionalProducts.classList.contains('show')) {
      // Start the fade-out effect
      additionalProducts.style.opacity = '0';
      // Wait for the fade-out transition, then hide
      setTimeout(function() {
        additionalProducts.style.display = 'none';
      }, 500); // Match the duration of the CSS opacity transition
      additionalProducts.classList.remove('show');
    } else {
      // Show the section and start the fade-in effect
      additionalProducts.style.display = 'block';
      // Need a slight delay to ensure the element is visible before starting opacity transition
      setTimeout(function() {
        additionalProducts.style.opacity = '1';
      }, 10);
      additionalProducts.classList.add('show');
    }
  });
  document.querySelectorAll('.planting-faq__question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const item = question.parentElement;
  
      item.classList.toggle('active');
      question.setAttribute('aria-expanded', item.classList.contains('active'));
      
      if (item.classList.contains('active')) {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });
  
  

  document.addEventListener('DOMContentLoaded', function () {
    var testimonials = document.querySelectorAll('.testimonials__item');
    var currentIndex = 0;
  
    function navigate(direction) {
      testimonials[currentIndex].classList.remove('testimonials__item--active');
      if (direction === 'next') {
        currentIndex = (currentIndex + 1) % testimonials.length;
      } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      }
      testimonials[currentIndex].classList.add('testimonials__item--active');
    }
  
    document.querySelectorAll('.testimonials__control').forEach(function (control) {
      control.addEventListener('click', function () {
        navigate(control.getAttribute('data-direction'));
      });
    });
  });
  
  function copyCode() {
    // Create a textarea element
    var textArea = document.createElement("textarea");
    // This is the code you want to copy.
    var codeToCopy = '<img src="images/contact-img.jpg" alt="Decorative Image" class="contact__image">';
    // Set the value of the textarea to the code you want to copy
    textArea.value = codeToCopy;
    // Make the textarea out of viewport
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    // Cleanup: remove the textarea
    document.body.removeChild(textArea);
    // Optional: Let the user know the text was copied
    alert("Code copied to clipboard!");
  }
  function copyCode() {
    var textArea = document.createElement("textarea");
    var codeToCopy = document.getElementById("codeSnippet").innerText;
    textArea.value = codeToCopy;
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard!");
  }
  
  function copyCode() {
    const textArea = document.createElement("textarea");
    const codeToCopy = document.getElementById("codeSnippet").innerText;
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard!");
  }
  function copyCode() {
    const textArea = document.createElement("textarea");
    const codeToCopy = document.getElementById("codeSnippet").innerText;
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard!");
  }
  
  
  function copyCode() {
    const textArea = document.createElement("textarea");
    const codeToCopy = document.getElementById("codeSnippet").innerText;
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard!");
  }
  function copyCode() {
    const textArea = document.createElement("textarea");
    const codeToCopy = document.getElementById("codeSnippet").innerText;
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard!");
  }
  function copyCode() {
    const textArea = document.createElement("textarea");
    const codeToCopy = document.getElementById("codeSnippet").innerText;
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard!");
  }
  