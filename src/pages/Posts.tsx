import React from "react";
import { BookOpen, AlertCircle, Loader2 } from "lucide-react";
import { usePosts } from "../hooks/usePosts";
import { PostCard } from "../components/posts/PostCard";
import { SearchBar } from "../components/posts/SearchBar";
import { Pagination } from "../components/posts/Pagination";
import { Button } from "../components/ui/button";

// Define the User type if not imported from elsewhere
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    // Add other fields as needed
};

// Define the Post type if not imported from elsewhere
type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
    // Add other fields as needed
};

const Posts: React.FC = () => {
    const {
        posts,
        users,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        filteredPosts,
    } = usePosts();

    const getUserById = (userId: number) => {
        return users.find((user: User) => user.id === userId);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">Loading posts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Failed to load posts
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
                    <Button onClick={() => window.location.reload()}>Try Again</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Blog Posts
                    </h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Explore a collection of posts from JSONPlaceholder API. Search through
                    posts and navigate with pagination.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    resultsCount={filteredPosts.length}
                />

                {posts.length === 0 && !loading ? (
                    <div className="text-center py-12">
                        <BookOpen className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                            No posts found
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {searchTerm
                            ? "Try adjusting your search terms."
                            : "No posts available."}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post: Post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                user={getUserById(post.userId)}
                            />
                            ))}
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Posts;
