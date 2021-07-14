import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand ] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content:"",
    });

    const InputEvent = (e) =>{
        // const value = e.target.value;
        // const name = e.target.name;

        const {value, name} = e.target;

        setNote((prevData) =>{
            return{
                ...prevData,
                [name] : value
                
            };
        });
    }
    
    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });


    };

    const expandIt = () =>{
       setExpand(true); 
    }
    
    const shrinkIt = () =>{
        setExpand(false);
    }


    return (

        <>
            <div className="main_note" onDoubleClick={shrinkIt}>
                <form>
                {expand ?
                    <input 
                    type="text" 
                    name="title"
                    value={note.title}
                    onChange={InputEvent}
                    placeholder="Title" 
                    autoComplete="off" 

                    /> : null}
                    <textarea 
                    placeholder="Write a Note..." 
                    rows="" 
                    column=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    onClick={expandIt}
                     ></textarea>
                   { expand?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>
                    : null}
                </form>

            </div>
        </>
    )
};

export default CreateNote;