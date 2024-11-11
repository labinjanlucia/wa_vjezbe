import express from 'express';
const router = express.Router();


const nekretnine = [
{id:1,naziv:"Kuca_s_bazenom",opis:"Kuca u uvali s bazenom", cijena:50000,lokacija:"Medulin",broj_soba:4,povrsina:3000},
{id:2,naziv:"Kuca_kraj_mora",opis:"Kuca 500m od mora", cijena:100000,lokacija:"Stinjan",broj_soba:3,povrsina:2000},
{id:3,naziv:"Kuca_u_centru",opis:"Kuca u centru grada", cijena:30000,lokacija:"Medulin",broj_soba:2,povrsina:200}
];


router.get('/nekretnine', (req, res) => {
   
    res.json(nekretnine);
});

router.get('/nekretnine/:id', (req, res) => {
    const id_nekretnina = req.params.id;
     if(isNaN(id_nekretnina)){
        res.json({message:"Prosljedili ste parametar koji nije broj!"});
        return;
     }
    const nekretnina = nekretnine.find(nekretnine => nekretnine.id == id_nekretnina); 
    
    if(nekretnine){
        res.json(nekretnina);
    }
    else{
        res.status(400).json({message:"Nekretnina s trazenim id-om ne postoji"});
    }
    });


router.post('/nekretnine', (req, res) => {
    const { naziv, opis, cijena, lokacija, broj_soba, povrsina } = req.body;
    
     
     if (!naziv || !opis || cijena == null || !lokacija || broj_soba == null || povrsina == null) {
        return res.status(400).json({ message: "Svi podaci su obavezni: naziv, opis, cijena, lokacija, broj soba, povrsina." });
    }


    if (cijena < 0 || broj_soba < 0 || povrsina < 0) {
        return res.status(400).json({ message: "Cijena, broj soba i površina moraju biti pozitivni brojevi." });
    }
    if (typeof lokacija !== 'string' || typeof opis !== 'string'|| typeof naziv !== 'string') {
        return res.status(400).json({ message: "Opis,naziv i lokacija moraju biti string." });
    }
    
    const nova_nekretnina = {
        id: nekretnine.length + 1,
        naziv,
        opis,
        cijena,
        lokacija,
        broj_soba,
        povrsina
    };

    nekretnine.push(nova_nekretnina);
    res.status(201).json(nova_nekretnina);
});
      
router.delete('/nekretnine/:id', (req, res) => {
    const id_nekretnina = parseInt(req.params.id); 
    const index = nekretnine.findIndex(nekretnina => nekretnina.id === id_nekretnina);
    
    if (index !== -1) {
            
        nekretnine.splice(index, 1);
        res.json({ message: 'Nekretnina uspješno obrisana.' });
    } else {
            
        res.status(404).json({ message: 'Nekretnina s traženim ID-em ne postoji.' });
    }
    });
    

    export default router;