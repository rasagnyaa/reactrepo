import axios from "axios";
import { Component } from "react";
import CustomSpinnner from "../spinners/spinner";

class MyTask extends Component {
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
        <h1>RECIPES MENU</h1>
        {this.state.loading ? (
          <>
            <CustomSpinnner />
          </>
        ) : (
          <div>
            {this.state.recipesList.map((eachRecipe) => {
              return (
                <>
                  <div>
                    <h2 key={eachRecipe.id}>{eachRecipe.name}</h2>
                    <img
                      src={eachRecipe.image}
                      height={150}
                      width={150}
                      alt="food"
                    />
                    <h3>Ingredients</h3>
                    {/* <li>{eachRecipe.ingredients}</li> */}
                    <ul>
                      {eachRecipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                    <h3>Instructions</h3>
                    {/* <li>{eachRecipe.instructions}</li> */}
                    <ol>
                      {eachRecipe.instructions.map((instructions, index) => (
                        <li key={index}>{instructions}</li>
                      ))}
                    </ol>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
export default MyTask;
