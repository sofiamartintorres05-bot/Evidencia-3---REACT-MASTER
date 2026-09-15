import { useState, useEffect} from 'react'
import ListUsers from '../../components/users/ListUsers'
import FormUser from '../../components/users/FormUser'
import type { IUser } from '../../interfaces/users/IUser'
import { getallUsers } from '../../services/UserService'

const UserPage = () => {

    //Crear estado de listado de Usuarios
    const [listarUsers, 
            setlistaUsers
            ] = useState<IUser[]>([]) 

    //useEffect: hook: metodo para controlar cliclos de vida del componente
    //controlar lo que pase cuando se carga el componente(App)
    //por primera vez
     useEffect(()=>{
     const consultar = async()=>{
        //llame al servicio para traer datos
     const datos = await getallUsers()
        //cargar el estado con los datos traidos
     setlistaUsers(datos)
     }
     consultar()
    },[])


  return (
    <>
        <FormUser/>
        <ListUsers u={listarUsers} />
    </>
  )
}

export default UserPage
