import { Button } from 'antd';
import styled from 'styled-components';
export const TaskDetailContainer = styled.div`
    width: 70%;
    height: 100vh;
    background-color: #e6e3e3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;
export const TaskTilte = styled.div`
    flex: 1;
    font-size: 40px;
    font-weight: bold;
    color: #666;
`;
export const TaskSidebar = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;
export const ListTask = styled.div`
    flex: 7;
`;
export const ButtonAdd = styled(Button)`
    height: 60px;
    width: 20%;
    background-color: #648fcb;
    font-size: 25px;
    color: white;
    font-weight: bold;
    &:hover {
        background-color: green;
    }
`;
export const ButtonSearch = styled(Button)`
    height: 60px;
    width: 25%;
`;
