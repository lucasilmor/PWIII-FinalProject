import styled from 'styled-components';

export const Container = styled.div` 
    height: 100px;
    background: #303030;
    display: flex;
    flex-direction: row;
    width: 100%;
    position: absolute;
    bottom: 0;

    .footer{
        display: flex;
        align-items: center;
        width: 100%;
    }

    .sp{
        width: 100px;
        height: 90px;
        margin-left: 10px;
    }

    .git{
        height: 65px;
        width: 70px;
    }

    .git-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: calc(50% - 75.155px);
        bottom: 10px;

    }

    .gits-wrapper{
        display: flex;
        justify-content: space-between;
        width: calc(100% + 10px)
    }

    .gits-wrapper a{
        color: #1278B1;
    }

    .logos{
        height: 100px;
        position: absolute;
        right: 10px;
    }

`;