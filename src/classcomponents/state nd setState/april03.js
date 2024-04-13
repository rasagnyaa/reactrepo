
const { Component } = require("react");


class Emoji extends Component{


         state = {
            emojis : [
                {
                name:'emoji1',
                image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Drunk-face.jpg?q=50&fit=crop&w=1500&dpr=1.5',
                id : 1
            },
            {
                name:'emoji2',
                image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Upside-down-emoji.jpg?q=50&fit=crop&w=767&dpr=1.5',
                id : 2
            },
            {
                name:'emoji3',
                image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Sunglasses.jpg?q=50&fit=crop&w=767&dpr=1.5',
                id : 3
            },
            {
                name:'emoji4',
                image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Love-eyes-faces.jpg?q=50&fit=crop&w=767&dpr=1.5',
                id : 4
            },
            {
                name:'emoji5',
                image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Sweat-Smile.jpg?q=50&fit=crop&w=1500&dpr=1.5',
                id : 5
            },
            {
                name:'emoji6',
                image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/starry-eyed-emoji.jpg?q=50&fit=crop&w=767&dpr=1.5',
                id : 6
            },
            {
                name:'emoji7',
                image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Smirking-emoji.jpg',
                id : 7
            },
            {
                name:'emoji8',
                image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Relieved-emoji.jpg?q=50&fit=crop&w=767&dpr=1.5',
                id : 8
            },
        ]
         }

       
         deleteItem = (index)=>{

            const newEmojis = this.state.emojis.filter((eachObject,i)=>{
                return i!== index
            })

            this.setState({
                emojis:newEmojis
            })

         }

         updateItem = (index)=>{

            const updatedItems = this.state.emojis.map((eachObject,i)=>{
                if(i===index){
                    return({
                        name:'emoji7',
                        image : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Smirking-emoji.jpg',
                        id : 7
                    })
                }
                else
                return eachObject
            })

            this.setState({
                emojis:updatedItems
            })

         }


    render(){
        return(
            <div className='div1'>

                {
                   this.state.emojis.map((eachObject,index)=>{
                    return(
                        <div className="card">
                        <img src={eachObject.image} height={210} width={200} alt="" />
                        <h4>{eachObject.name}</h4>
                        <div className='buttonEmoji'>
                        <button className='button01' onClick={()=>this.deleteItem(index)}>Delete</button>
                        <button className='button01' onClick={()=>this.updateItem(index)}>Update</button>
                        </div>
                        </div>
                    )
                   }) 
                }

            </div>
        )
    }
}

export default Emoji