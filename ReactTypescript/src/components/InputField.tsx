import './styles.css'
import { useRef } from 'react';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e:React.FormEvent)=>void;
}

const InputField = ({todo, setTodo, handleAdd}:Props)=>{
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e)=>{
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input type='input' 
            placeholder='Enter a task' 
            value={todo} 
            onChange={(e)=>setTodo(e.target.value)}
            ref={inputRef}
            className='input__box'/>
            <button type='submit' className='input_submit'>GO</button>
        </form>
    )
}

export default InputField;