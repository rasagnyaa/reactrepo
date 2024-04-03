import { arrayOfObjects } from "../data"
import { TableRow } from "./tablerow"


const TableComponent=()=>{
    return(
<table style={{width:"100%"}}>
<tbody>
<tr>
<th>company</th>
<th>name</th>
<th>country</th>
</tr>
{
arrayOfObjects.map(eachArray=>{
return(
   <TableRow data={eachArray}/>
)

})


}

</tbody>




</table>
    )



}
export default TableComponent