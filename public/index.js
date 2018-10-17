
const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

userCreateForm.addEventListener("submit", action)

let userObject = {}

function action(event) {

    event.preventDefault();
    const email = document.getElementById("email").value
    const userName = document.getElementById("username").value
    const fullName = document.getElementById("fullname").value
    const birthday = document.getElementById("dob").value

    userObject.email = email
    userObject.userName = userName
    userObject.fullName = fullName
    userObject.birthday = birthday

    console.log(userObject)

    const jsonUserObject = JSON.stringify(userObject)

    postUser(jsonUserObject)

}

function postUser(userInfo) {
    // console.log('again user', userInfo)
    fetch('./api/user', {
            method: "POST",
            body: userInfo,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'no-cors'
        })
        .then((res) => res.json())
        .then(data => {
            console.log('Reached Server, Server Message:', data)
            if (data.message === "Error, username Exists") {
                alert("Denied")

            } else {

                alert("Success")


            }
        })

    .catch(error => console.log('Error:', error))

}