import { Delete, TaskInformation, UpDel, Update } from './TaskCard.styled';
import { Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';
import UpdateTaskModal from '../Update/UpdateForm';

const TaskCard = ({ item, index, onDelete, onUpdate }) => {
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    return (
        <>
            <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <TaskInformation>
                            <p>{item.Task}</p>
                            <div className="secondary-details">
                                <p>
                                    <span>{item.Due_Date}</span>
                                </p>
                            </div>
                            <UpDel>
                                <Update
                                    onClick={() => {
                                        
                                        setOpenUpdateModal(true);
                                    }}
                                >
                                    Update
                                </Update>
                                <Delete onClick={() => onDelete(item.id)}>Delete</Delete>
                            </UpDel>
                        </TaskInformation>
                    </div>
                )}
            </Draggable>
            <UpdateTaskModal
                open={openUpdateModal}
                onCancel={() => setOpenUpdateModal(false)}
                onUpdate={onUpdate}
                task={item}
            />
        </>
    );
};

export default TaskCard;
