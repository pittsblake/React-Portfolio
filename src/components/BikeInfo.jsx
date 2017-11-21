import React from 'react';
import styled from 'styled-components'

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 5px;
padding-bottom: 10px;
background-color: white;
opacity: .8;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
`

const BikeInfo = () => {
    return (
        <CardContainer>
            <Card>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Card>
        </CardContainer>
    );
};

export default BikeInfo;