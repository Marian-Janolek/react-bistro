import React from 'react'
import styled from 'styled-components'
const Loading = () => {
    return (
        <Wrapper>
        <div className='loading'>   
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--backgroundColor);

`
export default Loading
