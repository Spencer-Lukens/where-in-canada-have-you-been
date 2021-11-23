import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Canada Itinerary</h1>
      </header>

      <main>
          <div className="contentContainer">
            <div className="listContainer">
              <h3 classname="itinerary">Your Itinerary</h3>
            </div>

            <div className="primaryContainer">
              <div className="inputArea">
              <h2 className="provinces">The 13 Provinces of Canada</h2>
                <h3>Select your countries!
                </h3>
                  {/* <button>Add province to list</button>

                  <button>Remove province from list</button> */}
              </div>

              <div className="mapContainer">

              </div>
            </div>
          </div>
      </main>

      <footer>
        <p>Made at Juno College by Spencer Lukens</p>
      </footer>
    </div>
  );
}

export default App;
