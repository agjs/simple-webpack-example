const $ = require('jquery');
let library = {};

library.append = (users) => {
    for(let user of users) {
        $('ul').append(`<li>The user's name is ${user.name}</li>`);
    }
};

module.exports = library;

