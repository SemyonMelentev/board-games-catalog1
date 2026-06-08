const container = document.getElementById("gamesContainer");
const searchInput = document.getElementById("search");
const genreFilter = document.getElementById("genreFilter");

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

            <img src="${game.image}"
                 alt="${game.title}"
                 onerror="this.src='https://via.placeholder.com/400x550?text=${encodeURIComponent(game.title)}'">

            <div class="card-content">

                <h3>${game.title}</h3>

                <div class="genre">
                    ${game.genre}
                </div>

                <div class="players">
                    👥 Игроков: ${game.players}
                </div>

                <div class="rating">
                    ⭐ Рейтинг: ${game.rating}
                </div>

                <a class="details-btn"
                   href="game.html?id=${game.id}">
                    Подробнее
                </a>

            </div>
        `;

        container.appendChild(card);

    });

}

renderGames(games);

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
