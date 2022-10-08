
import React from 'react'
import './App.scss';
import axios  from 'axios';


function App() {

  const [value , setValue] = React.useState('')
  const [todo, setTodo] = React.useState([])
  const [remove, setRemove] = React.useState(0)
  function getValue(e){
    setValue(e.target.value)
  }

  React.useEffect(() => {
    async function getTodoData(){
        let todoData = await axios.get('http://localhost:3004/todo')
        setTodo(todoData.data)
    }
    getTodoData()
  }, [value, remove])


 async function postTodo() {

  if(todo.find(item => item.todoName === value)){
    return alert('this todo already add to todo list')
  }else{
    if(value === ""){
      return undefined
     }else{
      await axios.post('http://localhost:3004/todo',{
        "todoName": value
      })
     }
  }

     
    
      setValue("")
  }


 async function deleteTodo(id){
      await axios.delete(`http://localhost:3004/todo/${id}`)
      setRemove(id)
  }




  return (
    <div className="App">

      <div className="form">
          <input onInput={(e) => getValue(e)} placeholder="add todo"  value={value}/>
          <button onClick={() => postTodo()}>Send</button>
      </div>

      <div className="listTodo">
          <ul>
              {todo.map((item,index) => {
                  return  <li 
                  key={item.id}>
                    {`${index+1}  ${item.todoName}`}
                    <img onClick={() => deleteTodo(item.id)} src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png" alt="" />
                     </li>
              })}
          </ul>
      </div>

    </div>
  );
}

export default App;


