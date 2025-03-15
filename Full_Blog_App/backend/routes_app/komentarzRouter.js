const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
    const { tresc, wpisId } = req.body;
    try{
        const komentarz = await prisma.komentarze.create({
            data: { tresc, wpisId: Number(wpisId) },
        });
        res.status(201).json(komentarz);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się utworzyć komentarza."});
    }
});
router.get('/', async (req, res) => {
    try{
        const komentarze = await prisma.komentarze.findMany();
        res.json(komentarze);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się pobrać komentarzy"})
    }
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    try{
        const komentarz= await prisma.komentarz.findUnique({
            where: {id:Number(id)},
        });
        if(!komentarz) return res.status(404).json({err: "Komentarzy nie znaleziono"})
        res.json(komentarz);
    }
    catch(err){
        res.status(500).json({ error: 'Błąd pobierania kategorii.' });
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const tresc = req.params.tresc;
    try{
        const kometarz = await prisma.komentarz.update({
            where: {id:Number(id)},
            data: {tresc},
        });
        res.json(kometarz);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się zaktualizować komentarzy. "})
    }
});

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        await prisma.komentarz.delete({ where: { id: Number(id) } });
        res.json({ message: 'Komentarz został usunięty.' });
    } catch (error) {
        res.status(500).json({ error: 'Nie udało się usunąć Komentarz.' });
    }
})
module.exports = router;