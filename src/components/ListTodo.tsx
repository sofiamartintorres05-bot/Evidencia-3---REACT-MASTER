import React from 'react'
import type { Todo } from '../interfaces/Form'
import ItemTodo from './ItemTodo'


interface ListTodoProps{
    TodoLista:Todo[]
}
/**
 * ListTodo: Va a mostrar la lista de tareas
 * Lista de tareas :Viene del papá (App.tsx)
 *          Y llega aqui por medio de un Prop
 * 
 */
function ListTodo ({TodoLista} : ListTodoProps) {
  return (
    <section>
            {/*@por hacer: cortar y pegar la tabla de tarea 
    */}
        <h1> Mis tareas </h1>
        <table className='tabla'>
          <thead>
            <tr>
              <th>id</th>
              <th>titulo</th>
              <th>prioridad</th>
              <th>completada</th>
            </tr>
          </thead>
          <tbody>
            {
              TodoLista.map((todo: Todo)=>(
                <ItemTodo t={todo}/>
                
              ))
            }
          </tbody>
          <tfoot></tfoot>
        </table>
    </section>
  )
}

export default ListTodo