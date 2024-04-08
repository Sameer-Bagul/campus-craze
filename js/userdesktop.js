document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'content-container');
    document.body.appendChild(contentContainer);

    // Function to load content
    function loadContent(contentUrl) {
        fetch(contentUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Update the content container with the loaded content
                contentContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching content:', error);
            });
    }

// Event listener for each navigation button
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const contentUrl = button.getAttribute('data-content');
        loadContent(contentUrl);
    });
});

});
