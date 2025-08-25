const Animal = require('./Animal.js');

class Cachorro extends Animal {
    falar() {
        console.log("AU AU AU")
    }
}

module.exports = Cachorro;