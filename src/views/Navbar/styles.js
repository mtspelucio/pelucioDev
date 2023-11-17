import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 3rem;
    background-color: transparent;
    font-size: 1.2rem;
    font-weight: bold;
    position: absolute;
    top: 0;

    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }  

    p{
        color: var(--gray);
        font-weight: bold;
        font-size: 1.6rem;
        cursor: default;
        span{
            color: var(--white);
        }
    }

    .info{
        flex: 1;
        gap: 2rem;

        a{
            text-decoration: none;
            color: var(--white);            
        }:hover{
            color: var(--primary); 
            transition: .4s;
        }
    }

    .contacts{
        display: flex;
        gap: 1.4rem;
        
        a{
            gap: .8rem;
            text-decoration: none;
            color: var(--white);

            svg{
                width: 1.6rem;
            }
        }:hover{
            color: var(--primary);
            transition: .4s;
        }:hover > svg path{
            fill: var(--primary);
            transition: .4s;
        }
        button{
            position: relative;
            background: linear-gradient(to top, var(--white), var(--primary));
            padding: .2rem;
            border: none;
            border-radius: .4rem;

            a{
                background: var(--gray-200);
                color: var(--white);
                padding: .1rem .4rem;
                border-radius: .3rem;
                font-size: 1rem;
                font-weight: bold;
            }
        }
        
    } 
`;
