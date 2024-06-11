import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { ToDo } from './model';
import './styles.css'
import { useState, useRef, useEffect } from 'react';
import { PiArrowsInSimpleDuotone } from 'react-icons/pi';

type Props = {
    todo: ToDo,
    todos: Array<ToDo>,
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleTodo: React.FC<Props> = ({todo,todos,setTodos})=>
{
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleEdit = (e:React.FormEvent,id:number)=>{
        e.preventDefault();
        const oldTodos = [...todos];
        let i:number =0;
        for(i=0;i<oldTodos.length;i++)
            {
                if(oldTodos[i].id===id)
                    oldTodos[i].todo=editTodo;
            }
        console.log(oldTodos);
        setTodos(oldTodos);
        setEdit(false);
    }

    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo) => todo.id!==id));
    }
      
    const handleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id===id?{...todo,isDone:!todo.isDone}:todo));
      };

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])

    return(
        <form className='todos__single' onSubmit={(e)=>{handleEdit(e,todo.id)}}>
            {edit ?
                <input className="todos__single--text" ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
                : todo.isDone?<s className="todos__single--text">{todo.todo}</s>:<span className="todos__single--text">{todo.todo}</span>}

            <div>
                <span className="icon" onClick={()=>{if (!edit && !todo.isDone){
                    setEdit(!edit);
                } }}><AiFillEdit/></span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
                <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone/></span>
            </div>
        </form>
    )
}

export default SingleTodo;