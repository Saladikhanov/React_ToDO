import React, {useState} from 'react';
import EditTask from '../modals/EditTask';


const Card = ({taskObj, index, deleteTask,updateListArray }) => {
   const [modal, setModal] = useState(false);
   const toggle = () => {
       setModal(!modal)
   }
   const updateTask = (obj) => {
       updateListArray(obj, index)
   }
   const handleDelete = () => {
       deleteTask(index)
   }
   const confirmDelete = () => {
       if (window.confirm("Are you sure you want to delete your note?")) {
           handleDelete()
       } 
   }
    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top"></div>
            <div className = "task-holder">
                
                <span className = "card-header" >{taskObj.Name}</span>
                <p className = "Description">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit" style={{ "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style = {{ "cursor" : "pointer"}} onClick = {confirmDelete} ></i>
                </div>
                <div>{taskObj.DateCreated}</div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;