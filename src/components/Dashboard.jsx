import React from 'react';

import TaskList from './TasksList/TaskList';

export default function Dashboard(){
    return (
        <div className="todo__dashboard">
            <h1 className="todo__title">Покупки<span class="material-icons-outlined pointer">mode_edit</span></h1>
            <TaskList />
        </div>
    );
};