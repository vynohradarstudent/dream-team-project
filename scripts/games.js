let a = 0


$(document).ready(async function () {
    $(".login").hide();


    $('#login2').click(function (e) { 
        if (a % 2 == 0) {
            $(".login").show();
            a++
        } else {
            $(".login").hide();
            a++
        }
       
        
    });
    
    let games = await getAllGames()

    games.forEach(e => {

        $(".games-list").append(`
      <div class="game-card">
                <img class="icon" src="${e.titleImageUrl}">
                <h2 class="name"> ${e.title} </h2>
                <p> ${e.price} </p>
                <a href="/pes-patron-fans-project/pages/game-page.html?id=${e.id}"> <button> Придбати </button> </a>
      </div>
    `)
    })
    games =  games.sort((e1, e2, e3) => e1.averageRating - e2.averageRating - e3.averageRating)

    console.log(games)


});

function addgame() {
    games.append(games.id + games.title + games.price + games.titleImageUrl);
}


