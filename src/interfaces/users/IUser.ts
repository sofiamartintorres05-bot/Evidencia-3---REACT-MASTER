//Tipos de usurios
export type Rol = 'Admin' | 'Dev'
//interface para el formulario
export interface IUserForm{
    nombre: string,
    email: string,
    rol: Rol
}
//interface para el usurio a guardar
export interface IUser{
    id : string,
    nombre: string,
    email: string,
    rol: Rol
}