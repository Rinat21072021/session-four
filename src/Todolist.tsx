import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./Button";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')
    const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const InputOnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addTask(title)
            setTitle('')
        }
    }
    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={inputOnChangeHandler}
                   onKeyPress={InputOnKeyPressHandler}/>
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <Button callback={props.changeFilter} title={'all'}/>
            <Button callback={props.changeFilter} title={'active'}/>
            <Button callback={props.changeFilter} title={'completed'}/>
        </div>
    </div>
}
