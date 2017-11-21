import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    position: relative;

    div {
        display: flex;
    position: relative;
    background-color: tomato;
    width: 50%;
    padding: 50px;
    } 
    
    div:first-child {
        margin-right: 110px
    }
`

const Coffee = styled.div`
    &:after {
        content:'';
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        left: 100%;
        border-top: 100vh solid tomato;
        border-right: 100px solid transparent;
    }
`

const Bike = styled.div`
    &:before {
        content:'';
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        right: 100%;
        border-bottom: 776px solid tomato;
        border-left: 100px solid transparent;
    }
`

const Main = () => {
    return (
        <Container>
            <Coffee>
                <h1>Hi</h1>
            </Coffee>

            <Bike>
                <h1>hi</h1>
            </Bike>
        </Container>
    );
};

export default Main;