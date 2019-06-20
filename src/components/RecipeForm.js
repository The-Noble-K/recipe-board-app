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

    render() {
        return(
            <div className='tile'>
                <form>
                    <input className='input' type='text'
                    name='title' placeholder='Recipe Title'
                    value={this.state.title} onChange={this.handleInput} />
                    <textarea className='input' name='ingredients' 
                    placeholder='Enter recipe ingredients'
                    value={this.state.ingredients} onChange={this.handleInput}></textarea>
                    <textarea className='input' name='instructions'
                    placeholder='Enter recipe instructions'
                    value={this.state.instructions} onChange={this.handleInput}></textarea>
                </form>
            </div>
        );
    }
}

export default RecipeForm