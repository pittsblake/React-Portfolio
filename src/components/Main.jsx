import React, { Component } from 'react';
import styled from 'styled-components'
import Bio from './Bio'
import BikeInfo from './BikeInfo'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    position: relative;

    div {
        display: flex;
        position: relative;
        background-color: light cyan;
        width: 50%;
        padding: 50px;
    } 
    
    div:first-child {
        margin-right: 0px
    }
`

const Coffee = styled.div`
    background-image: url("https://i.imgur.com/CKF2FXP.jpg");
    background-size: cover;
    background-position:center;
    display: flex;
    justify-content: center;

    h1 {
        height: 100px;
    }
`

const Bike = styled.div`
    background-image: url("https://i.imgur.com/YZHydpd.jpg");
    background-size: 150% 100%;
    background-position: right center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center
`

class Main extends Component {

    state = {
        showBio: false,
        showBikeInfo: false
    }

    showBio = () => {
        this.setState({ showBio: !this.state.showBio })
    }

    showBikeInfo = () => {
        this.setState({ showBikeInfo: !this.state.showBikeInfo })
    }

    render() {
        return (
            <Container>
                <Coffee>
                    <h1 onClick={this.showBio}>Developer</h1>

                </Coffee>

                {
                    this.state.showBio ? <Bio /> : null
                }
                {
                    this.state.showBikeInfo ? <BikeInfo /> : null
                }
                <Bike>
                    <h1 onClick={this.showBikeInfo}>Cyclist</h1>

                </Bike>
            </Container>
        );
    };
}

export default Main;