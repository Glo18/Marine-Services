package dao;

import models.Comments;

import java.sql.Connection;
import java.util.List;

public class Sql2oCommentsDao {

    private final Sql2o sql2o;
    public Sql2oCommentsDao(Sql2o sql2o) {
        this.sql2o=sql2o;
    }
    @Override
    public void add(Comments comment) {
        String sql = "INSERT INTO comments (comment) VALUES (:comment)";
        try (Connection con = sql2o.open()) {
            int id = (int) con.createQuery(sql, true)
                    .bind(comment)
                    .executeUpdate()
                    .getKey();
            comment.setId(id);
        } catch (Sql2oException ex) {
            System.out.println(ex);
        }
    }

    @Override
    public List<Comments> getAll() {
        String sql = "SELECT * FROM comments";
        try(Connection con = sql2o.open()) {
            return con.createQuery(sql).executeAndFetch(Comments.class);
        }
    }

    @Override
    public Comments findById(int id) {
        try (Connection con = sql2o.open()) {
            return con.createQuery("SELECT * FROM comments WHERE id = :id")
                    .addParameter("id", id)
                    .executeAndFetchFirst(Comments.class);
        }
    }
}
