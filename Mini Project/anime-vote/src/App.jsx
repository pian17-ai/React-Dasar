import { useState } from "react"

function App() {

  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "Nagisa Kubo",
      description: "Playful and loves teasting",
      vote: 0,
      favorite: false
    },
    {
      id: 2,
      name: "Junta Shiraishi",
      description: "The invisible main character",
      vote: 0,
      favorite: false
    },
  ]);

  const handleVote = (id) => {
  setCharacters((prev) =>
    prev.map((char) =>
      char.id === id
        ? { ...char, vote: char.vote + 1 }
        : char
    )
  );
};


  return (
    <div className="grid grid-flow-col grid-rows-4 gap-4">
      {
        characters.map((char) => (
          <div key={char.id} className="px-4 py-2 bg-slate-700 text-white">
            <h1>{char.name}</h1>
            <h2>{char.description}</h2>
            <h3> Vote : {char.vote}</h3>
            <button className="px-2 py-1 bg-white rounded text-black" onClick={() => handleVote(char.id)}>Vote</button>
          </div>
        ))
      }
    </div>
  )
}

export default App
