// your-script.js

document.addEventListener('DOMContentLoaded', () => {
    const ageForm = document.getElementById('ageForm');
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    ageForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form submission

        const age = parseInt(ageInput.value, 10);
        const name = nameInput.value;

        if (isNaN(age) || age <= 0) {
            alert('Please enter a valid age.');
            return;
        }

        try {
            // Simulate asynchronous processing (4 seconds delay)
            await new Promise((resolve) => setTimeout(resolve, 4000));

            if (age >= 18) {
                alert(`Welcome, ${name}. You can vote.`);
            } else {
                alert(`Oh sorry, ${name}. You aren't old enough.`);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
});
