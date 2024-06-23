$(document).ready(async function () {
    let variable = window.location.search
    let game = await getGameById(variable.split("=")[1])


    console.log(game)

    $(".fort").html(game.title)
    $(".window_name").html(game.title)
    $(".releaseDate").html('release date : ' + game.releaseDate)
    $(".logotype").html('<img src=" ' + game.titleImageUrl + '" alt="">')


    $(".carousel-inner").append(`
        <div class="carousel-item active">
            <img src="${game.screenshots[0]}" class="d-block w-100" alt="...">
        </div>
    `)
    game.screenshots.slice(1).forEach(e => {
        $(".carousel-inner").append(`
        <div class="carousel-item">
            <img src="${e}" class="d-block w-100" alt="...">
        </div>
    `)
    })


    $(".bio").html(game.description)
    $(".window_price").html('USD ' + game.price)
});

