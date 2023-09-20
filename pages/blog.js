import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import BlogPost from "../components/BlogPost";
import PostPagination from "../components/PostPagination";
import Footer from "../components/Footer";

import BlogImage1 from "../assets/images/blog/blog-1-1.jpg";
import BlogImage2 from "../assets/images/blog/blog-1-2.jpg";
import BlogImage3 from "../assets/images/blog/blog-1-3.jpg";
import BlogImage4 from "../assets/images/blog/blog-1-4.jpg";
import BlogImage5 from "../assets/images/blog/blog-1-5.jpg";
import BlogImage6 from "../assets/images/blog/blog-1-6.jpg";

const BlogPage = () => (
  <Layout pageTitle="Psicologo Leal">
    <Preloader />
    <Header btnClass="main-nav__btn-two" />
    <MobileMenu />
    <PageHeader pageHeading="Lista de Posts" />

    <section className="blog-grid">
      <Container>
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
          <BlogPost
            postImage={BlogImage4}
            postTitle="Post 4"
            postDate="01 Mai"
            postCommentCount="2 comentários"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage5}
            postTitle="Post 5"
            postDate="01 Mai"
            postCommentCount="2 comentários"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage6}
            postTitle="Post 6"
            postDate="01 Mai"
            postCommentCount="2 comentários"
            postLink="/blog-post"
          />
        </Row>
        <PostPagination />
      </Container>
    </section>

    <Footer />
  </Layout>
);

export default BlogPage;
