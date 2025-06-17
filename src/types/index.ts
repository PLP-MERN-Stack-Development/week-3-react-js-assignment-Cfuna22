export interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    priority: 'low' | 'medium' | 'high';
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export type FilterType = 'all' | 'active' | 'completed';
