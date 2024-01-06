    // script.js

    document.addEventListener("DOMContentLoaded", function () {
        const knowMoreBtn = document.getElementById('knowMoreBtn');
        const closeBtn = document.getElementById('close');
        const popup = document.getElementById('popupMenu');

        knowMoreBtn.addEventListener('click', function () {
            popup.classList.add('popupActive');
        });

        closeBtn.addEventListener('click', function () {
            popup.classList.remove('popupActive');
        });
    });
