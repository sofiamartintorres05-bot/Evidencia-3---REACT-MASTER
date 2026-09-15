import {useState} from 'react'
import type { ChangeEvent } from 'react'
import type { TodoForm, Todo, Priority} 

from '../../interfaces/todos/Form'


//interface en la cual definimos un Prop
interface FromTodoProps{
  addToDo : (titulo: string, prioridad: Priority)=>void
}

function FormTodo({addToDo}:FromTodoProps) {

//estado para el formulario
const [formulario, setFormulario] =
        useState<TodoForm>({
          titulo:'',
          prioridad:'Baja'
          })

//funcion para tratar el form
const inputChange=(event:ChangeEvent<HTMLInputElement> | 
                          ChangeEvent<HTMLSelectElement> )=>{
  
  //separar:nombre del control valor en dos variables

  const { name , value }= event.target 

  //asignar los valores del formulario al estado:

  //operador spread:separa un objeto (form)

  setFormulario({
    ...formulario,
    [name] : value
  })
}

//fuction para tratar el submit
const envioForm=(event:any)=>{
  //Quitar el comportamiento por defecto del form submi
  event.preventDefault()
  addToDo(formulario.titulo, 
          formulario.prioridad)
//limpiar form
setFormulario({
  titulo:"",
  prioridad: "Baja"
})      

}






  return (
    <section>
        <h2>Registro de nueva tarea </h2>
        <form onSubmit={envioForm} > {/*"Un div por cada control de form"*/}

          <div>

            {/*cada control tendra un label y un input*/} 
            <label>Titulo :</label>
            <input type="text"
                    id="titulo"
                    placeholder="p.ej revisar github"
                    name="titulo" 
                    onChange={ inputChange }
                    value={ formulario.titulo}
            />
          </div>
          <div> 
            <label htmlFor=''> Prioridad:</label>
            <select
              id="prioridad"
              name="prioridad"
              onChange={ inputChange }
              value={formulario.prioridad}
              
            >
            { /* Programacion para elegir la opcion determinada en el state del formulario */}
              <option value="Alta">Alta</option> 
              <option value="Media">Media</option>
              <option value="Baja" selected>Baja</option>
            </select>
          </div>
          <div>
            <button type="submit">
              Crear ToDo
            </button>
          </div>
        </form>
      </section>
  )
}

export default FormTodo