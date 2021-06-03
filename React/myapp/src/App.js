import React from 'react';

function WordList(props) {
    const words = props.words;
    const items = words.map((word, idx) =>
        <li key={idx}>{word}</li>
    );
    return (
        <div>
            <h2>Rendering a list inside component</h2>
            <ul>{items}</ul>
        </div>
    );
}

const users = [
    {
        id: 1,
        name: 'Robin Williams',
        occupation: 'teacher',
    },
    {
        id: 2,
        name: 'John Doe',
        occupation: 'gardener',
    },
];

const UserList = () => (
  <ul>
  {
    users.map(user => (
      <li key={user.id}>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.occupation}</div>
      </li>
    ))}
  </ul>
);

export {WordList, UserList};
