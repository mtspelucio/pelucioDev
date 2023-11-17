import styled from 'styled-components';

export const Container = styled.div`
    background: #000;
    width: 100%;
    padding: 6rem 4rem;

    .content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        row-gap: 5rem;

        p{
            color: #fff;
            font-size: 1rem;
        }
        span{
            color: #08f;
            font-weight: bold;
            font-size: 2rem;
        }
        .hello p{
            height: 100vh;
            margin: 1rem 0;
            font-size: 1.2rem;
            font-weight: bold;
        }
        .avatar img{
            width: 5rem;
        }
        .services{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            div{
                display: flex;
                align-items: center;
                justify-content: center;
                background: #4f4f4f;
                width: 18rem;
                height: 3rem;
                padding: 1rem;
                border-radius: .4rem;
                gap: 1rem;
                font-family: 'Times New Roman', Times, serif;
                 
                img{
                    width: 1.6rem;
                }
            }
        }
    }
`;
