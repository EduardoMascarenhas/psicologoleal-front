import React from "react";

import SidebarPostImage1 from '../assets/images/blog/lp-1-1.jpg';
import SidebarPostImage2 from '../assets/images/blog/lp-1-2.jpg';
import SidebarPostImage3 from '../assets/images/blog/lp-1-3.jpg';

const BlogSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <form action="#" className="sidebar__search-form">
          <input type="text" name="search" placeholder="Buscar..." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Últimos Posts</h3>
        <div className="sidebar__post-wrap">
          <div className="sidebar__post__single">
            <div className="sidebar__post-image">
              <div className="inner-block">
                <img src={SidebarPostImage1} alt="Awesome Image" />
              </div>
            </div>
            <div className="sidebar__post-content">
              <h4 className="sidebar__post-title">
                <a href="#">Post 1</a>
              </h4>
            </div>
          </div>
          <div className="sidebar__post__single">
            <div className="sidebar__post-image">
              <div className="inner-block">
                <img src={SidebarPostImage2} alt="Awesome Image" />
              </div>
            </div>
            <div className="sidebar__post-content">
              <h4 className="sidebar__post-title">
                <a href="#">Post 2</a>
              </h4>
            </div>
          </div>
          <div className="sidebar__post__single">
            <div className="sidebar__post-image">
              <div className="inner-block">
                <img src={SidebarPostImage3} alt="Awesome Image" />
              </div>
            </div>
            <div className="sidebar__post-content">
              <h4 className="sidebar__post-title">
                <a href="#">Post 3</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categorias</h3>
        <ul className="sidebar__category-list">
          <li className="sidebar__category-list-item">
            <a href="#">SaúdeMental</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#">Autoconhecimento</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#">Terapia</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#">Psicologia</a>
          </li>
        </ul>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags</h3>
        <ul className="sidebar__tags-list">
          <li className="sidebar__tags-list-item">
            <a href="#">SaúdeMental,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#">Autoconhecimento,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#">Terapia,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#">Psicologia,</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
