import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

const Card = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD, number: props.e },
        end: (e) => console.log(e, "dragged"),
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
                border: "2px black solid",
                margin: "20px auto",
                padding: "20px",
                width: "50px"
            }}
        >
            {props.e}
        </div>
    )
}

export default Card