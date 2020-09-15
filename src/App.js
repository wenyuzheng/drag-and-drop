import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Card from './Card';
import Place from './Place';

const cards = [
  // { type: "number", value: 1 },
  // { type: "number", value: 2 },
  // { type: "number", value: 3 },
  // { type: "number", value: 4 }
  1, 2, 3, 4
]

const App = () => {

  const [selectedCards, setSelectedCards] = React.useState();
  const [currCards, setCurrCards] = React.useState(cards);

  const addCardHandler = (newCard) => {
    setSelectedCards(newCard);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Place addCardHandler={addCardHandler} selectedCards={selectedCards} setSelectedCards={setSelectedCards} setCurrCards={setCurrCards}/>
        <Place addCardHandler={addCardHandler} selectedCards={selectedCards} setSelectedCards={setSelectedCards} setCurrCards={setCurrCards} />
        <div>
          {currCards.map((e, i) => {
            return <Card e={e} key={i}/>
          })}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
