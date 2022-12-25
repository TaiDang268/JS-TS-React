import styled from 'styled-components';
import { Button } from 'antd';
// import React from 'react';
// import { Draggable } from 'react-beautiful-dnd';
// import styled from '@emotion/styled';
// import CustomAvatar from '../TableComponents/CustomAvatar'
// import { ReactComponent as RedArrow } from '../../assets/icons/High.svg'
// import { ReactComponent as YellowArrow } from '../../assets/icons/Medium.svg'
// import { ReactComponent as BlueArrow } from '../../assets/icons/Low.svg'

export const TaskInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 15px;
    min-height: 106px;
    border-radius: 5px;
    max-width: 311px;
    /* background: ${({ isDragging }) => (isDragging ? 'rgba(255, 59, 59, 0.15)' : 'white')}; */
    background: white;
    margin-top: 15px;

    .secondary-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 12px;
        font-weight: 400px;
        color: #7d7d7d;
    }
`;
export const Update = styled(Button)`
    background-color: #3daa3d;
    margin: 0 10px;
    span {
        color: white !important;
    }
`;
export const Delete = styled(Button)`
    background-color: #d9363e;
    span {
        color: white !important;
    }
`;
export const UpDel = styled.div`
    margin: 10px auto;
`;
