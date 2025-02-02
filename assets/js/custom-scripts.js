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