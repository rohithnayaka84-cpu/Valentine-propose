// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('proposalButton');
    const proposalText = document.getElementById('proposalText');
    
    // Add click event to the button
    button.addEventListener('click', function() {
        // Hide the button and show the proposal text
        button.style.display = 'none';
        proposalText.classList.remove('hidden');
        
        // Optional: Add confetti or heart animation (using a simple effect)
        createHearts();
    });
    
    // Function to create floating hearts animation
    function createHearts() {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.animation = 'floatUp 3s ease-in forwards';
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => heart.remove(), 3000);
        }
    }
    
    // CSS for the floating animation (added dynamically)
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes floatUp {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});