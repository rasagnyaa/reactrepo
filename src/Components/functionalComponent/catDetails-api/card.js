

const CardforCat = ({ details, changeCatDetails }) => {
    return (
      <div style={{height:400,width:400,border:"1px solid black"}}>
        <h1>Id: {details.id}</h1>
        <img src={details.url} alt="cat" height={300} width={400} />
        <button onClick={changeCatDetails}>Click here</button>
      </div>
    );
  };
  
  export default CardforCat;
  