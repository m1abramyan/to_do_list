import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

import ColorDB from './database/colors.json'

function App() {
  return (
    <div className="todo">
      <Sidebar 
        colors = {ColorDB.colors}
        listName={'Все задачи'} 
        items={[
        {
          id: 1,
          icon: 'radio_button_checked',
          color: 'red',
          name: 'Покупки',
        },
        {
          id: 2,
          icon: 'radio_button_checked',
          color: 'purple',
          name: 'Программирование',
        },
        {
          id: 3,
          icon: 'radio_button_checked',
          color: 'indigo',
          name: 'Учеба',
        },
        {
          id: 4,
          icon: 'radio_button_checked',
          color: 'blue',
          name: 'Личное',
          active: true,
        },
        {
          id: 5,
          icon: 'radio_button_checked',
          color: 'green',
          name: 'Школа',
        },
        {
          id: 6,
          icon: 'radio_button_checked',
          color: 'yellow',
          name: 'График',
        },
      ]}/>
      <Dashboard />
    </div>
  );
}

export default App;
