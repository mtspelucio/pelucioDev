import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background: linear-gradient(to right, var(--black), var(--gray-200));

    padding: 8rem 0;
    font-family: 'Roboto', sans-serif;
    position: relative;
    
    span{
        color: var(--green);
        font-size: 1.6rem;
        font-weight: bold;
        font-family: 'Hepta Slab', serif;
    }
    
    #projects{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        width: 80%;
        color: var(--white);
        position: absolute;
        top: 2rem;
        left: 12rem;
    }
    
    #slider{
        display: flex;
        width: 100%;
        padding: 1rem;
        gap: 2rem;
        overflow-x: hidden;
        scroll-behavior: smooth;
        white-space: nowrap;
    }
    
    #slider:has(#item:hover) #item:not(:hover){
        opacity: .6;
        scale: .98;
        transition: all .4s;
    }

    #chevronLeft,
    #chevronRight{
        position: absolute;
        left: 1rem;
        background: var(--shadow);
        border-radius: .4rem;
        height: 21rem;
        width: 4rem;
        &:hover{
            background: var(--black);
            transition: all .4s;
            cursor: pointer;
        }
    }
    #chevronRight{
        left: auto;
        right: 1rem;
    }

    
`;
