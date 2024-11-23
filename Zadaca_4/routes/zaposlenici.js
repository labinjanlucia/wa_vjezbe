import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const router = express.Router();

// Path to the JSON file
const zaposleniciFilePath = path.join('data', 'zaposlenici.json');

const  read_zaposlenici_from_file = async () => {
    try {
        const data = await fs.readFile(zaposleniciFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Greška prilikom čitanja datoteke:', error);
        return []; 
    }
};


const write_zaposlenici_u_file = async (zaposlenici) => {
    try {
        await fs.writeFile(zaposleniciFilePath, JSON.stringify(zaposlenici, null, 2));
    } catch (error) {
        console.error('Greška prilikom pisanja u datoteku:', error);
        throw error;
    }
};


router.get('/', async (req, res) => {
    try {
        const zaposlenici = await  read_zaposlenici_from_file()
        res.status(200).json(zaposlenici);
    } catch (error) {
        res.status(500).send('Greška prilikom čitanja podataka.');
    }
});


router.get('/:id', async (req, res) => {
    const id_req = parseInt(req.params.id, 10);
    if (isNaN(id_req)) {
        return res.status(400).json({ message: "ID mora biti broj" });
    }

    try {
        const zaposlenici = await  read_zaposlenici_from_file();
        const zaposlenik = zaposlenici.find(z => z.id === id_req);

        if (zaposlenik) {
            res.status(200).json(zaposlenik);
        } else {
            res.status(404).json({ message: "Zaposlenik nije pronađen" });
        }
    } catch (error) {
        res.status(500).send('Greška prilikom čitanja podataka.');
    }
});
router.post('/', async (req, res) => {
    const { id, ime, prezime, godine_staza, pozicija } = req.body;

    
    if (!id || !ime || !prezime || !godine_staza || !pozicija) {
        return res.status(400).send('Svi podaci su obavezni.');
    }
    if (typeof id !== 'number' || id <= 0) {
        return res.status(400).send('ID mora biti pozitivan broj.');
    }
    if (typeof ime !== 'string' || typeof prezime !== 'string' || typeof pozicija !== 'string') {
        return res.status(400).send('Ime, prezime i pozicija moraju biti stringovi.');
    }
    if (typeof godine_staza !== 'number' || godine_staza < 0) {
        return res.status(400).send('Godine staža mora biti pozitivan broj.');
    }

    try {
    
        const zaposlenici = await read_zaposlenici_from_file();

        
        if (zaposlenici.some(zaposlenik => zaposlenik.id === id)) {
            return res.status(400).send('Zaposlenik s tim ID-em već postoji.');
        }

        
        const novi_zaposlenik = { id, ime, prezime, godine_staza, pozicija };

        
        zaposlenici.push(novi_zaposlenik);
        await write_zaposlenici_u_file(zaposlenici);

        console.log('Podaci uspješno zapisani u datoteku.');
        res.status(201).send('Podaci uspješno zapisani u datoteku.');
    } catch (error) {
        console.error('Greška prilikom pohrane u datoteku:', error);
        res.status(500).send('Greška prilikom pohrane u datoteku.');
    }
});

export default router;


  