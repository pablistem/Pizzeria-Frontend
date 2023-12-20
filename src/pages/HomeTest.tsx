/* import { useContext, useEffect, useState } from "react";
import { userInfo } from "../services/user.api";
import { AuthContext } from "../context/AuthContext";
import { IAuthContext } from "../types/types"; */

const HomeTest = () => {
  /*  const [user, setUser] = useState({})
  const { isAuth, token } = useContext(AuthContext) as IAuthContext;
  useEffect(()=>{
    if (isAuth){
      userInfo(token)
    .then(data => setUser(data))
    .catch(err => console.log(err))

    console.log("USER INFO: ", user)
    }
  },[]) */

  return <div>HomeTest</div>;
};

export default HomeTest;
