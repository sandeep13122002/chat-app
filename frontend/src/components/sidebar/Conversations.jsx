import React from 'react'
import Conversation from './Conversation'
import useGetCoversations from '../../hooks/useGetCoversations';

const Conversations = () => {
const {loading,conversations}=useGetCoversations()
console.log(conversations)
  

  return (
    <div className='py-2 flex flex-col overflow-auto'>
       <Conversation/>
       <Conversation/>
       <Conversation/>
       <Conversation/>
       <Conversation/>
    </div>
  )
}

export default Conversations