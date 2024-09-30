window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Scale for foreground
    const scaleFactor1 = 1 + scrollY / 200;
    const foreground = document.getElementById('foreground'); 
    const scaleValue1 = Math.min(scaleFactor1, 2);
    foreground.style.transform = `scale(${scaleValue1})`;
    // Scale for background
    const scaleFactor2 = 1 + scrollY / 1000;
    const background = document.getElementById('background');
    const scaleValue2 = Math.min(scaleFactor2, 1.2);
    background.style.transform = `scale(${scaleValue2})`;
    
    // Calculate blur and brightness values
    const maxBlur = 2; // Maximum blur in pixels
    const minBlur = 0; // Minimum blur in pixels

    // Calculate the new blur and brightness based on scroll
    const blurValue = Math.max(minBlur, maxBlur - (scrollY / 100)); // Adjusts blur from max to min

    // Apply the calculated filter values
    background.style.filter = `blur(${blurValue}px)`;
});
