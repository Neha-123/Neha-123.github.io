import React, {useEffect} from 'react';
import styled from 'styled-components';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import BackDrop from '../Backdrop/Backdrop';

const Modal = (props) => {

    useEffect (() => {
        console.log('[Modal] useEffect');
    } );

    const ModalDiv = styled.div`
        position: fixed;
        z-index: 500;
        background-color: white;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding: 16px;
        left: 15%;
        top: 30%;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
        transform: ${prop => prop.shows ? 'translateY(0)' : 'translateY(-100vh)'};
        opacity:  ${prop => prop.shows ? '1' : '0'};
        @media (min-width: 600px) {
                width: 500px;
                left: calc(50% - 250px);
        }
    `
    
    return (
    <Auxiliary>
        <BackDrop show = {props.show} clicked={props.modalclose} />
        <ModalDiv shows ={props.show}>{props.children}</ModalDiv>
    </Auxiliary>
    
    )
}

export default React.memo(Modal);