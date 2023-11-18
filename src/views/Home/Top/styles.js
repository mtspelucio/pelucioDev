import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(to right, var(--black), var(--gray-200));
    width: 100%;
    padding: 8rem 4rem;
    font-family: 'Roboto', sans-serif;

    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main{
        height: 90vh;
        display: grid;
        grid-template-columns: 1fr 1fr;

        .hello{
            flex-direction: column;
            align-items: start;
            padding-left: 8rem;

            p{
                color: var(--white);
                font-size: 1.6rem;
                font-weight: bold;
                margin: 1.6rem 0;
                cursor: default;
            }

            span{
                color: var(--green);
                font-size: 4rem;
                font-weight: bold;
                cursor: default;
            }

            :nth-child(3){
                margin-left: 4rem;
            }
            :nth-child(4){
                font-size: 2rem;
            }
        }

        .avatar{
            justify-content: start;

            span{
                position: relative;
                background: transparent;
                border: 2px solid var(--gray-200);
                border-radius: 50%;
                width: 40rem;
                height: 40rem;

                svg{
                    position: absolute;
                    background: var(--gray-200);
                    border-radius: 50%;
                    box-shadow: 0 0 20px var(--shadow);
                    padding: 1rem;
                }
                img{
                    margin: 0;
                }
                
                :nth-child(1){
                    bottom: 2rem;
                    left: 2rem;

                }
                :nth-child(2){
                    right: -2.5rem;

                }
                :nth-child(3){
                    width: 7rem;
                    position: absolute;
                    left: -1rem;
                    top: 8rem;
                    background: var(--gray-200);
                    border-radius: 50%;
                    box-shadow: 0 0 20px var(--shadow);
                    padding: 1rem;
                }
            }
        }
    }

    .about{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        color: var(--white);
        padding: 0 6rem;

        .aboutText{
            padding: 2rem;

            span{
                color: var(--green);
                font-size: 1.6rem;
                font-weight: bold;
                font-family: 'Hepta Slab', serif;
            }

            p{
                font-size: 1.2rem;
                max-width: 80%;
            }

            :nth-child(1){
                font-size: 1.6rem;
                font-weight: bold;
                margin-bottom: 1.2rem;
            }
        }

        .skills{
            padding: 2rem;
            align-items: flex-start;
            justify-content: start;
            border: 2px solid var(--gray-200);
            border-radius: .8rem;
            flex-direction: column;
            
            span{
                color: var(--green);
                font-size: 1.6rem;
                font-weight: bold;
                font-family: 'Hepta Slab', serif;
            }
            

            div{
                flex: 1;
                width: 100%;
                align-items: center;
                justify-content: space-between;

                svg, img{
                    margin: 0;
                    width: 4rem;
                }
            }
            
        }:nth-child(1){
            font-size: 1.6rem;
            font-weight: bold;
            margin-bottom: 1.2rem;
        }
    }
`;
