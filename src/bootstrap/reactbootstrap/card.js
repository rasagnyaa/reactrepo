


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomSpinner from '../spinners/spinner';

function CustomCard({name,description,imageURL,loaderVisible}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageURL}  height={100} width={100}/>
      <Card.Body>
        {
        loaderVisible
        ?
        <CustomSpinner/>
        :null
}


        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Click me</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;