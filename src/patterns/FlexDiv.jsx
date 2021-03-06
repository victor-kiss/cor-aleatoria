import React from 'react'
import styled from 'styled-components'



const DFlexRow = styled.div`
    width:${props => props.width || "auto"};
    display:flex;
    height:${props => props.height || "auto"};
    flex-wrap:no-wrap;
    flex-direction:${props => props.direction || "row"};
    justify-content:${props => props.justify || "baseline"};
    align-items:${props => props.align || "baseline"};
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background-color:${props => props.bgColor   };
    
    @media(max-width:576px){
        flex-direction:column;
        align-items:center;
    }

`
export default function FlexDivRow(props) {
    return (
        <DFlexRow 
        width={props.width}
        height={props.height}
        direction={props.direction} 
        justify={props.justify}  
        align={props.align}  
        margin={props.margin}
        padding={props.padding}
        bgColor={props.bgColor}>
            {props.children}
        </DFlexRow>
    )
}
