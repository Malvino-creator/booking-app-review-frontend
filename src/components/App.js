import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Beauty from './Beauty';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AddStyle from './AddStyle';

function App() {
  const [page, setPage] = useState('/');
  const [beauty, setBeauty] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  console.log(page);

  // useEffect(() => {
  //   fetch('http://localhost:8000/beauty')
  //     .then((response) => response.json())
  //     .then((data) => setBeauty(data));
  // }, []);

  // useEffect(() => {
  //   fetch('https://api.jsonbin.io/v3/b/634933430e6a79321e282350/record/beauty')
  //     .then((response) => response.json())
  //     .then((data) => setBeauty(data));
  // }, []);

  useEffect(() => {
    fetch('https://hair-saloon-api.herokuapp.com/beauty')
      .then((response) => response.json())
      .then((data) => {
        setBeauty(data);
        setSearchQuery(data);
      });
  }, []);

  function handleSearch(e) {
    setBeauty(
      searchQuery.filter((beauty) => {
        return beauty.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
    return beauty;
  }

  return (
    <>
      <Router>
        <Navbar onChangePage={setPage} />
        <Switch>
          {/* <Route exact path='/beauty' element={<Beauty />} />
          <Route exact path='/addstyle' element={<AddStyle />} />
          <Route exact path='/' element={<Home />} /> */}
          <Route exact path="/beauty" element={<Beauty />}>
            <Beauty beauty={beauty} handleSearch={handleSearch} />
          </Route>
          <Route exact path='/addstyle' element={<AddStyle />}>
            <AddStyle />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
