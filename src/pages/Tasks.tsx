import React from 'react';
import { CheckSquare } from 'lucide-react';
import { useTasks } from '../hooks/useTasks';
import { TaskForm } from '../components/tasks/TaskForm';
import { TaskFilters } from '../components/tasks/TaskFilters';
import { TaskList } from '../components/tasks/TaskList';

const Tasks: React.FC = () => {
  const { 
    tasks, 
    filter, 
    setFilter, 
    addTask, 
    toggleTask, 
    deleteTask, 
    stats 
  } = useTasks();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <CheckSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Task Manager
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stay organized and productive with our intuitive task management system. 
          Add, organize, and track your tasks with ease.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <TaskForm onAddTask={addTask} />
        <TaskFilters 
          currentFilter={filter}
          onFilterChange={setFilter}
          stats={stats}
        />
        <TaskList 
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default Tasks;