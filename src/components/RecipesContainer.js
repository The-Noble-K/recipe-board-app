import React, { Component } from 'react'
import axios from 'axios'

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
                Recipes
            </div>
        )
    }
}

export default RecipesContainer