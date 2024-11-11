import express from 'express';
const router = express.Router();


const nekretnine = [
{id:1,naziv:"Kuca_s_bazenom",opis:"Kuca u uvali s bazenom"}
];


router.get('/nekretnine', (req, res) => {
    res.send('Ovdje su sve nekretnine!');
    res.json(nekretnine);
});

router.get('/nekretnine/:id', (req, res) => {
    const id_nekretnina = req.params.id;
     if(isNaN(id_nekretnina)){
        res.json({message:"Prosljedili ste parametar koji nije broj!"});
        return;
     }
    const nekretnine = nekretnina.find(nekretnina => nekretnina.id == id_nekretnina); 
    
    if(nekretnine){
        res.json(nekretnine);
    }
    else{
        res.json({message:"Nekretnina s trazenim id-om ne postoji"});
    }
    });

    router.delete('/:id', (req, res) => {
        const id_nekretnina = parseInt(req.params.id); // Parse ID as an integer
        const index = nekretnine.findIndex(nekretnina => nekretnina.id === id_nekretnina);
    
        if (index !== -1) {
            
            nekretnine.splice(index, 1);
            res.json({ message: 'Nekretnina uspješno obrisana.' });
        } else {
            
            res.json({ message: 'Nekretnina s traženim ID-em ne postoji.' });
        }
    });
    

    export default router;