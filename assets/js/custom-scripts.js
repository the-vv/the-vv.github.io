setAge();
setExperience();

function setExperience() {
    const experienceSpan = document.getElementById('thevv_experience');
    const firstJob = new Date('2020');
    const today = new Date();
    let experience = today.getFullYear() - firstJob.getFullYear();
    experienceSpan.textContent = experience;
}
function setAge() {
    const ageSpan = document.getElementById('thevv_age');
    // calculate age based on my dob: 27th july 2001
    const dob = new Date('2001-07-27');
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
    ageSpan.textContent = age;
}

const contactForm = document.getElementById('contactForm');
const alertMessageSuccess = document.getElementById('submission-status-success');
const alertMessageError = document.getElementById('submission-status-error');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    // send data to server
    fetch('https://portfolio-api.thevv.me/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                throw new Error(data.message);
            }
            alertMessageSuccess.style.display = 'block';
            contactForm.reset();
            alertMessageSuccess.classList.remove('hidden');
            alertMessageError.classList.add('hidden');
        })
        .catch((error) => {
            console.error('Error:', error);
            alertMessageError.classList.remove('hidden');
            alertMessageSuccess.classList.add('hidden');
        });
});