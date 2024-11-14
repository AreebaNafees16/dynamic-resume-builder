function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var title = document.getElementById("title").value;
    var summary = document.getElementById("summary").value;
    var skills = document.getElementById("skills").value.split(',').map(function (skill) { return skill.trim(); });
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var resumeData = { name: name, email: email, phone: phone, title: title, summary: summary, skills: skills, experience: experience, education: education };
    displayResume(resumeData);
}
function displayResume(data) {
    var resumeContent = document.getElementById("resume-content");
    resumeContent.innerHTML = "\n        <h3>".concat(data.name, "</h3>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <p><strong>Job Title:</strong> ").concat(data.title, "</p>\n        <p><strong>Summary:</strong> ").concat(data.summary, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills.join(', '), "</p>\n        <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n    ");
}
