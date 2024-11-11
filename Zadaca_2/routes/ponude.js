import express from 'express';
import { nekretnine } from './nekretnine.js';
const router = express.Router();

const ponude=[];


router.get('/ponude', (req, res) => {
    res.json(ponude);
});

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




if (!id || !ime|| !prezime || ponudena_cijena == null || !broj_telefona) {
    return res.status(400).json({ message: "Unesite sve podatke" });
}

const postoji_nekretnina = nekretnine.some(nekretnina => nekretnina.id === id);
    if (!postoji_nekretnina) {
        return res.status(404).json({ message: "Nekretnina s traženim ID-em ne postoji." });
    }

if (typeof ponudena_cijena !== 'number' || ponudena_cijena < 0) {
    return res.status(400).json({ message: "Ponudena cijena mora biti pozitivan broj." });
}
if (typeof ime !== 'string' || typeof prezime !== 'string') {
    return res.status(400).json({ message: "Ime i prezime moraju biti string." });
}


    const nova_ponuda = {
        id: ponude.length + 1,
        id_nekretnine:id,
        ime,
        prezime,
        ponudena_cijena,
        broj_telefona
    };
    ponude.push(nova_ponuda);
    res.status(201).json(nova_ponuda);
});

export default router;