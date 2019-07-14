import React from 'react';
import themeList from "../Config/themeList";
import styled from 'styled-components'
import { isEmpty } from 'lodash';


const ThemeMenu = styled.div`
grid-area: containerR;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
padding-top: 12px;
}
button.toggle:focus {
outline: none !important;
}
`

const ThemeButton = styled.button`
background: none;
color: black;
text-transform: uppercase;
border: 1px solid #e4e9ee;
border-radius: 3px;
height: 30px;
opacity: 0.8;
width: 60%;
padding: 3px;
margin: 10px;
cursor: pointer;
`
/* 

.menu {
 

  
.buttons {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 80%;
    align-items: center;
  }
  .noButtons {
    display: none;
  }
  
 */

const PickGifTheme = () => {


    console.log(themeList)
return(

    <ThemeMenu>

    {isEmpty(themeList) ? null :
         (themeList.map(theme => (
            <ThemeButton key={theme.id} value={theme.id} onClick={this.handleQuery}>
                {theme.buttonText}
            </ThemeButton>
         )))
    }

    </ThemeMenu>


    
         )}

export default PickGifTheme;