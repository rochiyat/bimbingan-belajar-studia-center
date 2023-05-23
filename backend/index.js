const express = require('express');
const app = express();
const sequelize = require('./config/database');

// Konfigurasi middleware dan body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Koneksi ke database
sequelize
  .authenticate()
  .then(() => {
    console.log('Koneksi database berhasil');
  })
  .catch((err) => {
    console.error('Koneksi database gagal:', err);
  });

// connection to db
sequelize.sync().then(() => {
  console.log("sync db");
})
.catch((err) => {
  console.log(`Failed sync to db ${err.message}`);
})

// Menjalankan server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
