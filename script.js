function addSubject() {
    let subjectDiv = document.createElement("div");
    subjectDiv.classList.add("subject");
    subjectDiv.innerHTML = `
        <input type="number" class="credits" placeholder="Credits">
        <select class="grades">
            <option value="10">O (10)</option>
            <option value="9">A+ (9)</option>
            <option value="8">A (8)</option>
            <option value="7">B+ (7)</option>
            <option value="6">B (6)</option>
            <option value="5">C (5)</option>
            <option value="0">F (0)</option>
            <option value="0">Ab (0)</option>
            <option value="0">I (0)</option>
        </select>
        <button class="remove-btn" onclick="removeSubject(this)">❌</button>
    `;
    document.getElementById("subjects").appendChild(subjectDiv);
}

function removeSubject(button) {
    button.parentElement.remove();
}

function calculateSGPA() {
    let subjects = document.querySelectorAll(".subject");
    let totalCredits = 0, weightedGradePoints = 0;

    subjects.forEach(sub => {
        let credits = parseFloat(sub.querySelector(".credits").value);
        let grade = parseFloat(sub.querySelector(".grades").value);
        
        if (isNaN(credits)) return;

        totalCredits += credits;
        weightedGradePoints += credits * grade;
    });

    let sgpa = totalCredits ? (weightedGradePoints / totalCredits).toFixed(2) : "Invalid Input";
    document.getElementById("sgpaResult").innerText = "SGPA: " + sgpa;
}
