import React from "react";

const PostCard = ({ src, userName, createdAt, content, postPicture }) => {
    return (
        <div className="bg-white rounded-xl shadow p-4 mb-4 flex flex-col min-h-screen justify-center items-center ">
            {/* User Info */}
            <div className="flex items-center gap-4 mb-2">
                <img
                    src={src}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <a href={`/${userName}`} className="text-blue-600 font-medium hover:underline">
                        {userName}
                    </a>
                    <span className="text-sm text-gray-500">{createdAt}</span>
                </div>
            </div>

            {/* Content */}
            <div>
                <p className="text-gray-800 mb-2">{content}</p>
                {postPicture && (
                    <img
                        src={postPicture}
                        alt="Post"
                        className="h-[500px] object-cover rounded-lg "
                    />
                )}
            </div>
        </div>
    );
};

export default PostCard;
