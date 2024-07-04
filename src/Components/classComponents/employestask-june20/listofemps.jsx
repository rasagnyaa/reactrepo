import { Component } from "react";



class ListOfEmployees extends Component{
    state = {
        employees: [
          { name: 'John Doe',  salary:1000 },
          { name: 'Jane Smith',  salary:2000  },
          { name: 'Bob Johnson',salary:3000  },
          { name: 'rasagnya',salary:4000  },
          { name: 'chandhana',salary:5000  },
          { name: 'sanjana',salary:6000  },
          { name: 'minnu',salary:7000  },
        ]
      };
    lessthanHandler=(value)=>{
       let newArr=this.state.employees.filter((eachsalary)=>{
        return eachsalary.salary < value
       })
       this.setState({
        employees:newArr
       })
    }
 greaterthanHandler=(value)=>{
    let newArr=this.state.employees.filter((eachsalary)=>{
        return eachsalary.salary > value
       })
       this.setState({
        employees:newArr
       })
 }

    render(){
        return(
            <table>
            <tr> <th>name</th>
            <th>salary</th></tr>
          
        {
        this.state.employees.map((eachEmp,array)=>{
            return(
           <>
            <tr>
             <td>{eachEmp.name}</td>
           

           
             <td>{eachEmp.salary}</td>
             </tr>
             </> 
            )
        })
      
        }
      
      
       
       
 <button onClick={()=>this.lessthanHandler(3000)}>lessthan 3000</button> 
 <button onClick={()=>this.greaterthanHandler(4000)}>greaterthan 4000</button> 

</table> 
        )
    }
}
export default ListOfEmployees