import React from 'react';
import { Form, Input, Modal, Radio } from 'antd';
import { data } from '../../fakedata/TaskData';

const UpdateTaskModal = ({ open, onUpdate, onCancel, task }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            open={open}
            title="Update Task"
            okText="Update"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                onUpdate(task.id, form.getFieldsValue());
                onCancel();
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    name: task.Task,
                    dueDate: task.Due_Date,
                }}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title of collection!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="dueDate" label="Due Date">
                    <Input type="date" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UpdateTaskModal;
