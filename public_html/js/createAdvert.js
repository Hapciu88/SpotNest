document.addEventListener('DOMContentLoaded', function() {
    // constants for the textbox resizing
    const resizableInput = document.getElementById('resizable-input');
    let isResizing = false;
    let startX = 0;
    let startY = 0;

    // constant for image display
    const imageDisplay = document.querySelector('.image-display');

    // Function to start resizing
    const startResize = function(e) {
        isResizing = true;
        // Get the initial position of the mouse or touch
        startX = e.clientX || e.touches[0].clientX;
        startY = e.clientY || e.touches[0].clientY;
    };

    // Function to resize the input box
    const resize = function(e) {
        if (!isResizing) return;

        // Calculate the change in position of the mouse or touch
        const deltaX = (e.clientX || e.touches[0].clientX) - startX;
        const deltaY = (e.clientY || e.touches[0].clientY) - startY;

        // Calculate the maximum allowable width and height based on the container's dimensions
        const maxWidth = resizableInput.parentNode.clientWidth - resizableInput.offsetLeft;
        const maxHeight = resizableInput.parentNode.clientHeight - resizableInput.offsetTop;

        // Calculate the new width and height within the limits
        let newWidth = Math.min(maxWidth, Math.max(10, resizableInput.offsetWidth + deltaX));
        let newHeight = Math.min(maxHeight, Math.max(10, resizableInput.offsetHeight + deltaY));

        // Set the new width and height of the input box
        resizableInput.style.width = newWidth + 'px';
        resizableInput.style.height = newHeight + 'px';

        // Update the starting position for the next resize event
        startX = e.clientX || e.touches[0].clientX;
        startY = e.clientY || e.touches[0].clientY;
    };

    // Function to stop resizing
    const stopResize = function() {
        isResizing = false;
    };

    // Function to handle image upload
    const handleImageUpload = function(event) {
        // Get the files from the input field
        const files = event.target.files;
        
        // Iterate over each file
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Create a FileReader to read the image file
            const reader = new FileReader();

            // Define the onload event handler for the reader
            reader.onload = function(e) {
                // Create an image element
                const img = document.createElement('img');
                
                // Add a class to the image for styling
                img.classList.add('uploaded-image');
                
                // Set the source of the image to the data URL
                img.src = e.target.result;

                // Append the image to the image display container
                imageDisplay.appendChild(img);
            };

            // Read the image file as a data URL
            reader.readAsDataURL(file);
        }
    };

    // Event listeners to handle resizing
    resizableInput.addEventListener('mousedown', startResize);
    resizableInput.addEventListener('touchstart', startResize);
    document.addEventListener('mousemove', resize);
    document.addEventListener('touchmove', resize);
    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchend', stopResize);
    // Event listener for image upload
    document.getElementById('image-upload-input').addEventListener('change', handleImageUpload);

});

