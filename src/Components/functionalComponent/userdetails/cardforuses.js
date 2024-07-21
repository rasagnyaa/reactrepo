

const CardforUsers=({details})=>{
const cardStyle={
border:"1px solid lightgray",
height:350,
width:400,
display:"inline-block",
textAlign:"center",
margin: "0px 40px 10px ", // Horizontal spacing of 20px
borderRadius:"2rem",
boxShadow:"10px 10px 10px 5px lightgray",
backgroundColor:"gray"
}
return <>

<div style={cardStyle}>
<h3>Username:{details.username}</h3>
<p>Name:{details.name}</p>
<p>Email:{details.email}</p>

<p>Comapany:{details.company.name}.{details.address.street}</p>
    <h3>Address:</h3><p>Suite:{details.address.suite}</p>
    <p>City:{details.address.city}</p>
    
    <p>Zipcode:{details.address.zipcode}</p>
    <p>phone:{details.phone}</p>

</div>


</>


}
export default CardforUsers