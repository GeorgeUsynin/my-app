import React from 'react';
import { Context } from '../index';

const NewPostModal = ({is_open}) => {

    const { addPost } = React.useContext(Context)


    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')

    if(!is_open) return null;

    return (
        <div>
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' value={title} onChange={e=>setTitle(e.currentTarget.value)}/>
        </div>
        <div>
            <label htmlFor="title">Description</label>
            <input type="text" id='description' value={description} onChange={e=>setDescription(e.currentTarget.value)}/>
        </div>
        <button onClick={()=>addPost({title, id: 3, description})}>Add</button>
        </div>
    )
}

export default NewPostModal;
