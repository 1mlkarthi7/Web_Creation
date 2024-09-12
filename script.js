// Select the toggle button
const toggleButton = document.getElementById('toggle-mode');

// Add click event listener for toggling dark mode
toggleButton.addEventListener('click', () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle('dark-mode');

  // Update the button text
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }
});
