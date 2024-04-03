import ListItems from "./list/listitems"


const  FunList =()=>{
const ListItem=[{

name:"apple",
type:"fruit",
isFruit:"true",
imgUrl:"https://cdn.pixabay.com/photo/2016/10/25/17/58/apple-1769553_640.jpg",
id:1
},{
    name:"orange",
    type:"fruit",
    isFruit:"true",
    imgUrl:"https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_640.jpg",
    id:2

},{

    name:"mango",
    type:"fruit",
    isFruit:"true",
    imgUrl:"https://img.freepik.com/free-vector/vector-ripe-yellow-orange-red-whole-sliced-mango-cubes-with-leaf-isolated-white-background_1284-45465.jpg",
    id:3

}
]
return(
<div>
    <ol>
{
ListItem.map((eachObject)=>{
return(
    <>
    <ListItems  item={eachObject.name}/>
    <img  className="img1"src={eachObject.imgUrl}alt="{image}"/>
    </>
)

})


}



    </ol>
</div>
  
)




}
export default FunList