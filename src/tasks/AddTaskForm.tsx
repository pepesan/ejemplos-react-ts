import React, { FunctionComponent } from "react";
import { Task } from "./task";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    task: Task;
}

export const AddTaskForm: FunctionComponent<Props> = ({
    onChange,
    onAdd,
    task
}) => (
    <form onSubmit={onAdd}>
        <input onChange={onChange} value={task.name} />
        <button type="submit">Add a task</button>
    </form>
);
