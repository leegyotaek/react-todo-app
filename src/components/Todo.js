import { List, ListItem, ListItemText, ListItemAvatar, Avatar , Button , Modal} from '@material-ui/core'
import React , {useState} from 'react'
import './Todo.css';
import db from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    };
    
    return (
        <> 
        <Modal
            open={open}
            onClose={handleClose}
        >        

        <div>
            <h1>I am a modal</h1>
            <button onClick={e => setOpen(false)}></button>
        </div>

        </Modal>

        
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                    <ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
            </ListItem>
            {/* <Button onClick={event => db.collection('todos').doc(props.id).delete()}> */}
                <Button onClick={handleOpen}>Edit</Button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.id).delete()} />
            {/* </Button> */}
        </List>
        </>

       
    )
}

export default Todo


