import { useState } from 'react';

import { ProfDisclosure } from '../../../Sections/Sections'
import { faComments, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import './Comments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Comment = ({ comment }) => {
    return (<div className="card comment">
        <div className="card-comment-top">
            <h4>{<FontAwesomeIcon icon={faChalkboardTeacher} />}{comment.author}</h4>
            <p>{comment.date}</p>
        </div>
        <div className="card-comment-bottom">
            <p>{comment.content}</p>
        </div>
    </div>);
}

const Comments = () => {
    const [comments, setComments] = useState([{ id: "", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias odit voluptatum sit nam. Eveniet quis quae nam, quisquam ex id reprehenderit repellendus libero amet? Officiis dolorem quis expedita itaque fugiat?", author: "Diego Heinen", date: "2020-01-01" }])
    return (
        <ProfDisclosure cname={"comments"} title={"Comments"} icon={faComments} toggle={false} >
            <div className={`disclosure-content comments `}>
                {comments.map((comment, i) => {
                    return <Comment key={i} comment={comment} />
                })}
            </div>
        </ProfDisclosure>);
}

export default Comments; 

