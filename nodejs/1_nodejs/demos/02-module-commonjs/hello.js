function sayHello(name) {
    console.log(name);
}

function sayHelloDate(name) {
    console.log(name, new Date().toDateString());
}

// exporter nos fonctions sous forme d'objet
module.exports = {
    sayHello,
    sayHelloDate
}

// module.exports.sayHello = sayHello;
// module.exports.sayHelloDate = sayHelloDate;