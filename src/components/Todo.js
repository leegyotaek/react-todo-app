import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import React from 'react'
import './Todo.css';

function Todo(props) {
    return (

        <List class="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                    <ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
            </ListItem>
        </List>
    )
}

export default Todo
