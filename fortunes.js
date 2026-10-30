const fortunes = require('./fortunes.json')

function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

module.exports = { getFortune };