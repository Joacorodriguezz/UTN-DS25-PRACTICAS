// 🔹 Enumeración de roles permitidos en el sistema
export enum RolUsuario {
    ADMIN = 'ADMIN',
    USUARIO = 'USUARIO'
}

// 🔹 Estructura base del usuario
export interface Usuario {
    id?: number;              
    nombre: string;           
    apellido: string;         
    email: string;           
    password?: string;
    rol?: RolUsuario;         
    fechaRegistro?: Date;     
    activo?: boolean;         
}


