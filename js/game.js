const params = new URLSearchParams(window.location.search);

const gameId = Number(params.get("id"));

const gameDetails = document.getElementById("gameDetails");

gameDetails.innerHTML = `

<p>ID из URL: ${gameId}</p>
<p>Количество игр: ${games.length}</p>
`;

const game = games.find(item => item.id === gameId);

if (game) {

```
gameDetails.innerHTML += `
    <h1>${game.title}</h1>
    <p>${game.description}</p>
`;
```

} else {

```
gameDetails.innerHTML += `
    <h2>Игра не найдена</h2>
`;
```

}
