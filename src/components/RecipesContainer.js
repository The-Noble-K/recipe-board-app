import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './Recipe';

class RecipesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/recipes.json')
        .then(response => {
            console.log(response)
            this.setState({recipes: response.data})
        })
        .catch(error => console.log(error))
    }

    render() {
        return(
            <div>
                {this.state.recipes.map((recipe) => {
                    return(<Recipe recipe={recipe} key={recipe.id} />)
                })}
            </div>
        );
    }
}

export default RecipesContainer