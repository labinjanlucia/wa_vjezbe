const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
    });
const users = [
        { id: 1, ime: "Ivana", prezime: "Horvat" },
        { id: 2, ime: "Marko", prezime: "Marić" },
        { id: 3, ime: "Ana", prezime: "Kovač" }
      ];

app.get("/users", (req, res) => {
    res.json();
    });
const pizze = [
        { id: 1, naziv: 'Margherita', cijena: 6.5 },
        { id: 2, naziv: 'Capricciosa', cijena: 8.0 },
        { id: 3, naziv: 'Quattro formaggi', cijena: 10.0 },
        { id: 4, naziv: 'Šunka sir', cijena: 7.0 },
        { id: 5, naziv: 'Vegetariana', cijena: 9.0 }
        ];

app.get("/pizze", (req, res) => {
        res.json({pizze});
        });
app.get('/pizze/:id', (req, res) => {
        const id_pizza = req.params.id;
        if (isNaN(id_pizza)) {
            // provjeravamo je li id_pizza "Not a Number"
        res.json({ message: 'Proslijedili ste parametar id koji nije broj!' });
        return;
}
const pizza = pizze.find(pizza => pizza.id == id_pizza);
if (pizza) {
res.json(pizza);
} else {
res.json({ message: 'Pizza s traženim ID-em ne postoji.' });
}
});
const orders = [];

// Updated /naruci route
app.post('/naruci', (req, res) => {
    const narudzbe = req.body;

    // Check if the request body is an array
    if (!Array.isArray(narudzbe)) {
        return res.status(400).json({ message: 'Podaci o narudžbama moraju biti poslani kao niz objekata.' });
    }

    // Validate each order in the array
    for (let narudzba of narudzbe) {
        const { pizza, velicina, kolicina } = narudzba;
        
        // Check if each order has pizza, velicina, and kolicina
        if (!pizza || !velicina || typeof kolicina !== 'number') {
            return res.status(400).json({
                message: 'Svaka narudžba mora sadržavati polja pizza, velicina, i kolicina (kao broj).'
            });
        }
        
        // Add the validated order to the orders array
        orders.push({ pizza, velicina, kolicina });
    }

    res.json({
        message: `Uspješno zaprimljene narudžbe: ${narudzbe.length}`,
        narudzbe: orders
    });
});

app.put("/pizza/:id", (req,res)=>{
    let id_pizze=req.oarams.id;
    let tijelo_zahtijeva=req.body;

    if(isNaN(id_pizza)){
        return res.json({message:"Prosljedili ste parametar id koji nije brj"});
    }
    let index=pizze.findIndex(pizza=>pizza.id=id_pizza_req);
    pizze[index]=tijelo_zahtijeva;
    

});

app.patch("/pizze/:id",(req,res)=>{
    let id_pizze_req=req.params.id;
    let tijelo_zahtijev=req.body;
    if(isNaN(id_pizza_req)){
        return res.json({message:"prosljedili ste parametar id koji nije broj"});

    }
    let index=pizze.findIndex(pizza=>pizza.id=id_pizza_req);

    let kljucevi_objekt=Object.keys(tijelo_zahtijeva);
    console.log(kljucevi_objekta);
    for(let kljuc of kljucevi_objekt){
        if(pizze[index][kljuc]!= tijelo_zahtijev[kljuc]){

        }
    }
})

app.listen(PORT, (error) => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});
