import { Navigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export default function ProtectRoute({children}) {
    const {loading,user} = useAuth();

    if(loading) return <p>laoding...</p>
    return user ? children :<Navigate to ='/login'/>;
}