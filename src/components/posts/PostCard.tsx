import React from 'react';
import { User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { Post, User as UserType } from "../../types";

interface PostCardProps {
    post: Post;
    user?: UserType;
}

export const PostCard: React.FC<PostCardProps> = ({ post, user }) => {
    return (
        <Card className="h-full hover:shadow-md transition-shadow" >
            <CardHeader>
                <CardTitle className="line-clamp-2">
                    {post.title}
                </CardTitle>
                { user && (
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className='h-4 w-4' />
                        <span>{user.name}</span>
                        <span>.</span>
                        <span>{user.email}</span>
                    </div>
                )}
            </CardHeader>

            <CardContent >
                < p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {post.body}
                </p>
            </CardContent>
        </Card>
    );
};