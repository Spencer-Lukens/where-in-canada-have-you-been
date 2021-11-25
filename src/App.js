import './App.css';
import { useEffect, useState } from 'react';
import firebase from './firebase.js';

function App() {
    // We want a new component thats storing our state item, I.E our books. Consider this for country/setCountry
  // inside of UL we want to append our books array with map
  // For every book, we want to return a certain type of mark up
  // {book} will be a component containing the properties (i.E title) hosted in our firebase database
  const [books, setBooks] = useState([])
  // this hooks into any CHANGE that takes place on the input field
  const [userInput, setUserInput] = useState('');
  // FOLLOW THIS UP WITH AN onChange event

  const handleChange = (event) => {
    // console.log(event.target.value);
    // We want whatever the user puts into the input ID to be updated in the user input state within React
    setUserInput(event.target.value);
  }

  // We've handled the monitoring of our form, now we have to handle the submission of it
  const handleSubmit = (event) => {
    // prevent the default
    event.preventDefault();

    const dbRef = firebase.database().ref();

    // push that data
    dbRef.push(userInput);

    // a nice benefit of this state, of pushing our stored input field data, is that we can say once the user submits, let's clear out the input field (useful for multiple visitors!)

    // Once we call to firebase, let's call that setUserInput method and set our state back to an empty string
    setUserInput('');

  }

  useEffect(() => {
    // Make a reference to our database
    const dbRef = firebase.database().ref();
    // code that goes into LISTENING for the CHANGING OF VALUE (I.E CLICK STATE that changes firebase data). Basically setting up a listening event within firebase database
    dbRef.on('value', (response) => {
      // console.log(response.val());
      const newState = [];

      const data = response.val()

      // iterate through the data object
      for (let property in data) {
        // so basically, push each book name into the new Array

        // alternative - newState.push(data[property]) then 'book title', 'another book title'
        newState.push({
          bookTitle: data[property],
          bookID: property,
        });
      }
      setBooks(newState);

    })

  }, [])

  const removeBook = (whatToRemove) => {
    // get access to our database
    // use a new firebase method to remove an item
    // get access to our database
    const dbRef = firebase.database().ref();

    // .child(remove) is your best bet to remove something from firebase
    // use two new firebase methods to remove an item
    // But what are we removing? Go to line 85.
    /// The reference will then call a function called removebook
    dbRef.child(whatToRemove).remove();
  }

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
