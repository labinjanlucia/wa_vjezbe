const express = require("express");
const app = express();
const PORT = 3000;
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
    res.json(users);
    });
app.listen(PORT, (error) => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});