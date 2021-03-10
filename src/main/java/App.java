import dao.Sql2oCommentsDao;
import exceptions.ApiException;
import models.Comments;

import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

public class App {


    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4567; //return default port if heroku-port isn't set (i.e. on localhost)
    }

    public static void main(String[] args) {
        port(getHerokuAssignedPort());
        Sql2oCommentsDao commentDao = new Sql2oCommentsDao(DB.sql2o);
        Connection conn = DB.sql2o.open();
        Gson gson = new Gson();


        post("/comments/new", "application/json", (req, res) -> {
            Comments comments = gson.fromJson(req.body(), Comments.class);
            commentDao.add(comment);
            res.status(400);
            res.type("application/json");
            return gson.toJson(comment);
        });

        get("/comments", "application/json", (req, res) -> { //accept a request in format JSON from an app
            res.type("application/json");
            if (commentDao.getAll().size() == 0){
                return "{\"message\":\"I'm sorry, but no comments yet added.\"}";
            } else{
                return gson.toJson(commentDao.getAll());//send it back to be displayed
            }
        });

        get("/comments/:id", "application/json", (req, res) -> {
            int commentId = Integer.parseInt(req.params("id"));
            Comments commentToFind = commentDao.findById(commentId);
            if (commentToFind == null){
                throw new ApiException(404, String.format("No user with the id: \"%s\" exists", req.params("id")));
            }
            return gson.toJson(commentToFind);
        });
        //FILTERS
        exception(ApiException.class, (exc, req, res) -> {
            ApiException err = (ApiException) exc;
            Map<String, Object> jsonMap = new HashMap<>();
            jsonMap.put("status", err.getStatusCode());
            jsonMap.put("errorMessage", err.getMessage());
            res.type("application/json"); //after does not run in case of an exception.
            res.status(err.getStatusCode()); //set the status
            res.body(gson.toJson(jsonMap));  //set the output.
        });
        after((req, res) -> {
            res.type("application/json");
        });

    }
}
