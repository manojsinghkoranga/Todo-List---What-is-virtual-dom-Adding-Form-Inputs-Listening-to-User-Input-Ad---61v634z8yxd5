import React, { useState } from "react";

const Tasks = (props) => {
    const [value, setValue] = useState('');
    const [editTask, setEditTask] = useState(false);
    const {ele, index, HandleDelete, EditTask} = props;

    const Edit = () => {
        EditTask(index, value);
        setValue('');
        setEditTask(false);
    }

    const Delete = () => {
        HandleDelete(ele.task);
    }

    return (
        <li key={`${index}task`} className={'list'}>{ele.task}
            <button key={`${index}delete`} className="delete" onClick={Delete}>Delete</button>
            <button key={`${index}Edit`} className="edit" onClick={() => setEditTask(!editTask)}>Edit</button>
            {editTask && <div>
                <textarea className="editTask" key={`${index}input`} value={value} autoFocus onChange={(event) => setValue(event.target.value)}/>
                <button className="saveTask" key={`${index}save`}  onClick={Edit} disabled={value.length === 0 ? true : false}>save</button>
            </div>}
        </li>
    )
}

export default Tasks;