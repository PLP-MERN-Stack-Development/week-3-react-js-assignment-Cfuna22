import React from "react";
import { Check, X, Clock, AlertCircle, Zap, CheckSquare } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import type { Task } from "../../types";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}) => {
  const getPriorityIcon = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "medium":
        return <Zap className="h-4 w-4 text-yellow-500" />;
      case "low":
        return <Clock className="h-4 w-4 text-green-500" />;
    }
  };

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 dark:text-gray-600 mb-4">
          <CheckSquare className="h-16 w-16 mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          No tasks yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Add your first task to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <Card
          key={task.id}
          className={`border-l-4 ${getPriorityColor(
            task.priority
          )} transition-all duration-200 hover:shadow-md`}
        >
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <button
                onClick={() => onToggleTask(task.id)}
                className={`mt-1 rounded-full p-1 transition-colors ${
                  task.completed
                    ? "bg-green-500 text-white"
                    : "border-2 border-gray-300 dark:border-gray-600 hover:border-green-500"
                }`}
              >
                {task.completed && <Check className="h-3 w-3" />}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  {getPriorityIcon(task.priority)}
                  <h3
                    className={`font-medium ${
                      task.completed
                        ? "line-through text-gray-500 dark:text-gray-400"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {task.title}
                  </h3>
                </div>

                {task.description && (
                  <p
                    className={`text-sm mt-1 ${
                      task.completed
                        ? "line-through text-gray-400 dark:text-gray-500"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {task.description}
                  </p>
                )}

                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  Created {new Date(task.createdAt).toLocaleDateString()}
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
