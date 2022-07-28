import { createContext, ReactNode, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    name: string;
    email: string;
}

interface AuthContextProps {
    user: User;
    onLogin: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState({} as User);

    const onLogin = async (email: string, password: string) => {
        console.log({ email, password })
    }

    return (
        <AuthContext.Provider value={{ user, onLogin }}>
            {children}
        </AuthContext.Provider>
    )
}