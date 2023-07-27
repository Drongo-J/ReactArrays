import React, { useState } from 'react'

let nextId = 3;
const initialList = [
    {id:0, title:"Big Bellies", seen:false},
    {id:1, title:"Lunar Landscape", seen:true},
    {id:2, title:"Teracotta Army", seen:false},
]
export default function List() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen){
    //const myNextList = [...myList];
    //const artwork = myNextList.find((a) => a.id === artworkId);
    // artwork.seen = nextSeen;
    setMyList(
        myList.map(artwork => {
            if (artwork.id === artworkId){
                return {
                    ...artwork,
                    seen: nextSeen
                }
            }
            return artwork;
        })
    );
  }

  function handleToggleYourList(artworkId, nextSeen){
    const yourNextList = [...myList];
    const artwork = yourNextList.find((a) => a.id === artworkId);
    artwork.seen = nextSeen;
    setYourList(yourNextList);
  }

  return (
    <div>
      <h1>Art Bucket List</h1>
      <h2>My List of Art to See</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList}></ItemList>
      <h2>Your List of Art to See</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList}></ItemList>
    </div>
  )
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
        {
            artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input type='checkbox' checked={artwork.seen}
                        onChange={e => {
                            onToggle(artwork.id, e.target.checked)
                        }}
                        ></input>

                        {artwork.title}
                    </label>
                </li>
            ))
        }
    </ul>
  )
}
