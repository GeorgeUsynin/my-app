import React from 'react';

const UserList = ({items}) => {
    return (
        <ul>
            {items.map((item) => {
                return <li key={item.id}>{`User name: ${item.name}, age: ${item.age}`}</li>;
            })}
        </ul>
    )
};

export default UserList;