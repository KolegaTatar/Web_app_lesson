const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
    const { tytul, tresc } = req.body;
    try{
        const wpis = await prisma.wpis.create({
            data:{tytul, tresc},
        });
        res.status(201).json(wpis);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się utworzyć wpisu.", details: err.message });
    }
});
router.get('/', async (req, res) => {
    try{
        const wpis = await prisma.wpis.findMany({
            include: { kategorie: true, komentarze: true },
        });
        res.json(wpis);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się pobrać wpisów"})
    }
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    try{
        const wpis= await prisma.wpis.findUnique({
            where: {id:Number(id)},
            include: { kategorie: true, komentarze: true },
        });
        if(!wpis) return res.status(404).json({err: "Wpisu nie znaleziono"})
        res.json(wpis);
    }
    catch(err){
        res.status(500).json({ error: 'Błąd pobierania wpisu.' });
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const tytul = req.params.tytul;
    try{
        const wpis = await prisma.wpis.update({
            where: {id:Number(id)},
            data: {tytul, tresc},
        });
        res.json(wpis);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się zaktualizować wpisu. "})
    }
});

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        await prisma.wpis.delete({ where: { id: Number(id) } });
        res.json({ message: 'Wpis został usunięty.' });
    } catch (error) {
        res.status(500).json({ error: 'Nie udało się usunąć wpisu.' });
    }
})
module.exports = router;