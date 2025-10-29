const express = require('express');
const app = express();
const port = 8000;

const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
    }
];

app.get('/', (req, res) => {
    res.json(motoGP);
});

app.get('/country', (req, res) => {
    const grouped = {};

    motoGP.forEach(race => {
        const country = race.winner.country;
        if (!grouped[country]) grouped[country] = [];
        grouped[country].push(race);
    });

    res.json(grouped);
});

app.get('/name', (req, res) => {
    const grouped = {};

    motoGP.forEach(race => {
        const name = `${race.winner.firstName} ${race.winner.lastName}`;
        if (!grouped[name]) grouped[name] = [];
        grouped[name].push(race);
    });

    res.json(grouped);
});

app.use((req, res) => {
    res.status(400).send('Bad Request');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
