import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('loading...');
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/health`)
      .then(r => setStatus(r.data.status))
      .catch(() => setStatus('error'));
  }, []);
  return <div>API status: {status}</div>;
}

export default App;
