$(document).ready(async function () {

    $("#login").on("click", async function () {
        let email = $("#email").val();
        let password = $("#password").val();

        let token = await login({
            email: email,
            password: password
        });

        if (!token.error) {
            localStorage.setItem("accessToken", token.accessToken);
            localStorage.setItem("refreshToken", token.refreshToken);

            window.location.reload();
        } else {
            alert("Incorrect email or password")
        }


    });


    let games = await getAllGames();

    games.forEach(e => {

        $(".bon2").append(`

    <div class="game-card">
        <img class="icon" src="${e.titleImageUrl}">
        <h2  class="name"> ${e.title} </h2>
        <p class="price"> USD ${e.price} </p>
        <a href="../views/game.html?id=${e.id}"> <button class="buy"> Buy </button> </a>
    </div>
    
    
    `)
    })

});