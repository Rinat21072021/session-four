import React from 'react';
import {FilterValuesType} from "./App";
type PropsType={
    callback:(value:FilterValuesType)=>void
    title:FilterValuesType
}
export const Button = (props:PropsType) => {
    return <button onClick={ () => { props.callback(props.title) } }>{props.title}</button>


}
