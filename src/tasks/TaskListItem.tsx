import React, { FunctionComponent } from "react";

import { Task } from "./task";

interface Props {
    task: Task;
    onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
    const onClick = () => {
        onDelete(task);
    };

    return (
        <li>
            {task.name} <button onClick={onClick}>X</button>
        </li>
    );
};
