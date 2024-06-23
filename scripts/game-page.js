$(document).ready(async function () {
    let variable = window.location.search
    let game = await getGameById(variable.split("=")[1])


    console.log(game)

    $(".fort").html(game.title)
    $(".window_price").html('USD ' + game.price)
});

