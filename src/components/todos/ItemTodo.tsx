import React from 'react'
import type { Todo } 
from '../../interfaces//todos/Form'
import { FiAlertTriangle } from 'react-icons/fi'
interface ItemTodoProps{
    t: Todo
}
function ItemTodo({t}:ItemTodoProps)
 {
  return (
     <tr>
                  <td>{ t.id }</td>
                  <td>{ t.titulo}</td>
                  <td>{ t.prioridad}</td>
                  {/*
                    operador ternario: ?:
                  */}
                  <td>{(t.completada)===true ?
                                  <span style={
                                    { 
                                      color:"rgb (27, 165, 53)",
                                      backgroundColor: " aqua"
                                    }
                                }>si</span> :  
                                  <span style={{color:"red" , backgroundColor: "lightgray"}}>
                                    no <FiAlertTriangle />
                                  </span>
                      }
                      </td>
                    </tr>

  )
}

export default ItemTodo