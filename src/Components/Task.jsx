// Task.js
import React from 'react';

function Task({ title, deadline, status, onStart, onComplete }) {
  return (
    <div className="task-item">
      <p>Title: {title}</p>
      <p>Deadline: {deadline}</p>
      <p>Status: {status}</p>
      {status === 'inactive' && (
        <button onClick={onStart}>Start</button>
      )}
      {status === 'in progress' && (
        <button onClick={onComplete}>Complete</button>
      )}
    </div>
  );
}

export default Task;
