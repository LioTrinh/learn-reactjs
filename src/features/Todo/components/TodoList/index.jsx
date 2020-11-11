import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList({ todoList }) {

    return (
        <ul>
            <h1>Todo List</h1>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;