package dao;

import models.Comments;

import java.util.List;

public interface CommentsDao {
    void add(Comments comments);
    List<Comments> getAll();
    Comments findById(int id);
}
