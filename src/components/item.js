import {findAllBytitle } from '@testing-library/react'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Item = ({ title, desc, backgroundImg , leftBtnTxt, leftBtnLink, rightBtnTxt, }) => { 
    return (
        <div className='item' style={{

        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>Title</p>
                    <div className="item_textDesc">
                        <p>Desc</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item_buttom">
                    
                    </div>
                </div>
            </div>
        </div>
       
    
    )
 }

export default Item