import React from 'react';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';

const Place = (props) => {
    const setCurrCards = props.setCurrCards
    const [number, setNumber] = React.useState();

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (e) => {
            setCurrCards((prev) => {
                let newArr = [...prev].filter((i) => {
                    return i !== e.number
                })
                return newArr
            })
            console.log(e, "dropped")
            setNumber(e.number)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    })

    const color = isOver ? "yellow" : "white";

    return (
        <button
            ref={drop}
            style={{
                position: 'relative',
                border: "2px solid red",
                width: 80,
                height: 80,
                margin: 10,
                backgroundColor: color
            }}
            onClick={() =>{
                console.log(number)
            }}
        >
            {number} 
        </button>
    )
}

export default Place