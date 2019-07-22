import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import Comment from './CommentComponent'
import Approval from './ApprovalCard'
const App=()=>{
    return(

        <div>
            <Approval><Comment author='aqsd' time='12' image={faker.image.avatar()}/></Approval>
            <Approval>        
                    <Comment author='asdad' time='14' image={faker.image.avatar()}/>
            </Approval>
        </div>
    )
}
ReactDOM.render(<App/>,document.querySelector('#root'))