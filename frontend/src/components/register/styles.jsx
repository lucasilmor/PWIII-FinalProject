import styled from 'styled-components';

export const Container = styled.div`

#modal-background{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    z-index: 100000;
    display: none;
    align-items: center;
    justify-content: center;
}

#modal{
    width: 45rem;
    height: 30rem;
    background-color: #FFFFFF;
    border-radius: 10px;
    position: absolute;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

#modal-title{
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 2em;
    color: #FF0067;
    cursor: default;
}

#modal i{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    font-size: 1.5em;
    cursor: pointer;
}

#modal-content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

#image-wrapper{
    min-width: 20rem;
    min-height: 20rem;
    display: flex;
    align-items: center;
}

#image-wrapper input{
}

form{
    min-width: 21rem;
    height: calc(100% - 3rem)
}

.input-container{
    width: 100%;
    margin-bottom: 1.2rem;
}

.input-container:last-child{
    margin-bottom: 0;
}

.input-container label{
    font-family: var(--secondary-font);
    font-size: 1em; 
    color: #FF0067;
    font-weight: bold;
    -webkit-user-select: none;        
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.input-wrapper{
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 3px solid #000000;
    border-radius: 5px;
    margin-top: 0.5rem;
}

.input-wrapper input{
    width: 100%;
    height: 2.5rem;
    font-size: 1.2em;
    padding: 0 0.5rem;
    background-color: transparent;
    border: none;
    transition: all 0.2s;
}

.input-wrapper input:focus{
    -webkit-box-shadow: 0px 0px 20px 3px #666666; 
    box-shadow: 0px 0px 20px 3px #666666;
}

#send-button{
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    color: #31AF91;
    border: 2px #31AF91 solid;
    padding: 0.5rem 2rem;
    font-size: 1em;
    text-transform: uppercase;
    float: right;
    background-color: #FFFFFF;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
}

#send-button:hover{
    -webkit-box-shadow: 0px 0px 15px 2px #31AF91; 
    box-shadow: 0px 0px 15px 2px #31AF91;
}
 `