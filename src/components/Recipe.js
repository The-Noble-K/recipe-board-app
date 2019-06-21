import React, { Component } from 'react'

class Recipe extends Component {

    handleClick = () => {
        this.props.onClick(this.props.recipe.id)
    }

    render() {
        return(
            <div className='tile'>
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