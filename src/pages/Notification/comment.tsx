import React from "react";
import styles from "./Comment.module.css";


type CommentProps = {
    userImage: string;
    commentTitle: string;
    commentDescription: string;
    dateOfComment: string;
};

const Comment: React.FC<CommentProps> = ({ userImage, commentTitle, commentDescription, dateOfComment }) => {
    return (
        <div className={styles.commentContainer}>
            <img src={userImage} alt="User" className={styles.userImage} />
            <div className={styles.commentDetails}>
                <div className={styles.commentTitle}>{commentTitle}</div>
                <div className={styles.commentDescription}>{commentDescription}</div>
                <div className={styles.commentDate}>{dateOfComment}</div>
            </div>
        </div>
    );
};

export default Comment;
