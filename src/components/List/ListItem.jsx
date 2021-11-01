import React from 'react';

export default function ListItem({item, onRemove}){
    return (
        <li className={item.active ? 'active' : ''}>
            <span className={`todo__icon material-icons-outlined ${item.color}`}>radio_button_checked</span>
            <p>{item.name}</p>
            <span onClick={() => onRemove(item)} className={"todo__icon material-icons-outlined remove"}>highlight_off</span>
        </li>   
    );
};
