import { useRef, useState } from 'react'
import styles from './input-box-style.module.css'
export default function InputBox(props){
    const [isFocus,setStateFocus] = useState(false);
    const [inputValue,setInputValue] = useState("");
    const thisInput = useRef();
    let setFocus = ()=>{
        thisInput.current.focus()
        setStateFocus(true)
    }
    let onBlur = ()=>{
        setStateFocus(false)
    }
    let onClick = ()=>{
        setStateFocus(true)
    }
    let onValueChange = (e)=>{
        props.value(e.target.value);
        setInputValue(e.target.value);
    }
    return(
        <div className={`${styles.inputBox} ${isFocus?styles.active:''}`} onClick={setFocus}>
            <label className={`${styles.label} ${isFocus?styles.active:inputValue?styles.inactive:''}`}>{props.placeholder}</label>
            <input ref={thisInput} type={props.type} onBlur={onBlur} onClick={onClick} onChange={onValueChange} required/>
        </div>
    )
}