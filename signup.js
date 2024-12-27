const signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
        alert('User registered successfully!');
    } else {
        alert('Error registering user.');
    }
});
