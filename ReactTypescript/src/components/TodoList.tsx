import { ToDo } from './model';
import './styles.css';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Array<ToDo>,
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos})=>{
    return (
        <div className='container'>
            {todos.map(todo =>(
                <SingleTodo todo={todo} todos={todos} setTodos={setTodos}/>
                ))}
        </div>
    )
}

export default TodoList;