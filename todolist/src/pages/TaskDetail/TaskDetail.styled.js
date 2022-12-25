import { Button } from 'antd';
import styled from 'styled-components';
export const TaskDetailContainer = styled.div`
    width: 80%;
    /* height: 100vh; */
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
    width: 100%;
`;
export const Container = styled.div`
    display: flex;
    /* justify-content: center;
    align-items: center; */
    /* background-color: red; */
`;
export const TaskList = styled.div`
    min-height: 100px;
    margin: 20px auto;
    display: flex;

    flex-direction: column;
    background: #f3f3f3;
    min-width: 341px;
    border-radius: 5px;
    padding: 15px 15px;
    margin: 15px auto;
`;

export const TaskColumnStyles = styled.div`
    margin: 8px;
    display: flex;
    width: 100%;
    min-height: 80vh;
`;

export const Title = styled.span`
    color: #10957d;
    background: rgba(16, 149, 125, 0.15);
    padding: 2px 10px;
    border-radius: 5px;
    align-self: flex-start;
`;
export const ButtonAdd = styled(Button)`
    height: 60px;
    width: 20%;
    span {
        color: white !important;
    }
    background-color: #648fcb;
    font-size: 25px;
    color: white;
    font-weight: bold;
    :hover {
        opacity: 0.9;
    }
`;
export const ButtonSearch = styled(Button)`
    height: 60px;
    width: 25%;
`;
export const Create = styled.button`
    background-color: #648fcb;
`;
