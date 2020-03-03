import React, {Component} from 'react';
import './AddTaskForm'
import {Task} from "./task";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TaskList";
interface State {
    newTask: Task;
    tasks: Task[];
}
class  TaskComponent extends Component<{}, State>{
    state = {
        newTask: {
            id: 1,
            name: ""
        },
        tasks: []
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div id="TaskComponent">
                <AddTaskForm
                    task={this.state.newTask}
                    onAdd={this.addTask}
                    onChange={this.handleTaskChange}
                />
                <TasksList tasks={this.state.tasks} onDelete={this.deleteTask}/>
            </div>
        );
    }
    private addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState(previousState => ({
            newTask: {
                id: previousState.newTask.id + 1,
                name: ""
            },
            tasks: [...previousState.tasks, previousState.newTask]
        }));
    };

    private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                name: event.target.value
            }
        });
    };
    private deleteTask = (taskToDelete: Task) => {
        this.setState(previousState => ({
            tasks: [
                ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
            ]
        }));
    };
}

export default TaskComponent;
