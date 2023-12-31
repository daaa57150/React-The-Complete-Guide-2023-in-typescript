import Button from '@components/ui/Button';
import { Task } from '@models/models';
import _ from 'lodash';
import { createRef } from 'react';

interface Props {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onRemoveTask: (task: Task) => void;
}

export default function TaskList({ tasks, onAddTask, onRemoveTask }: Props) {

  const input = createRef<HTMLInputElement>();

  const addTask = () => {
    const value = input.current?.value;
    if(!_.isEmpty(value) && !_.isNil(value)) {
      input.current!.value = '';
      onAddTask(Task.Of(value));
    }
  };

  const renderList = () => {
    if(_.isEmpty(tasks)) return null;
    return (
      <div>
        <ul>
          { tasks.map(task =>
            <li key={ task.id }>
              { task.title }
              <Button onClick={ () => onRemoveTask(task) }>Remove</Button>
            </li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div>
        <input type="text" ref={ input }/>
        <Button type="button" onClick={ addTask }>Add Task</Button>
      </div>
      { renderList() }
    </>
  );
}
