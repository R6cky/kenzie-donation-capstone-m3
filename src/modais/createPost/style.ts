
import styled from "styled-components";

export const StyledCreatePost = styled.div`

    width:100vw;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #00000058;

    .header-modal{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

    }


    form{
        width: 90%;
        max-width: 100%;
        height: 713px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center ;
        background:var(--grey-0);
        border-radius: 10px;

        label{
            font-size: 14px;
        }
 
        
        .form-title{
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            input{
                width: 100%;
                height: 50px;
            }
        }

        .form-description{
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            input{
                width: 100%;
                height: 50px;
            }
        }
        

        .form-post-category{
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            select{
                width: 100%;
                height: 50px;
            }

            
        }



        .form-post-type{
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            select{
                width: 100%;
                height: 50px;
            }
        }
        

        .form-post-image{
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;

            input{
                width: 100%;
                height: 50px;
            }
        }


        .form-button{
            width: 90%;
            display: flex;
            gap: 5px;
            flex-direction: column;
            gap: 10px;

            button{
                width: 100%;
                height: 50px;
            }
        }
 
    }


`