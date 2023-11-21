import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(to right, var(--black), var(--gray-200));
    width: 100%;
    padding: 8rem 0;
    font-family: 'Roboto', sans-serif;

    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main{
        padding: 0 4rem;
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
        padding: 0 10rem;

        .aboutText{
            padding: 2rem;

            span{
                color: var(--green);
                font-size: 1.6rem;
                font-weight: bold;
                font-family: 'Hepta Slab', serif;
            }

            p{
                font-size: 1.6rem;
                font-weight: 400;
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
    //carrousel
    #carrousel{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        padding-top: 4rem;

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
            margin-left: 8rem;
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
            bottom: .5rem;
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
    }

    @media (max-width: 800px){
        padding: 6rem 0 4rem 0;
        
        main{
            height: 60vh;
            padding-left: 2rem;

            .hello{
                padding: 0;
                p{
                    font-size: 1.2rem;
                }
                span{
                    font-size: 4rem; 
                }
                :nth-child(3){
                    margin-left: 3rem;
                }
                :nth-child(4){
                    font-size: 1.6rem;
                }
            }
            .avatar{
                justify-content: end;

                span{
                    width: 15rem;
                    height: 15rem;

                    svg{
                        padding: .4rem;
                    }
    
                    :nth-child(1){
                        width: 4rem;
                        height: 4rem;
                        bottom: 2rem;
                        left: -1rem;
                    }
                    :nth-child(2){
                        right: -1.6rem;
                        width: 3.5rem;
                        height: 3.5rem;
                    }
                    :nth-child(3){
                        padding: .4rem;
                        width: 4rem;
                        left: -.8rem;
                        top: 1rem;;
                    }
                }

            }
        }  
        
        .about{
            display: flex;
            flex-direction: column;
            padding: 2rem;

            .aboutText{
                padding: 0;

                p{
                    font-size: 1.2rem;
                    min-width: 100%;
                    text-align: justify;
                }

                :nth-child(1){
                    font-size: 1.6rem;
                }
            }
            .skills{
                div{
                    svg, img{
                        width: 4rem;
                        height: 4rem;
                    }
                }
            }
        }

        #carrousel{
            position: relative;

            #projects{
                display: flex;
                justify-content: center;
                width: 100%;
                margin: 1rem 0;;
            }

            #chevronLeft,
            #chevronRight{
                top: 4rem;
                position: absolute;
                height: 4rem;
                width: 4rem;
            }
        }
    }

    @media (max-width: 560px) {
        padding: 6rem 0 4rem 0;
        
        main{
            height: 40vh;
            padding: 0 2rem;

            .hello{
                padding: 0;
                p{
                    font-size: 1.2rem;
                }
                span{
                    font-size: 2rem; 
                }
                :nth-child(3){
                    margin-left: 2rem;
                }
                :nth-child(4){
                    font-size: 1.2rem;
                }
            }
            .avatar{
                justify-content: end;

                span{
                    width: 10rem;
                    height: 10rem;

                    svg{
                        padding: .4rem;
                    }
    
                    :nth-child(1){
                        width: 3rem;
                        height: 3rem;
                        bottom: -1.4rem;
                        left: 3rem;
                    }
                    :nth-child(2){
                        right: -.4rem;
                        bottom: 1rem;
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                    :nth-child(3){
                        padding: .4rem;
                        width: 3rem;
                        top: -.4rem;
                        left: 6rem;
                    }
                }

            }
        }  
        
        .about{
            display: flex;
            flex-direction: column;
            padding: 0 2rem;

            .aboutText{
                padding: 0;

                p{
                    font-size: 1.2rem;
                    min-width: 100%;
                    text-align: justify;
                }

                :nth-child(1){
                    font-size: 1.6rem;
                }
            }
            .skills{
                div{
                    svg, img{
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }
        }

        #carrousel{
            position: relative;

            #projects{
                display: flex;
                justify-content: center;
                width: 100%;
                margin: 1rem 0;;
            }

            #slider{
                gap: 1rem;
                a{
                    width: 100%;
                }
            }
            #chevronLeft,
            #chevronRight{
                top: 4rem;
                position: absolute;
                height: 4rem;
                width: 4rem;
            }
        }
    }
`;
