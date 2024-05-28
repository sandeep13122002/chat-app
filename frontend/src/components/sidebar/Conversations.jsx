import React from 'react'
import Conversation from './Conversation'
import useGetCoversations from '../../hooks/useGetCoversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
const {loading,conversations}=useGetCoversations()

  

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,idx)=>(
          <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx===conversations.length-1}

          
          
          />
        ))
      }
    </div>
  )
}

export default Conversations