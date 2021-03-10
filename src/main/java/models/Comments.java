package models;

import java.util.Objects;

public class Comments {

    private int id;
    private String comment;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Comments(String comment) {
        this.comment = comment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comments comment = (Comments) o;
        return id == comment.id &&
                comment.equals(comment.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, comment);
    }
}
