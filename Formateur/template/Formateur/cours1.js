document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const courses = document.querySelectorAll('.course-block');
    courses.forEach(course => {
        const title = course.querySelector('h3').textContent.toLowerCase();
        course.style.display = title.includes(query) ? 'block' : 'none';
    });
});

function showContent(courseId) {
    // Logic to load and display course content
    document.getElementById('course-video').src = courseId + '.mp4';
    // Load PDF into canvas (requires additional library like PDF.js)
    // Example: loadPDF(courseId + '.pdf');
}

// Example function to load PDF (requires PDF.js or similar library)
// function loadPDF(pdfFile) {
//     // PDF.js logic to render PDF on canvas
// }