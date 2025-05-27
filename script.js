
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        const squares = document.querySelectorAll('.square');
        
        squares.forEach(square => {
            if (isInViewport(square)) {
                square.classList.add('visible');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on page load to show squares if they're already in viewport
    setTimeout(function() {
        handleScroll();
    }, 100);
});
