import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './Recipe';
import update from 'immutability-helper'
import RecipeForm from './RecipeForm'

class RecipesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            editingRecipeId: null,
            notification: ''
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

    addNewRecipe = () => {
        axios.post(
            'http://localhost:3001/api/v1/recipes',
            { recipe: 
                {
                    title: '',
                    ingredients: [],
                    instructions: []
                }
            }
        )
        .then(response => {
            console.log(response)
            const recipes = update(this.state.recipes, {
                $splice: [[0, 0, response.data]]
            })
            this.setState({
                recipes: recipes,
                editingRecipeId: response.data.id
            })
        })
        .catch(error => console.log(error))
    }

    updateRecipe = (recipe) => {
        const recipeIndex = this.state.recipes.findIndex(x => x.id === recipe.id)
        const recipes = update(this.state.recipes, {
            [recipeIndex]: { $set: recipe }
        })
        this.setState({
            recipes: recipes,
            notification: 'Changes saved'
        })
    }

    resetNotification = () => {
        this.setState({notification: ''})
    }

    render() {
        return(
            <div>
                <button className='newRecipeButton' onClick={this.addNewRecipe}>
                    New Recipe
                </button>
                <span className='notification'>
                    {this.state.notification}
                </span>
                {this.state.recipes.map((recipe) => {
                    if(this.state.editingRecipeId === recipe.id) {
                        return(<RecipeForm recipe={recipe} key={recipe.id} 
                            updateRecipe={this.updateRecipe} resetNotification={this.resetNotification} />)
                    } else {
                        return(<Recipe recipe={recipe} key={recipe.id} />)
                    }
                })}
            </div>
        );
    }
}

export default RecipesContainer