var randomstring = require('randomstring');
var fs = require('fs');

var users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

users = users.map(user=>{
    return {
        ...user,
        password: randomstring.generate(6)
    }
});

fs.writeFileSync('./users.json', JSON.stringify(users));