import {
    ListTask,
    TaskTilte,
    TaskDetailContainer,
    TaskSidebar,
    ButtonAdd,
    ButtonSearch,
    Container,
    TaskList,
    TaskColumnStyles,
    Title,
} from './TaskDetail.styled';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import TaskCard from '../../components/TaskCard/TaskCard';
import { columnsFromBackend } from '../../fakedata/TaskData';
import { data } from '../../fakedata/TaskData';

const TaskDetail = () => {
    const [columns, setColumns] = useState(columnsFromBackend);
    const [state, setState] = useState(data);

    useEffect(() => {
        let stateId = state.map((item) => item.id);
        let todoColumn = {
            ...columns.todoColumn,
            items: columns.todoColumn.items
                .filter((item) => stateId.includes(item.id))
                .map((item) => state.find((task) => task.id === item.id)),
        };
        let inProgressColumn = {
            ...columns.inProgressColumn,
            items: columns.inProgressColumn.items
                .filter((item) => stateId.includes(item.id))
                .map((item) => state.find((task) => task.id === item.id)),
        };
        let doneColumn = {
            ...columns.doneColumn,
            items: columns.doneColumn.items
                .filter((item) => stateId.includes(item.id))
                .map((item) => state.find((task) => task.id === item.id)),
        };
        setColumns({ todoColumn, inProgressColumn, doneColumn });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };
    const deleteItem = (id) => {
        setState(state.filter((item) => item.id !== id));
    };
    const updateItem = (id, form) => {
        setState(
            state.map((item) => {
                if (item.id === id) {
                    return { ...item, Task: form.name, Due_Date: form.dueDate };
                }
                return item;
            }),
        );
    };
    return (
        <TaskDetailContainer>
            <TaskTilte>TODO LIST</TaskTilte>
            <TaskSidebar>
                <ButtonAdd>ADD TASK</ButtonAdd>
                <ButtonSearch></ButtonSearch>
            </TaskSidebar>
            <ListTask>
                <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                    <Container>
                        <TaskColumnStyles>
                            {Object.entries(columns).map(([columnId, column], index) => {
                                return (
                                    <Droppable key={columnId} droppableId={columnId}>
                                        {(provided, snapshot) => (
                                            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                                                <Title>{column.title}</Title>
                                                {column.items.map((item, index) => (
                                                    <TaskCard
                                                        key={index}
                                                        item={item}
                                                        index={index}
                                                        onDelete={deleteItem}
                                                        onUpdate={updateItem}
                                                    />
                                                ))}

                                                {provided.placeholder}
                                            </TaskList>
                                        )}
                                    </Droppable>
                                );
                            })}
                        </TaskColumnStyles>
                    </Container>
                </DragDropContext>
            </ListTask>
        </TaskDetailContainer>
    );
};
export default TaskDetail;
