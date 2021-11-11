import { List, ListItem, ListItemText, ListItemAvatar, Avatar , Button , Modal} from '@material-ui/core'
import React , {useState} from 'react'
import './Todo.css';
import db from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles  = makeStyles((theme)=> ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,4,3)
    },
  }));
  
 

function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    };
    
    const updateTodo = () => {
        // update the todo with the new info text
        db.collection('todos').doc(props.id).set({
               todo: input
        }, { merge: true})

        setOpen(false)

    } 
    return (
        <> 
        <Modal
            open={open}
            onClose={handleClose}
        >        

        <div className={classes.paper}>
            <h1>I am a modal</h1>
            <input placeholder = {props.text} value = {input} onChange={event=> setInput(event.target.value)}/>
            <button onClick={e => updateTodo()}>Update Todo</button>
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


