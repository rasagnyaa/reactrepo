import ListChild from "./listchild"

 
 export const ListParentOrderd=()=>{
return(
    <ol>
        <ListChild/>
    </ol>
)
}
export const ListParentUnorderd=()=>{
    return (
        <ul>
 <ListChild/>
        </ul>
    )
}