import React from "react";
import { Container, Row } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import BlogPost from "./BlogPost";

import BlogImage1 from "../assets/images/blog/blog-1-1.jpg";
import BlogImage2 from "../assets/images/blog/blog-1-2.jpg";
import BlogImage3 from "../assets/images/blog/blog-1-3.jpg";

const BlogHome = () => {
  return (
    <section className="blog-one" id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Blog"
          titleText={`Acompanhe meu blog`}
        />
        <Row>
          <BlogPost
            postImage={BlogImage1}
            postTitle="Post 1"
            postDate="01 Mai"
            postCommentCount="2 comentários"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage2}
            postTitle="Post 2"
            postDate="01 Mai"
            postCommentCount="2 comentários"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage3}
            postTitle="Post 3"
            postDate="01 Mai"
            postCommentCount="2 comentários"
            postLink="/blog-post"
          />
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
