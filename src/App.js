import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';


function App() {
  const [alldata, setAlldata] = useState([]);

  const getData = async () => {
    let response = await fetch(`${process.env.REACT_APP_FETCH_URL}`).then((res) => res = res.json());
    await setAlldata(response);

  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Header />
      <Main data={alldata} />
      <Footer />
    </div>
  );
}

export default App;
