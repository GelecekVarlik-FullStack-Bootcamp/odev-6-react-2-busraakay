import React from 'react'
import { Button} from 'react-bootstrap';
import Category from '../componenets/Category';
import { useState } from 'react';
import Todo from '../componenets/Todo';
function TodoList() {
    const [isShown, setIsShown] = useState(false);

    const handleClickTodo = event => {
      setIsShown(true);
    };  
    const handleClickCategory = event => {
      setIsShown(false);
    }; 

    

  return (
    <div>
      <Button onClick={handleClickTodo}>Todolar</Button>
      <Button onClick={handleClickCategory}>Kategoriler</Button>
      

      {isShown && <Todo />}
      {!isShown && <Category />}
    </div>
  )
}

export default TodoList
