document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const ageInput = document.getElementById('age').value;
    const nameInput = document.getElementById('name').value;

    // Validate that inputs are not empty
    if (ageInput === '' || nameInput === '') {
        alert('Please fill in both fields.');
        return;
    }

    const age = Number(ageInput);
    const name = nameInput;

    // Create a promise to handle the age validation
    const ageValidationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    });

    ageValidationPromise
        .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});
