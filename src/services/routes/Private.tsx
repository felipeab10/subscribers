import { ReactElement, ReactNode } from "react"
import { useAuth } from "../../hooks/useAuth";
import { Forbidden } from "./Forbidden";

interface PrivateProps {
    children: ReactNode;
}
export function Private({ children }: PrivateProps) {
    const { isAuthenticated } = useAuth();
    console.log('isAuthenticated ', isAuthenticated);
    if (isAuthenticated) {
        return (
            <>
                {children}
            </>
        )
    }
    return <Forbidden />



}