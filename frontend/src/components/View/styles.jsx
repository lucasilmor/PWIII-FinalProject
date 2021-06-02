import styled from 'styled-components';

export const Cont = styled.div` 
    height: 100px;
    display: flex;
    flex-direction: row;
    width: 100%;

    .app{
        position: relative;
    }

    h1{
        color: #FF0066;
        text-align: center;
        float: left;
        margin: 0.5rem auto;
    }

    .view{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }

    .table{
        height: 25rem;
        overflow: auto;
    }

    .action-button:nth-child(1){
        margin-right: 0.5rem;
    }

    #plus-icon-wrapper{
        position: fixed;
        right: 4rem;
        bottom: 9rem;
        z-index: 100;
        width: 8rem;
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #plus-icon-wrapper i{
        font-size: 7em;
        color: #31AF91;
        transition: font-size 0.1s;
    }

    #plus-icon-wrapper i:hover{
        font-size: 8em;
        cursor: pointer;
    }

`;