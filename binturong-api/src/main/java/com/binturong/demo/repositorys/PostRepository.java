package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post,Integer> {

    Post findAllById(Integer id);

    List<Post> findAllByUserId(Integer userId);

}
