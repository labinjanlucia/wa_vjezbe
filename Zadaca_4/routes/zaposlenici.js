import express from 'express';

const router = express.Router();
    
    
    export const zaposlenici = [
        {id:1,ime:"Ivan",prezime:"Ivić",godine_staza:28,pozicija:"direktor"},
        {id:2,ime:"pero",prezime:"perić",godine_staza:4,pozicija:"menadzer"}
    ];
    
    router.get('/', (req, res) => {
        res.status(200).json(zaposlenici);
        });

    router.get('/:id', (req, res) => {
        const id_req =req.params.id;
        if (isNaN(id_req)) {
            res.status(400).send('ID mora biti broj');
        return;
        }
            
        const zaposlenik = zaposlenici.find(zaposlenik => zaposlenik.id == id_req);
            if (zaposlenik) {
                res.status(200).json(zaposlenik);
            } else {
                res.status(404).send(' Zaposlenik nije pronađen');
            }
            });
export default router;

  