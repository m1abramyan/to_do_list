import React from 'react';

const  ListItem = ({item}) => {
    return (
        <li className={item.active ? 'active' : ''}>
            <span className={`todo__icon material-icons-outlined ${item.color}`}>{item.icon}</span>
            <p>{item.name}</p>
            <span className={item.active ? 'todo__icon material-icons-outlined' : "todo__icon material-icons-outlined remove"}>highlight_off</span>
        </li>   
    );
};

export default  ListItem;