const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
    const { nazwa } = req.body;
    try{
        const kategoria = await prisma.kategoria.create({
            data:{nazwa},
        });
        res.status(201).json(kategoria);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się utworzyć kategorii."});
    }
});
router.get('/', async (req, res) => {
    try{
        const kategoria = await prisma.kategoria.findMany();
        res.json(kategoria);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się pobrać kategorii"})
    }
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    try{
        const kategoria= await prisma.kategoria.findUnique({
            where: {id:Number(id)},
        });
        if(!kategoria) return res.status(404).json({err: "kategorii nie znaleziono"})
        res.json(kategoria);
    }
    catch(err){
        res.status(500).json({ error: 'Błąd pobierania kategorii.' });
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const nazwa = req.params.nazwa;
    try{
        const kategoria = await prisma.kategoria.update({
            where: {id:Number(id)},
            data: {nazwa},
        });
        res.json(kategoria);
    }
    catch(err){
        res.status(500).json({err:"Nie udało się zaktualizować kategorii. "})
    }
});

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        await prisma.kategoria.delete({ where: { id: Number(id) } });
        res.json({ message: 'Kategoria został usunięty.' });
    } catch (error) {
        res.status(500).json({ error: 'Nie udało się usunąć kategorii.' });
    }
})
module.exports = router;