import styled from "styled-components"



const ballComponent = ({className})=>{
    return(
        <div className={className}>a</div>
    )
}
const StyledBall = styled(ballComponent)`

    border-radius: 50px;
    font-size: 1px;
    color:transparent;
    width: ${props=>props.width};
    height: ${props=>props.width};
    background: ${props=>props.bg};


`


const StyledLine = styled.div`
    border-bottom: ${props=> `${props.thickness} solid ${props.bg}` };
    width: ${props=>props.width || '100%'};
    font-size:1px;
    color:transparent

`



export {StyledBall,StyledLine}