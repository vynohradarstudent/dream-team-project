$(document).ready(async function () {
    let response = await getAllGames()

    let games = await response.json()
    console.log(games)

});

