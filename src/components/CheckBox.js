import React from 'react';

export default function CheckBox({handleClick = f => f}) {
    return (

            <div>
                <label htmlFor="user" id='users' className='labelx2'>Search User</label>
                <input type="checkbox" className="user_check" name='users' onClick={handleClick}/>
            </div>
    )
}
