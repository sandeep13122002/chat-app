import React, { useState } from 'react'
import { CgAbstract } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import useConversation from '../../Zustand/useConversation';
import useGetCoversations from '../../hooks/useGetCoversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search, setSearch] = useState("");
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetCoversations();


  const handleSubmit = (e) => {
		e.preventDefault();
		if(!search)return ;
		if(search.length<3){
			return toast.error('Search term must be at least 3 characters long')
		}
		const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
     
		if(conversation){
			setSelectedConversation(conversation)
		}else{
			toast.error("No such user found")
		}

	};

  return (
    
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				{/* <IoSearchSharp className='w-6 h-6 outline-none' /> */}
        <FaSearch className='w-6 h-6 outline-none' />

			</button>
		</form>
  )
}

export default SearchInput