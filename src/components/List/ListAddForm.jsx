import React, {useState} from 'react';

export default function ListAddForm ({ colors, onClick, onAddList}){

    const [selectColor, setSeletColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');
    
    const addList = () => {
        if(!inputValue) {
            alert('Введите название')
            return
        }
        const color = colors.filter(color => color.id === selectColor)[0].name;
        onAddList({id: Math.random(), name: inputValue, color: color});
        setInputValue('');
        onClick();
    };

    return (
        <div className='todo__form'>
            <input 
                type="text" 
                placeholder='Введите название' 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <ul>
            {
                colors.map(color => (
                    <li key={color.id} className={selectColor === color.id ? 'active' : ''}>
                        <span 
                            onClick={()=>{setSeletColor(color.id)}} 
                            className={`todo__icon pointer material-icons-outlined ${color.name}`}
                        >
                            radio_button_checked
                        </span>
                    </li>  
                ))
            }
            </ul>
            <button onClick={addList}>Добавить</button>

            <span onClick={onClick} className="todo__icon material-icons-outlined highlight">highlight_off</span>
        </div>
    );
};
