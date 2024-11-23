import express from 'express';
const app=express();
const PORT = 3001;
app.use(express.json());
import zaposleniciRouter from './routes/zaposlenici.js';
app.use(zaposleniciRouter);


app.listen(PORT, error => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
        }
     else {
        console.log(`Server je pokrenut na http://localhost:${PORT}`);
            }
            });