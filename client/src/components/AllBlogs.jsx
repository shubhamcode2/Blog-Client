import axios from "axios";
import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";

const AllBlogs = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getAllPost() {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/post/get-all-posts?page=1&limit=5"
                );
                setAllPosts(response.data.posts);
                console.log(response.data);
            } catch (err) {
                setError("Error getting posts");
                console.error("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        }

        getAllPost();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Explore Blogs</h1>

            {loading && <p>Loading posts...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {allPosts.map((post) => (
                <PostCard
                    key={post._id}
                    id={post._id}
                    src={post.author?.profilePicture}
                    userName={post.author?.userName || post.author?.email}
                    createdAt={new Date(post.createdAt).toLocaleDateString()}
                    content={post.content}
                    postPicture={post.postPicture}
                />
            ))}
        </div>
    );
};

export default AllBlogs;
