import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "../../Style/cards.css";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ data }) => {
  function Copy() {
    navigator.clipboard.writeText(document.URL);
  }
  const history = useNavigate();
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "1em",
        border: "1px solid #ff5722",
        backgroundColor: "#ff5722",
        cursor: "pointer",
      }}
      className="blogCards"
      onClick={() =>
        history({
          pathname: `/blog/${data.blogTitle}`,
        })
      }
    >
      <CardMedia
        component="img"
        sx={{
          height: "50%",
        }}
        image={`${data.blogImage}`}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1, height: "30%" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ fontSize: "1.6em", fontWeight: "600", color: "#fff" }}
        >
          {`${data.blogTitle}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexGrow: 1, height: "10%" }}>
        <Button size="small" style={{ color: "#fff" }}>
          View
        </Button>
        <Button size="small" style={{ color: "#fff" }} onClick={() => Copy()}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
