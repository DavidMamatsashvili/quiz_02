const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    if (name == "" || email == "" || age == "") {
        alert("enter a valid argument");
        return;
    }

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="submission-item">
            <div class="submission-details">
                <div class="detail-row">
                <p class="detail-label">Name:</p>
                <p class="detail-value">${name}</p>
            </div>
            <div class="detail-row">
                <p class="detail-label">Email:</p>
                <p class="detail-value">${email}</p>
            </div>
            <div class="detail-row">
                <p class="detail-label">Age:</p>
                <p class="detail-value">${age}</p>
            </div>
            </div>
        </div>
    `
    const submission_list = document.querySelector(".submissions-list");
    submission_list.appendChild(div);
    name.value="";
    email.value="";
    age.value="";
})