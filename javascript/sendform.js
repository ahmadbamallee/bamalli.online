document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form
    const form = document.querySelector('.message-form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Create a new FormData object to collect form data
        const formData = new FormData(form);

        // Create a new window/tab for form submission
        const newTab = window.open('', '_blank');

        // Set up a callback function to handle the response
        newTab.onload = function() {
            newTab.document.write('Form is submitting...');
        };

        // Create a hidden form in the new tab and submit it
        const hiddenForm = newTab.document.createElement('form');
        hiddenForm.action = 'https://formspree.io/f/mvojagzg';
        hiddenForm.method = 'POST';
        hiddenForm.style.display = 'none';

        // Append form data to the hidden form
        for (const [key, value] of formData.entries()) {
            const input = newTab.document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            hiddenForm.appendChild(input);
        }

        newTab.document.body.appendChild(hiddenForm);
        hiddenForm.submit();
    });
});
