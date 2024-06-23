
const ListMap=()=>{
    const Fruits=["apple","banana","orange","litchi","pomegrante"]
        return(
          <>
          <h1>get the fruits with the help of map</h1>
          {Fruits.map((eachFruit,index,array)=>{
           return <li>{eachFruit}</li>
          })}
        
          </>
        )
    }
    export default ListMap