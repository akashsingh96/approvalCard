import React from 'react'

const Approval=(props)=>{
    return(
        <div className='ui card'>
            <div className='content'>{props.children}</div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <button className='ui basic green button'>Approval</button>
                    <button className='ui basic red button'>Decline</button>
                </div>
                
            </div>
        </div>
    )
}

export default Approval