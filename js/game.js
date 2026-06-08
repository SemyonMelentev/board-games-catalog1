const params = new URLSearchParams(window.location.search);

const gameId = Number(params.get("id"));

const game = games.find(item => item.id === gameId);

const gameDetails = document.getElementById("gameDetails");

if (!game) {

    gameDetails.innerHTML = `
        <div class="game-card">
            <h2>Игра не найдена</h2>
            <a href="index.html">Назад</a>
        </div>
    `;

} else {

    document.title = game.title;

    gameDetails.innerHTML = `
        <div class="game-detail">
            <img src="${game.image}" alt="${game.title}" class="game-image">

            <h1>${game.title}</h1>

            <p><strong>Жанр:</strong> ${game.genre}</p>
            <p><strong>Игроков:</strong> ${game.players}</p>
            <p><strong>Рейтинг:</strong> ${game.rating}</p>

            <p>${game.description}</p>

            <a href="index.html" class="details-btn">
                ← Назад в каталог
            </a>
        </div>
    `;
}
