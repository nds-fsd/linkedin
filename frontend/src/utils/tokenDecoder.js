import jwtDecode from "jwt-decode"

export const tokenDecoder = () =>{
    const userSession = jwtDecode(window.localStorage.getItem('user-session'))
    const userId= (userSession.user_id)
    return userId

} 