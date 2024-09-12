import { IndividualComment } from "./IndividualComment";
import React from "react";


export const AllComments = ({comments, updateComment,deleteComment}) => {
    return(

        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Text</th>
            <th scope="col">File</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <>
            <IndividualComment key={comment.id} comment={comment}  updateComment={updateComment} deleteComment={deleteComment}/>
            </>
          ))}
        </tbody>
      </table>





    );
};