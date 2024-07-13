import React from 'react'
import { useParams } from 'react-router-dom'
//import Card from '../Components/functionalComponent/card/card'

function Productdetails() {
  const URL_PARAMS=useParams()
  console.log(URL_PARAMS)
  return (
    <div>
  <h1>prducts</h1>
     {/* <Card  title={each.title}
                  description={each.description}
                  price={`$${each.price}`}
                  image={each.image}/> */}
    </div>
  )
}

export default Productdetails
//use params() is a hook provises by a react-outer-dom which collects the variable url parameters
