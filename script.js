//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const nameInput = document.getElementById('name').value;
    const ageInput = document.getElementById('age').value;

    // Basic validation: Check if inputs are not empty
    if (nameInput === '' || ageInput === '') {
        alert('Please fill out both fields.');
        return;
    }

    const age = Number(ageInput);

    // Create a promise that resolves or rejects based on the age
    const ageCheckPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // 4-second delay
    });

    // Handle the promise resolution or rejection
    ageCheckPromise
        .then(() => {
            alert(`Welcome, ${nameInput}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry, ${nameInput}. You aren't old enough.`);
        });
});
