export const useAuth = () =>{
    const authuser = useState('auth_user',()=> null)
    return{authuser}
}