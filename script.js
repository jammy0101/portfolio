const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle menu on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Close menu if clicked outside
document.addEventListener('click', function(event) {
    // Agar click menu icon ya navbar par nahi hai
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const texts = ['Frontend Developer.', 'WordPress Developer.', 'UI/UX Designer.', 'Freelancer.'];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;

    function type() {
        if (index < texts.length) {
            const currentText = texts[index];
            if (!isDeleting) {
                textElement.textContent += currentText.charAt(charIndex);
                charIndex++;
                if (charIndex === currentText.length) {
                    setTimeout(() => {
                        isDeleting = true;
                        setTimeout(type, deletingSpeed);
                    }, 1500);
                } else {
                    setTimeout(type, typingSpeed);
                }
            } else {
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    index = (index + 1) % texts.length;
                    setTimeout(type, typingSpeed);
                } else {
                    setTimeout(type, deletingSpeed);
                }
            }
        }
    }

    type();
});
