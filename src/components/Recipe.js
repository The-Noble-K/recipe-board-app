import React, { Component } from 'react'

class Recipe extends Component {

    handleClick = () => {
        this.props.onClick(this.props.recipe.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.recipe.id)
    }

    render() {
        return(
            <div className='tile'>
                <span className='deleteButton' onClick={this.handleDelete}>
                    X
                </span>
                <h3 onClick={this.handleClick}>
                    {this.props.recipe.title}
                </h3>
                <p onClick={this.handleClick}>
                    {this.props.recipe.ingredients}
                </p>
                <p onClick={this.handleClick}>
                    {this.props.recipe.instructions}
                </p>
            </div>
        )
    }
}

export default Recipe