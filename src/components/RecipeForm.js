import React, { Component } from 'react'
import axios from 'axios'


class RecipeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.recipe.title,
            ingredients: this.props.recipe.ingredients,
            instructions: this.props.recipe.instructions
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleBlur = () => {
        const recipe = {
            title: this.state.title,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
        }

        axios.put(`http://localhost:3001/api/v1/recipes/${this.props.recipe.id}`,
        {
            recipe: recipe
        })
        .then(response => { 
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    render() {
        return(
            <div className='tile'>
                <form onBlur={this.handleBlur}>
                    <input className='input' type='text' name='title' placeholder='Enter recipe title'
                    value={this.state.title} onChange={this.handleInput} />

                    <textarea className='input' name='ingredients' placeholder='Enter recipe ingredients'
                    value={this.state.ingredients} onChange={this.handleInput}></textarea>

                    <textarea className='input' name='instructions' placeholder='Enter recipe instructions'
                    value={this.state.instructions} onChange={this.handleInput}></textarea>
                </form>
            </div>
        );
    }
}

export default RecipeForm