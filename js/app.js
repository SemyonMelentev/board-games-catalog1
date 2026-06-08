const container = document.getElementById("gamesContainer");
const searchInput = document.getElementById("search");
const genreFilter = document.getElementById("genreFilter");

const savedGames =
JSON.parse(localStorage.getItem("customGames")) || [];

games.push(...savedGames);

function renderGames(list) {

container.innerHTML = "";

if (list.length === 0) {

    container.innerHTML = `
        <h2>Ничего не найдено 😔</h2>
    `;

    return;
}

list.forEach(game => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <img
            src="${game.image}"
            alt="${game.title}"
            onerror="this.src='https://via.placeholder.com/400x550?text=${encodeURIComponent(game.title)}'">

        <div class="card-content">

            <h3>${game.title}</h3>

            <div class="genre">
                ${game.genre}
            </div>

            <div class="players">
                👥 Игроков: ${game.players || "-"}
            </div>

            <div class="players">
                📅 Год: ${game.year || "-"}
            </div>

            <div class="players">
                ⏱️ Время партии: ${game.playTime || "-"}
            </div>

            <div class="rating">
                ⭐ Рейтинг: ${game.rating}
            </div>

            <a
                class="details-btn"
                href="game.html?id=${game.id}">
                Подробнее
            </a>

        </div>
    `;

    container.appendChild(card);

});

}

function filterGames() {

const searchValue =
    searchInput.value.toLowerCase();

const selectedGenre =
    genreFilter.value;

const filteredGames =
    games.filter(game => {

        const matchesSearch =
            game.title
                .toLowerCase()
                .includes(searchValue);

        const matchesGenre =
            selectedGenre === "all" ||
            game.genre === selectedGenre;

        return (
            matchesSearch &&
            matchesGenre
        );

    });

renderGames(filteredGames);

}

searchInput.addEventListener(
"input",
filterGames
);

genreFilter.addEventListener(
"change",
filterGames
);

renderGames(games);

const addGameBtn =
document.getElementById("addGameBtn");

const gameFormContainer =
document.getElementById("gameFormContainer");

const saveGameBtn =
document.getElementById("saveGameBtn");

if (addGameBtn && gameFormContainer) {

addGameBtn.addEventListener("click", () => {

    if (
        gameFormContainer.style.display === "none" ||
        gameFormContainer.style.display === ""
    ) {

        gameFormContainer.style.display = "block";

    } else {

        gameFormContainer.style.display = "none";

    }

});

}

if (saveGameBtn) {

saveGameBtn.addEventListener("click", () => {

    const newGame = {

        id: Date.now(),

        title:
            document.getElementById("newTitle").value,

        genre:
            document.getElementById("newGenre").value,

        players:
            document.getElementById("newPlayers").value,

        rating:
            Number(
                document.getElementById("newRating").value
            ),

        image:
            document.getElementById("newImage").value,

        description:
            document.getElementById("newDescription").value,

        year: "-",

        playTime: "-"

    };

    games.push(newGame);

    savedGames.push(newGame);

    localStorage.setItem(
        "customGames",
        JSON.stringify(savedGames)
    );

    renderGames(games);

    gameFormContainer.style.display = "none";

    document.getElementById("newTitle").value = "";
    document.getElementById("newGenre").value = "";
    document.getElementById("newPlayers").value = "";
    document.getElementById("newRating").value = "";
    document.getElementById("newImage").value = "";
    document.getElementById("newDescription").value = "";

});

}
