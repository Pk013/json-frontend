const userCreateForm = document.getElementById("user-create-form");
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']");
userCreateForm.addEventListener("submit", submitInputs);
function submitInputs(event) {
    event.preventDefault();
        let userInfo = {
            fullName: document.getElementById("fullName").value,
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            birthday: document.getElementById("birthday").value
        };
    let userInfoStringified = JSON.stringify(userInfo);
    const postMethod = {
        method: "POST",
        body: userInfoStringified,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    };
    let url = "/api/user"
    console.log(userInfoStringified);
    fetch(url, postMethod)
        .then(response => {
            // response.json();
            if(response.status === 201) {
                alert("success!")
            } else if(response.status === 409) {
                alert("username exists")
            }
            return response.json()
        })
        .then(response => {
            console.log(response)
        })
};