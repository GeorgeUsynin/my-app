import React from 'react';

const AddUser = React.forwardRef(({createNewUser}, ref) => {

    const userNameInputRef = React.useRef();

    React.useImperativeHandle(ref, ()=>({activate}))

    const [user_name, setUserName] = React.useState('')
    const [user_age, setUserAge] = React.useState('')

    const changeUserNameHandler = (e) => {
        setUserName(e.target.value);
    }

    const changeUserAgeHandler = (e) => {
        setUserAge(e.target.value);
    }

    const addUserHandler = (e) => {
        e.preventDefault();
        createNewUser({name: user_name, age: user_age})
        setUserName('')
        setUserAge('');
    };

    const activate = () => {
        userNameInputRef.current.focus();
    }


    return (
        <form onSubmit={addUserHandler}> 
            <div>
                <label htmlFor='userName'>
                    <input type='text' id='userName' value={user_name} onChange={changeUserNameHandler} ref={userNameInputRef}/>
                </label>
            </div>
            <div>
                <label htmlFor='userAge'>
                    <input type='text' id='userAge' value={user_age} onChange={changeUserAgeHandler}/>
                </label>
            </div>
            <div>
                <button type='submit'>Add user</button>
            </div>
        </form>
    )
});

export default AddUser;