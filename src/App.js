import './App.css';
import {useState} from 'react'
import Shapes from './Shapes';
import Students from './Students';
import List from './List';


let nextId = 0;
function App() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  function handleAddArtist(){
    // artists.push({
    //   id:++nextId,
    //   name: name
    // });

    var newArtists = [
      ...artists,
      {
        id:++nextId,
        name: name
      }
    ];

    setArtists(newArtists);

    console.log(artists);
  }

  function handleRemoveItem(a){
    setArtists(artists.filter(artist => artist.id != a.id));
  }

  return (
    <div>
      {/* <h1>Our Artists</h1>
      <section>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={handleAddArtist}>Add</button>
      </section>
      <ul>
        {
          artists.map((a) => (
            <li key={a.id}><span><b>{a.id}</b></span> : {a.name}
              <button onClick={() => handleRemoveItem(a)}>Remove</button>
            </li>
          ))
        }
      </ul> */}

      {/* <Shapes></Shapes> */}
      {/* <Students></Students> */}
      <List></List>
    </div>
  );
}

export default App;
