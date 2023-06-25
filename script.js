// Get all module titles
const moduleTitles = document.querySelectorAll('.module-title');

// Add click event listener to each module title
moduleTitles.forEach((title) => {
  title.addEventListener('click', () => {
    // Toggle the active class
    title.classList.toggle('active');

    // Toggle the display of the lesson list
    const lessonList = title.nextElementSibling;
    if (lessonList.style.display === 'block') {
      lessonList.style.display = 'none';
    } else {
      lessonList.style.display = 'block';
    }
  });
});
