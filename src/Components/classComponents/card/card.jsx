import axios from "axios";
import { Component } from "react";
//import CustomSpinnner from "../spinners/spinner";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
class MyTaskCard extends Component {
  state = {
    recipesList: [],
    loading: false,
    error: null,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({
      loading: true,
    });

    try {
      const response1 = await axios.get("https://dummyjson.com/recipes");
      if (response1.status === 200) {
        this.setState({
          recipesList: response1.data.recipes,
          loading: false,
        });
      }
    } catch (err) {
      console.error(err);
      this.setState({
        error: "server is busy",
      });
    }
  };
  render() {
    return (
      <>
      <h1>Recipes</h1>
        {this.state.recipesList.map((eachCard) => {
          return (
            <div className="card-container">
              <Card>
                <Card.Img variant="top" src={eachCard.image} />
                <Card.Body>
                  <Card.Title>{eachCard.name}</Card.Title>

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{`Ingredients to make : ${eachCard.name}`}</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {eachCard.ingredients.map((eachIngredient, index) => {
                            return <li key={index}>{eachIngredient}</li>;
                          })}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>{`Instructions to make : ${eachCard.name}`}</Accordion.Header>
                      <Accordion.Body>
                        <Card.Text>INSTRUCTIONS</Card.Text>
                        <ul>
                          {eachCard.instructions.map(
                            (eachInstruction, index) => {
                              return (
                                <>
                                  <li key={index}>{eachInstruction}</li>
                                </>
                              );
                            }
                          )}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </>
    );
  }
}
export default MyTaskCard;
