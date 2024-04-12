import CustomCard from "./reactbootstrap/card"


const FirstPage = () => {

return(
    <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>Shopping....!</h1>
    <p>Shopping is a therapy</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
       <CustomCard loaderVisible={true}imageURL={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} name={"rasagnya"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
      </div>
      <div className="col-sm-4">
      <CustomCard loaderVisible={false} imageURL={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} name={"rassu"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
      </div>
      <div className="col-sm-4">
      <CustomCard loaderVisible={true} imageURL={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} name={"rasna"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
      </div>
    </div>
  </div>
</>

)








}

export default FirstPage