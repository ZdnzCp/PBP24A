var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: { 
            firstName: 'Andrea', 
            lastName: 'Dovizioso', 
            country: 'Italy' }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: { 
            firstName: 'Cal', 
            lastName: 'Crutchlow', 
            country: 'UK' }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: { 
            firstName: 'Valentino', 
            lastName: 'Rossi', 
            country: 'Italy' }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: { 
            firstName: 'Andrea', 
            lastName: 'Dovizioso', 
            country: 'Italy' }
    }
];


var result = {};

motoGP.forEach(function(race) {
    var country = race.winner.country;
    var name = race.winner.firstName + ' ' + race.winner.lastName;
    var winLocation = race.circuit + ', ' + race.location;

    if (!result[country]) {
        result[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    result[country].winningCircuits.push({ name: name, winLocation: winLocation });
    result[country].totalWin++;
});

console.log(JSON.stringify(result, null, 2));
