// src/pages/CreatePost.jsx
import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
    const [content, setContent] = useState("");
    const [postPicture, setPostPicture] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("content", content);
        if (postPicture) formData.append("postPicture", postPicture);

        try {
            await axios.post("http://localhost:3000/api/post/create", formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            alert("Post created!");
            setContent("");
            setPostPicture(null);
        } catch (err) {
            console.error("Post creation failed", err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">✍️ Create New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write something..."
                    className="w-full p-2 border rounded"
                    rows="5"
                    required
                ></textarea>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPostPicture(e.target.files[0])}
                    className="block"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Post
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
