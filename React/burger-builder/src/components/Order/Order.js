import React from 'react';
import styled from 'styled-components';


const order = (props) => {

    const StyledDiv = styled.div`
        width:80%;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 10px;
        margin: 10px auto;
        box-sizing: border-box;
    `
    const ingredients = [];
    for( let ingredientName in props.ingredients ) {
        ingredients.push ({
            name : ingredientName,
            amount : props.ingredients[ingredientName]
        })
    }
    const ingredientOutput = ingredients.map( ig => {
        return <span 
                    style={{
                        textTransform:"capitalize",
                        display:"inline-block",
                        margin:"0 8px",
                        border:"1px solid #ccc",
                        padding:"5px"
                    }}
                    key={ig.name}>
                    {ig.name} ({ig.amount})
                </span>
    })
    return(
        <StyledDiv>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </StyledDiv>
    )
}

export default order;