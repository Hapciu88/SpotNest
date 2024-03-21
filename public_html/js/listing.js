document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-carousel img');
    const totalImages = images.length;
    let currentIndex = 0;

    // Function to show current image
    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    // Show the initial image
    showImage(currentIndex);

    // Function to move to the next image
    function nextImage() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0; // Wrap around to the first image
        }
        showImage(currentIndex);
    }

    // Function to move to the previous image
    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1; // Wrap around to the last image
        }
        showImage(currentIndex);
    }

    // Event listeners for carousel buttons
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    leftBtn.addEventListener('click', prevImage);
    rightBtn.addEventListener('click', nextImage);
});

document.addEventListener("DOMContentLoaded", function() {
    const starsContainers = document.querySelectorAll('.stars');

    starsContainers.forEach(container => {
        const rating = parseInt(container.getAttribute('data-rating'));
        const starsHTML = getStarsHTML(rating);
        container.innerHTML = starsHTML;
    });

    function getStarsHTML(rating) {
        const fullStar = '&#9733;'; // Unicode character for a full star
        const halfStar = '&#9734;'; // Unicode character for a half star
        const emptyStar = '&#9734;'; // Unicode character for an empty star

        const fullStarsCount = Math.floor(rating);
        const hasHalfStar = rating - fullStarsCount > 0;
        const emptyStarsCount = 5 - fullStarsCount - (hasHalfStar ? 1 : 0);

        let starsHTML = '';
        for (let i = 0; i < fullStarsCount; i++) {
            starsHTML += fullStar;
        }
        if (hasHalfStar) {
            starsHTML += halfStar;
        }
        for (let i = 0; i < emptyStarsCount; i++) {
            starsHTML += emptyStar;
        }
        return starsHTML;
    }
});
