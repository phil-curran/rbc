import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import JumbotronComponent from './components/JumbotronComponent';
import MapComponent from './components/MapComponent';
import BeerList from './components/BeerListFunctional';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <JumbotronComponent />
        <MapComponent />
        <BeerList />
      </div>
    );
  }
}

export default App;
