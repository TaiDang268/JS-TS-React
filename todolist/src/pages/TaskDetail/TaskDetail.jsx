import { ListTask, TaskTilte, TaskDetailContainer, TaskSidebar, ButtonAdd, ButtonSearch } from './TaskDetail.styled';
// import { Button } from 'antd';
const TaskDetail = () => {
    return (
        <TaskDetailContainer>
            <TaskTilte>TODO LIST</TaskTilte>
            <TaskSidebar>
                <ButtonAdd>ADD TASK</ButtonAdd>
                <ButtonSearch></ButtonSearch>
            </TaskSidebar>
            <ListTask></ListTask>
        </TaskDetailContainer>
    );
};
export default TaskDetail;
