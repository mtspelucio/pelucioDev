import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(to right, var(--black), var(--gray-200));
    width: 100%;
    height: 100vh;
    padding: 8rem 4rem;

    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main{
        height: 80vh;
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
                color: var(--primary);
                font-size: 4rem;
                font-weight: bold;
                cursor: default;
            }

            :nth-child(3){
                margin-left: 4rem;
            }
            
        }

        .avatar{
            justify-content: start;

            span{
                position: relative;
                background: transparent;
                border: 2px solid var(--gray-200);
                /* box-shadow: 0 0 20px var(--black); */
                border-radius: 50%;
                width: 40rem;
                height: 40rem;

                svg{
                    position: absolute;
                    background: var(--gray-200);
                    border-radius: 50%;
                    box-shadow: 0 0 20px var(--black);
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
                    box-shadow: 0 0 20px var(--black);
                    padding: 1rem;
                }
            }
        }
    }
`;
