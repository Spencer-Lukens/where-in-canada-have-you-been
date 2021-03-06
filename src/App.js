import './App.css';
import { useEffect, useState } from 'react';
import firebase from './firebase.js';

function App() {
    // We want a new component thats storing our state item, I.E our province/setProvinces
  // inside of UL we want to append our province array with map
  // For every province, we want to return a certain type of mark up
  // {book} will be a component containing the properties (i.E title) hosted in our firebase database
  const [provinces, setProvinces] = useState([])
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

    // When user submits, clear out input field
    // Once call to firebase is completed, calling the setUserInput method and resetting state to an empty string
    setUserInput('');

  }

  useEffect(() => {
    // Making a reference to our database
    const dbRef = firebase.database().ref();
    // listening for changing of value within firebase
    dbRef.on('value', (response) => {
      // console.log(response.val());
      const newState = [];
      const data = response.val()
      // iterate through the data object
      for (let property in data) {
        // so basically, push each book name into the new Array
        // alternative - newState.push(data[property]) then 'book title', 'another book title'
        newState.push({
          provinceTitle: data[property],
          provinceID: property,
        });
      }
      setProvinces(newState);

    })

  }, [])

  const removeProvince = (whatToRemove) => {
    // get access to our database
    // use a new firebase method to remove an item
    // get access to our database
    const dbRef = firebase.database().ref();

    // .child(remove) is your best bet to remove something from firebase
    // use two new firebase methods to remove an item
    // But what are we removing? Go to line 85.
    /// The reference will then call a function called removeProvince
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
                <ol>
                  {
                    provinces.map((province) => {
                      return (
                      // create a key prop in the parent element of what you're creating, which in this case is a series of li's
                      <li key={province.provinceID}>
                        <p>{province.provinceTitle}</p>
                        {/* This basically says, when we click on the   button, call this function called removeProvince 
                        // to and add an anonymous callback function before removeProvince. This is our reference, so that when we click on the button, it says "call the reference"*/}
                        <button onClick={ () => removeProvince(province.provinceID)}>Remove</button>
                        {/* <p>{province.provinceID}</p> */}
                        {/* Place form clear here */}
                      </li>
                      )
                    })
                  }  
                </ol>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="newProvince">Add a new province to your itinerary!</label>
                    <input
                      id="newProvince"
                      type="text"
                      value={userInput}
                      onChange={handleChange}
                    />
                    <button>Add province</button>
                </form>
              </div>  
            </div>

            <div className="primaryContainer">
              <div className="inputArea">
                <h2 className="provinces">The 13 Provinces of Canada</h2>
                  {/* <button>Add province to list</button>
                  <button>Remove province from list</button> */}
              </div>

              <div className="mapContainer">
                <img src="canada2.png" alt="Map of Canada" id="canadaMap" />
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
