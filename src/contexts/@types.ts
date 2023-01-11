export interface iDefaultProviderProps {
    children: React.ReactNode;
}

export interface iUserContext {
    login: (data: iUserLogin) => void
}

export interface iUser {
    email: string;
    nome: string;
    avatar: string;
    tel: string;
    Estado: string;
    id: number;
}

export interface iUserRegister {
    email: string;
    name: string;
    password: string;
}

export interface iUserLogin {
    email: string;
    password: string;
}

export interface iUserLoginResponse {
    accessToken: string;
    user: iUser;    
    id: number;
}