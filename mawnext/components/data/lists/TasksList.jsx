import React from 'react';
import TaskCard from '../cards/TaskCard';

const TasksList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;