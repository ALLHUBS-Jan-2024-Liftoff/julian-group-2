package com.binturong.demo.services;

import com.binturong.demo.entities.Comments;
import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;

import java.util.List;

public interface CommentService {

    public Comments saveComments(Comments comment);

    public List<Comments> getCommentsByPostId(Integer postId);
}
