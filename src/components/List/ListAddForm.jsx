import React from 'react';

const  ListAddForm = ({ colors, onClick}) => {
    return (
        <div className='todo__form'>
            <input type="text" placeholder='Введите название' />
            <ul>
            {
                colors.map(color => (
                    <li key={color.id}><span className={`todo__icon material-icons-outlined ${color.name}`}>radio_button_checked</span></li>  
                ))
            }
            </ul>
            <button>Добавить</button>
            <span onClick={onClick} className="todo__icon material-icons-outlined highlight">highlight_off</span>
        </div>
    );
};

export default  ListAddForm;