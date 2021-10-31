import React from 'react';

const  ListBtn = ({ title, icon, addClass, onClick }) => {
    return (
        <span onClick={onClick} className={`todo__btn ${addClass}`}><span className="todo__icon material-icons-outlined">{icon}</span>{title}</span>
    );
};

export default  ListBtn;