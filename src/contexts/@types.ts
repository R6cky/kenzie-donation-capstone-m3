export interface iDefaultProviderProps {
    children: React.ReactNode;
}

export interface iUserContext {
    login: (data: iUserLogin) => void
    user: iUser
    loading: boolean
    setUser: any
}

export interface iUser {
    email: string;
    name: string;
    photo: string;
    phone: string;
    state: string;
    id: number;
    length: number;
    data: {name: string}
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