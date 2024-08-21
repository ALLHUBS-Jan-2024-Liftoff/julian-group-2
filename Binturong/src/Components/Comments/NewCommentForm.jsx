import React, { useState } from 'react';


export const NewCommentForm = ({saveComment}) => {
    
        //sets states and gives starting variables
        const [text, setText] = useState('')
        const [file, setFile] = useState('')
    
    
        //Submits Posts to SQL Database
        const SaveComment =(e) => {
    if (title.length >= 3 && title.length <= 50 && text !="" && text.length <= 255){
            e.preventDefault();
    
            saveComment(text,file)
            setText('');
            setFile('');
            
        }
        else{
            alert("title must be between 3 and 50 characters and text 255 max.");
        }
    }
    
        return (    
                    <div>
                        <form id="post-form"> 
    
                            <textarea id="posttextbox"
                                name="posttext"
                                value={text}
                                rows="5" cols="50"
                                onChange={(e) => { setText(e.target.value) }}>
                                Text Goes here
                            </textarea><br />
    
                            <label for="postfile">Upload files
                                <input type="file"
                                    id="postfile"
                                    name="postfile"
                                    value={file}
                                    onChange={(e) => { setFile(e.target.value) }}>
                                </input>
                            </label>
    
                            <button onClick={SaveComment}>Post</button>
                        </form>
                        </div>
        )
    }
    






}