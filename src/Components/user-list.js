import useAxios from "./functionalComponent/customhooks/use-axios"
import React  from "react"
import CustomSpinnner2 from "./functionalComponent/spinner/spinner"


function UserList(){
    const[users,error,loading]=useAxios("https://fakestoreapi.com/users")

    if(loading){
        return<><CustomSpinnner2/></>
       
}
if(error){
    return<><h1>something went wrong</h1></>
   
}

    return<>
    <h1>userlist</h1>
    {
        users.map((eachUser)=>{
            return(
                <>
                <h5>{eachUser.username}</h5>
                
                </>
            )
        })
    }
    
    </>

}
export default UserList