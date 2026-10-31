const fortunes = require('./fortunes.json')

function getFortune() {
    const RandomFortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[RandomFortune];
}

module.exports = { getFortune };