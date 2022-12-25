import { v4 as uuidv4 } from 'uuid';
export const data = [
    {
        id: '1',
        Task: 'Clean',
        Due_Date: '2022-12-25',
    },
    {
        id: '2',
        Task: 'Fix Styling',
        Due_Date: '2022-09-09',
    },
    {
        id: '3',
        Task: 'Handle Door Specs',
        Due_Date: '2022-08-08',
    },
    {
        id: '4',
        Task: 'morbi',
        Due_Date: '2022-07-07',
    },
    {
        id: '5',
        Task: 'proin',
        Due_Date: '2022-06-06',
    },
];

export const columnsFromBackend = {
    todoColumn: {
        title: 'To-do',
        items: data,
    },
    inProgressColumn: {
        title: 'In Progress',
        items: [],
    },
    doneColumn: {
        title: 'Done',
        items: [],
    },
};
