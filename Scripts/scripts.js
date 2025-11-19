document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-show');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
     /* ===== Hidden pawn easter egg ===== */

    const pawnButton = document.getElementById('hiddenPawn');
    const pawnModal  = document.getElementById('pawnModal');
    const pawnClose  = document.querySelector('.pawn-modal-close');
    const pawnText   = document.getElementById('pawnModalText');

    const pawnMessages = [
        "You found the hidden pawn. It has now evolved into a queen.",
        "I play like Magnus… sometimes. Mostly in my dreams.",
        "Every champion was once a beginner who moved a pawn.",
        "Checkmate is just a fancy way to say 'good job'.",
        "A pawn that believes in itself can become a queen.",
        "You clicked the secret pawn. That’s a strong move."
    ];

    function openPawnModal() {
        if (!pawnModal) return;

        const random = pawnMessages[Math.floor(Math.random() * pawnMessages.length)];
        if (pawnText) {
            pawnText.textContent = random;
        }
        pawnModal.classList.add('show');
    }

    function closePawnModal() {
        pawnModal?.classList.remove('show');
    }

    if (pawnButton && pawnModal) {
        pawnButton.addEventListener('click', openPawnModal);
    }

    pawnClose?.addEventListener('click', closePawnModal);

    // Close when clicking outside the box
    pawnModal?.addEventListener('click', function (e) {
        if (e.target === pawnModal) {
            closePawnModal();
        }
    });
});

