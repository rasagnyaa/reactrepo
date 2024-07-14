import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseeffectEx1() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        console.log("use effect execution")
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response1 = await axios.get("https://fakestoreapi.com/products")
            console.log(response1, "response1")
            if (response1.status === 200) {
                setData(response1.data)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <h1>UseeffectEx1</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    data.length > 0 && data.map((each) => {
                        return (
                            <div key={each.id} style={{ 
                                border: '1px solid #ccc', 
                                borderRadius: '5px', 
                                padding: '16px', 
                                margin: '10px', 
                                width: '30%', 
                                boxSizing: 'border-box' 
                            }}>
                                <h3>{each.title}</h3>
                                <img src={each.image} alt={each.title} style={{ width: '100%', height: '200px' }} />
                                <p>{each.description}</p>
                                <p><strong>${each.price}</strong></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UseeffectEx1