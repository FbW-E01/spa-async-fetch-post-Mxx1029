// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";

// \/ All of your javascript should go here \/


const form = document.querySelector("#submit-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const message = document.querySelector("#message");
    const checkbox = document.querySelector("#checkbox");
    const button = document.querySelector("button");

    // disabled as property on button in html is missing, but event listener wasn't working anyway
    // checkbox.addEventListener("change", () => {
    //     button.disabled = !button.disabled;
    // })

    const user = {
        name : name.value,
        email : email.value,
        password : password.value,
        message :  message.value,
        checkbox : checkbox.checked,
    }
    
    console.log(user);

    const postUser = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(user)
        });
        const data = await response.json();
        return data;
    }

    postUser()
        .then(x => {
            console.log(x);
            alert("Form has been submitted");
        })
        .catch(error => console.warn(error))

})