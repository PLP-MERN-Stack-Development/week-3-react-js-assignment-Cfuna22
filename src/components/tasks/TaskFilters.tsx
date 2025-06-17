import React from 'react';
import { Card, CardContent } from '../ui/card';
// Update the path below to the actual location of FilterType in your project
import type { FilterType } from '../../types'; 
import { Button } from '../ui/button';

interface TaskFilterProps {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
    stats: {
        total: number;
        active: number;
        completed: number;
    };
}

export const TaskFilters: React.FC<TaskFilterProps> = ({
    currentFilter,
    onFilterChange,
    stats,
}) => {
    const filters: { key: FilterType; label: string; count: number }[] = [
        { key: 'all', label: 'All', count: stats.total },
        { key: 'active', label: 'Active', count: stats.active },
        { key: 'completed', label: 'Completed', count: stats.completed }
    ]

    return (
        <Card className='mb-6'>
            <CardContent className='p-4'>
                <div className="flex flex-wrap gap-2">
                    {filters.map(({ key, label, count }) => (
                        <Button
                        key={key}
                        variant={currentFilter === key ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => onFilterChange(key)}
                        className="flex items-center space-x-1"
                        >
                            <span>{label}</span>
                            <span className={ `text-5xl px-1.5 py-0.5 rounded-full ${
                                currentFilter === key
                                ? 'bg-white/20'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                            }` }>
                                {count}
                            </span>
                        </Button>
                    ))}
                </div>

                {stats.total > 0 && (
                    <div className="mt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                            <span>Progress</span>
                            <span>{stats.completed} of {stats.total} completed</span>
                        </div>
                        <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                                className={`bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300 progress-bar`} 
                                data-progress={stats.total > 0 ? (stats.completed / stats.total) * 100 : 0}
                            />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
