import React from 'react'

const Comment=(props)=>{
    return(
        <div className='ui container comments'>
            <div className='comment'>
                <a href='/' className='avatar'><img alt='jdbd' src={props.image}/></a>
                <div className='content'>
                    <a href='/' className='author'>{props.author}</a>
                    <div className='metadata'>
                        <span className='date'>{props.time}</span>
                    </div>
                    <div className='text'>React-Redux</div>
                </div>
            </div>
        </div>
    )
}

export default Comment