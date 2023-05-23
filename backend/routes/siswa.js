const express = require('express');
const router = express.Router();
const Siswa = require('../models/Siswa');

// Tambahkan siswa baru
router.post('/', async (req, res) => {
  try {
    const siswa = await Siswa.create(req.body);
    res.status(201).json(siswa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal menambahkan siswa baru' });
  }
});

// Dapatkan semua siswa
router.get('/', async (req, res) => {
  try {
    const siswa = await Siswa.findAll();
    res.json(siswa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mendapatkan data siswa' });
  }
});

module.exports = router;
