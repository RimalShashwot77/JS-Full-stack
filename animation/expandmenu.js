<<<<<<< HEAD
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        document.querySelectorAll('.accordion-button.active').forEach(activeButton => {
            if (activeButton !== button) {
                activeButton.classList.remove('active');
                activeButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});
=======
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        document.querySelectorAll('.accordion-button.active').forEach(activeButton => {
            if (activeButton !== button) {
                activeButton.classList.remove('active');
                activeButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});
>>>>>>> 1e8c9a737fe1c3e13c78351b186e357290bbb0cc
