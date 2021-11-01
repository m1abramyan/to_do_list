import React, { useState } from 'react';
import ListBtn from './List/ListBtn';
import ListAddForm from './List/ListAddForm';
import ListNav from './List/ListNav';

export default function Sidebar ({ list, listName, colors, onAddList, onRemove}) {
    const [visibleForm, setVisibleForm] = useState(true)

    return (
        <div className="todo__sidebar">
            <ListBtn title={listName} icon={'grid_view'} addClass={'active'}/>
            <ListNav list={list} onRemove={onRemove}/>
            <ListBtn onClick={()=>setVisibleForm(true)} title={'Добавить'} icon={'add_circle_outline'} addClass={'add'}/>
            {visibleForm && <ListAddForm onAddList={onAddList} onClick={()=>setVisibleForm(false)} colors={colors}/>}
        </div>
    );
};
