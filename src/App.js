import './App.css';
import { useEffect, useState } from 'react';
import firebase from './firebase.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Canada Itinerary</h1>
      </header>

      <main>
          <div className="contentContainer">
            <div className="listContainer">
              <h3>Your itinerary</h3>
                <div className="ulContainer">
                  <ul>
                    <li>Quebec</li>
                    <li>New Brunswick</li>
                    <li>Ontario</li>
                    <li></li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                  </ul>
                </div>  
            </div>

            <div className="primaryContainer">
              <div className="inputArea">
                <h2 className="provinces">The 13 Provinces of Canada</h2>
                  <h3>Select the provinces you'd like to visit!
                  </h3>
                  {/* <button>Add province to list</button>
                  <button>Remove province from list</button> */}
              </div>

              <div className="mapContainer">
                <img src="canada.png" alt="Map of Canada" />
              </div>
            </div>
          </div>
      </main>

      <footer>
        <p>Created @ <a href=" https://junocollege.com ">Juno College</a>   by Spencer Lukens</p>
      </footer>
    </div>
  );
}

export default App;
