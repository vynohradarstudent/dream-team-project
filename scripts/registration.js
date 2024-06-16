$(document).ready(function () {

    $(".continue").on("click", async function () {
        let email = $("#email").val();
        let password = $("#password").val();
        let username = $("#username").val();
        let confirmPassword = $("#confirmPassword").val();


if(email === "" || password === "" || username === "" || confirmPassword === ""){
    alert('You have not entered all the data')
return
} else{

            let token = await register({
                displayName: username,
                email: email.toLowerCase().trim(),
                password: password.trim(),
                confirmPassword: confirmPassword.trim(),

            });


        }

        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);


        $(location).prop('href', '../index.html')
    });
});