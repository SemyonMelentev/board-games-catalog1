const params = new URLSearchParams(window.location.search);

const gameId = Number(params.get("id"));

const game = games.find(item => item.id === gameId);

const gameDetails = document.getElementById("gameDetails");

if (!game) {

```
gameDetails.innerHTML = `
    <h2>Игра не найдена</h2>

    <a href="index.html" class="details-btn">
        Вернуться в каталог
    </a>
`;
```

} else {

```
document.title = game.title;

gameDetails.innerHTML = `

    <img
        src="${game.image}"
        alt="${game.title}"
        onerror="this.src='https://via.placeholder.com/600x800?text=${encodeURIComponent(game.title)}'"
    >

    <h1 class="game-title">
        ${game.title}
    </h1>

    <p class="info">
        <strong>Жанр:</strong>
        ${game.genre}
    </p>

    <p class="info">
        <strong>Количество игроков:</strong>
        ${game.players}
    </p>

    <p class="info">
        <strong>Рейтинг:</strong>
        ⭐ ${game.rating}
    </p>

    <div class="game-description">

        <h3>Описание</h3>

        <p>
            ${game.description}
        </p>

    </div>

    <a href="index.html" class="details-btn">
        ← Назад в каталог
    </a>

`;
```

}
