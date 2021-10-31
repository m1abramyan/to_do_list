import React, { useState } from 'react';
import ListBtn from './List/ListBtn';
import ListItem from './List/ListItem';
import ListAddForm from './List/ListAddForm';

const Sidebar = ({ items, listName, colors}) => {
    const [visibleForm, setVisibleForm] = useState(true)

    return (
        <div className="todo__sidebar">
            <ListBtn title={listName} icon={'grid_view'} addClass={'active'}/>
            <ul className="todo__nav">
            {
                items.map(item => (
                    <ListItem key={item.id} item={item}/>
                ))
            }
            </ul>
            <ListBtn onClick={()=>setVisibleForm(true)} title={'Добавить'} icon={'add_circle_outline'} addClass={'add'}/>
           {visibleForm && <ListAddForm onClick={()=>setVisibleForm(false)} colors={colors}/>}
      </div>
    );
};

export default Sidebar;