import styled from "styled-components";



const InlineFlex = styled.div`
    display:flex;
    >*{
        ${props=>`margin-${props.direction || 'right'} : ${props.spacing}`}

    }

`

export default InlineFlex