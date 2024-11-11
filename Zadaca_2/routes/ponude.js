import express from 'express';
const router = express.Router();

const ponude=[];
//prikazivanje ponuda

router.get('/ponude', (req, res) => {
    res.json(ponude);
});
//ponude id provjer broja i id
router.get('/ponude/:id', (req, res) => {
    const id_ponuda = parseInt(req.params.id);
    if (isNaN(id_ponuda)) {
        return res.status(400).json({ message: "Prosljedili ste parametar koji nije broj!" });
    }
    const ponuda = ponude.find(ponuda => ponuda.id === id_ponuda);

    if (ponuda) {
        res.json(ponuda);
    } else {
        res.status(404).json({ message: "Ponuda s traženim ID-em ne postoji." });
    }
});

router.post('/ponude', (req, res) => {
    const { id, ime, prezime, ponudena_cijena, broj_telefona } = req.body;


//jeli sve uneseno

if (!id || !ime|| !prezime || ponudena_cijena == null || !broj_telefona) {
    return res.status(400).json({ message: "Unesite sve podatke" });
}
//provjera id nekretnine
const postoji_nekretnina = nekretnine.some(nekretnina => nekretnina.id === id_nekretnine);
    if (!postoji_nekretnina) {
        return res.status(404).json({ message: "Nekretnina s traženim ID-em ne postoji." });
    }
//provjerit jesu li podaci ispravni
if (typeof ponudena_cijena !== 'number' || ponudena_cijena < 0) {
    return res.status(400).json({ message: "Ponudena cijena mora biti pozitivan broj." });
}
if (typeof ime !== 'string' || typeof prezime !== 'string') {
    return res.status(400).json({ message: "Ime i prezime moraju biti u obliku podaci." });
}


    const nova_ponuda = {
        id: ponude.length + 1,
        id,
        ime,
        prezime,
        ponudena_cijena,
        broj_telefona
    };
    ponude.push(nova_ponuda);

});