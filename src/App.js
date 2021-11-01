import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

import ColorDB from './database/colors.json'
import ListBD from './database/list.json'

function App() {

  const [list, setList] = useState(
    ListBD.list.map(item => {
      item.color = ColorDB.colors.filter(color => color.id === item.colorId)[0].name;
      return item;
    })
  );

  const onAddList = (obj) => {
    const newList = [...list, obj];
    setList(newList);
  };
  const onRemove = (obj) => {
    if(window.confirm("Вы дейсвительно хотите удалить?")){
      console.log(obj)
    }
  }

  return (
    <div className="todo">
      <Sidebar 
        colors = {ColorDB.colors}
        listName={'Все задачи'} 
        list={list}
        onAddList={onAddList}
        onRemove={onRemove}
        />
      <Dashboard />
    </div>
  );
}

export default App;
