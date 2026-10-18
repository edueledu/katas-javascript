
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const container = document.getElementById('album-container');
const ul = document.createElement('ul');

albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    ul.appendChild(li);
});

container.appendChild(ul);