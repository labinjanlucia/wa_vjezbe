import express from 'express';
const router = express.Router();


const nekretnine = [
{id:1,naziv:"Kuca_s_bazenom",opis:"Kuca u uvali s bazenom", cijena:50000,lokacija:"Medulin",broj_soba:4,povrsina:3000},
{id:2,naziv:"Kuca_kraj_mora",opis:"Kuca 500m od mora", cijena:100000,lokacija:"Stinjan",broj_soba:3,povrsina:2000},
{id:1,naziv:"Kuca_u_centru",opis:"Kuca u centru grada", cijena:30000,lokacija:"Medulin",broj_soba:2,povrsina:200}
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
        res.status(404).json({message:"Nekretnina s trazenim id-om ne postoji"});
    }
    });


router.post('/nekretnine', (req, res) => {
    const { naziv, opis, cijena, lokacija, brojSoba, povrsina } = req.body;
    });
      
router.delete('/:id', (req, res) => {
    const id_nekretnina = parseInt(req.params.id); // Parse ID as an integer
    const index = nekretnine.findIndex(nekretnina => nekretnina.id === id_nekretnina);
    
    if (index !== -1) {
            
        nekretnine.splice(index, 1);
        res.json({ message: 'Nekretnina uspješno obrisana.' });
    } else {
            
        res.status(404).json({ message: 'Nekretnina s traženim ID-em ne postoji.' });
    }
    });
    

    export default router;