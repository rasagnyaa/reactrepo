
const Card=({ title, description, price, image })=>{
    const cardStyle={
        height:"400px",
        width:"400px",
        border:"1px solid black",
        overflowx: "scroll",
        display:"inline-block"
        
    }
    return(
        <>
     
<div style={cardStyle}>

      <h4>{title}</h4>
      {/* <p>{description}</p> */}
      <img src={image} alt={title} height={150} width={150}/>
      <p>{price}</p>
</div>
       
       </>
    )
}
export default Card