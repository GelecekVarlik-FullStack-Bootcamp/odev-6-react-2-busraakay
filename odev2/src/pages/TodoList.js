import React from 'react'
import { Button} from 'react-bootstrap';
import Category from '../componenets/Category';
import { useState } from 'react';
import Todo from '../componenets/Todo';
function TodoList() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };  

    

  return (
    <div>
      <Button onClick={handleClick}>Todolar</Button>
      <Button onClick={handleClick}>Kategoriler</Button>
      

      {isShown && <Todo />}
      {!isShown && <Category />}
    </div>
  )
}

export default TodoList
