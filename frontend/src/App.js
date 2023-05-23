import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/siswa');
      setSiswa(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Data Siswa:</h1>
      <ul>
        {siswa.map((item) => (
          <li key={item.id}>{item.nama}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
