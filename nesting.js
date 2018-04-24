var youDontNeedToWorryAboutAnythingInHere = function () {
    var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur', 'Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
    var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
    var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
    var emptyNetwork = [];

    function createNetwork(collection) {

        for (var i = 0; i < NameArray.length; i++) {
            var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
            var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

            collection.push(createNewUser(NameArray[i], randomJob, randomCity));
        }

        return collection
    }

    return createNetwork(emptyNetwork);

}


function createNewUser(username, job, city) {
    var newUser = {
        username: username,
        job: job,
        city: city,
        friends: [],
        family: [],
        coworkers: [],
    };

    return newUser;

};

var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
var allUsers = youDontNeedToWorryAboutAnythingInHere();

console.dir(allUsers);
console.dir(joeyProfile);

for(var i = 0; i < allUsers.length; i++){
    if(allUsers[i].city === joeyProfile.city){
        joeyProfile.friends.push(allUsers[i].username);
    }
}

console.log(joeyProfile);

for(var i = 0; i < allUsers.length; i++){
    if(allUsers[i].job === joeyProfile.job){
        joeyProfile.coworkers.push(allUsers[i].username);
    }
}

console.log(joeyProfile);
function getLastName(person){
    return person.username.split(' ')[1];
}

joeyProfile.family = allUsers.filter(function(person){
    return getLastName(person) === getLastName(joeyProfile);
}).map(function(person){
    return person.username;
});

console.log(joeyProfile);


for(var i = 0; i < joeyProfile.friends.length; i++){
    for(var z = 0; z < joeyProfile.family.length; z++){
        if(joeyProfile.family[i] === joeyProfile.friends[z]){
            joeyProfile.friends.splice(z,1);
        }
    }
}

console.log(joeyProfile);