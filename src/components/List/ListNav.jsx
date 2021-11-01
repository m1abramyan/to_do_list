import React from 'react'
import ListItem from './ListItem'

export default function ListNav({ list, onRemove}){
    return (
        <ul className="todo__nav">
        {
            list.map(item => (
                <ListItem onRemove={onRemove} key={item.id} item={item}/>
            ))
        }
        </ul>
    )
}
