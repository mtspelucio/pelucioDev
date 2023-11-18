import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    width: 30rem;
    height: 20rem;
    background: var(--gray-200);
    font-family: 'Roboto', sans-serif;
    list-style: none;
    outline: 4px solid var(--gray-200);
    border: 2px solid var(--gray-200);
    border-radius: .8rem;
    box-shadow: 0 0 20px var(--shadow);
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:hover{
        outline: 4px solid var(--green);
        transition: .6s;
    }

    p{
        color: var(--white);
        font-size: 1.2rem;
        width: 100%;
        padding: 1rem;
        text-align: center;
        position: absolute;
        bottom: 0;
        background-color: var(--shadow);
    }
    img{
        display: inline-block;
        width: 30rem;
        height: 20rem;  
        object-fit: cover;
        object-position: center top;
    }

    
`;
