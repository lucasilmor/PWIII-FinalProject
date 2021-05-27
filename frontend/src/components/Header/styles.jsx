import styled from 'styled-components';

export const Container = styled.div` 
    height: 100px;
    background: #303030;
    display: flex;
    flex-direction: row;
    width: 100%;

    .header{
        display: flex;
        align-items: center;
        width: 100%;
    }

    .logo{
        width: 80px;
        height: 70px;
        margin-left: 50px;
    }

    h1{
        font-size: 60px;
        line-height: 100px;
        margin-left: 10px;
    }
    
    span{
        color: #FF0066;
    }

    .cps{
        position: absolute;
        left: calc(50% - 200px);
        top: -10px;
    }

    .profile{
        height: 100px;
        position: absolute;
        right: 5px;
    }

`;