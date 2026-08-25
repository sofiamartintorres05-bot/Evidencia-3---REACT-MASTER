import {useState} from 'react'


import ListTodo from './components/ListTodo';
import type { Priority, Todo } from './interfaces/Form'
import FormTodo from './components/FormTodo';

// const estilosFormulario: Record<string, React.CSSProperties> = {
//   formulario: {
//     width: '450px',
//     margin: '30px auto',
//     padding: '20px',
//     backgroundColor: '#ffffff',
//     border: '2px solid #5b9bd5',
//     borderRadius: '10px',
//     boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)'
//   },

//   titulo: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#2f5597'
//   },

//   input: {
//     width: '100%',
//     padding: '8px',
//     border: '1px solid #999',
//     borderRadius: '6px',
//     fontSize: '15px'
//   },

//   boton: {
//     width: '100%',
//     padding: '9px',
//     backgroundColor: '#5b9bd5',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '15px',
//     boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)'
//   }
// }


const App = () => {

  const [listaTodo , setListaTodo] = 
              useState<Todo[]>([])

//crear funcion para añadir nueva tarea a listaTodo pero aislada
// necesita los atributos de la nueva tarea como parametros
const addToDo = ( titulo: string , prioridad: Priority) => {

  const Tarea: Todo={ 
      //UUID: tipo de dato ID unico y Universal
        id: crypto.randomUUID(),
        titulo: titulo,
        prioridad: prioridad,
        completada: false
  }

//poner la nueva tarea en la lista
setListaTodo((prev)=>[...prev , Tarea])
}


  return (
    <>
        <FormTodo addToDo={addToDo} />
        <ListTodo TodoLista={listaTodo}/>
    </>
  )
}

export default App