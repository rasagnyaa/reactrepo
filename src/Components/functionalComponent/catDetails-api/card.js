

const CardforCat = ({ details, changeCatDetails }) => {
    return (
        <center>
   <div style={{height:400,width:400,border:"1px solid gray",boxShadow:"10px 10px 10px 10px gray",borderRadius:"1rem",marginTop:"100px"}}>
        <h1 style={{color:"red"}}>Id: {details.id}</h1>
        <img src={details.url} alt="cat" height={300} width={400}/>
        <button onClick={changeCatDetails} style={{margin:10,backgroundColor:"green",color:"white",border:"1px ssolid green"}}>Click here</button>
      </div>


        </center>
      
    );
  };
  
  export default CardforCat;
  