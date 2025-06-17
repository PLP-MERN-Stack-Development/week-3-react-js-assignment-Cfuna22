import { useState, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import type { Task, FilterType } from "../types";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useState<FilterType>("all");

  const addTask = useCallback(
    (
      title: string,
      description?: string,
      priority: Task["priority"] = "medium"
    ) => {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title,
        description,
        completed: false,
        createdAt: new Date(),
        priority,
      };
      setTasks((prev: Task[]) => [newTask, ...prev]);
    },
    [setTasks]
  );

  const toggleTask = useCallback(
    (id: string) => {
      setTasks((prev: Task[]) =>
        prev.map((task: Task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id: string) => {
      setTasks((prev: Task[]) => prev.filter((task: Task) => task.id !== id));
    },
    [setTasks]
  );

  const updateTask = useCallback(
    (id: string, updates: Partial<Task>) => {
      setTasks((prev: Task[]) =>
        prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
      );
    },
    [setTasks]
  );

  interface FilteredTasksFn {
    (task: Task): boolean;
  }

  const filteredTasks: Task[] = tasks.filter(((task: Task) => {
    switch (filter) {
      case "active":
        return !task.completed;
      case "completed":
        return task.completed;
      default:
        return true;
    }
  }) as FilteredTasksFn);

  interface TaskStats {
    total: number;
    completed: number;
    active: number;
  }

  const stats: TaskStats = {
    total: tasks.length,
    completed: tasks.filter((task: Task) => task.completed).length,
    active: tasks.filter((task: Task) => !task.completed).length,
  };

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    stats,
  };
};
