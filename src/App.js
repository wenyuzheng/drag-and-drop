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

const placesNum = Array.from({ length: 5 }, (_, i) => i + 1);

const App = () => {

  // const [selectedCards, setSelectedCards] = React.useState();
  const [currCards, setCurrCards] = React.useState(cards);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {placesNum.map((e) => {
          return <Place key={e} setCurrCards={setCurrCards} />
        })}
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
