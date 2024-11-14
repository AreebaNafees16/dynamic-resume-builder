interface ResumeData {
    name: string;
    email: string;
    phone: string;
    title: string;
    summary: string;
    skills: string[];
    experience: string;
    education: string;
}

function generateResume1() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;

    const resumeData: ResumeData = { name, email, phone, title, summary, skills, experience, education };
    displayResume(resumeData);
}

function displayResume1(data: ResumeData) {
    const resumeContent = document.getElementById("resume-content")!;
    resumeContent.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Job Title:</strong> ${data.title}</p>
        <p><strong>Summary:</strong> ${data.summary}</p>
        <p><strong>Skills:</strong> ${data.skills.join(', ')}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Education:</strong> ${data.education}</p>
    `;
}

