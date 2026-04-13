function showMessage() {
  alert("Welcome to my portfolio!! ");
}

// Improved email validation
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.textContent = "All fields are required";
    return false;
  }

  if (!isValidEmail(email)) {
    error.textContent = "Enter a valid email address";
    return false;
  }

  error.textContent = "";

  alert("Form submitted successfully! 🎉");

  document.getElementById("contactForm").reset();

  return true;
}

/* ===== Scroll animation (optimized using IntersectionObserver) ===== */
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // run once
    }
  });
}, {
  threshold: 0.1
});

hiddenElements.forEach(el => observer.observe(el));
