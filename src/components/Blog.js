import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { fetchPostsByCategory } from "../actions/postAction";

const Blog = ({ title }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsByCategory(title));
  }, [dispatch, title]);

  const { posts } = useSelector((state) => state.posts);
  return (
    <>
      <section className="blog-area pt-60 pb-60">
        <div className="container">
          <div className="author-inner-wrap blog-inner-wrap">
            <div className="row justify-content-center">
              <div className="section-title-wrap mb-30">
                <div className="section-title">
                  <h2 className="title">{title}</h2>
                </div>
                <div className="view-all-btn">
                  <a href="blog.html" className="link-btn">
                    View All
                    <span className="svg-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z"
                          fill="currentColor"
                        />
                        <path
                          d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="section-title-line"></div>
              </div>
              <div className="category-content">
                <div className="row">
                  {posts.map((post) => (
                    <div key={post.id} className="col-md-4 mb-4">
                      <div className="col">
                        <Link to={`/blog-details/${post.id}`}>
                          <img
                            src={"http://localhost:8000/images/" + post.img}
                            alt={post.title}
                          />
                        </Link>
                      </div>
                      <div className="horizontal-post-content-four col">
                        <a
                          href={`blog/${post.id}`}
                          className="post-tag-four text-lines-4"
                        >
                          {post.title}
                        </a>
                        <div className="blog-post-meta">
                          <ul className="list-wrap">
                            <li>
                              <FontAwesomeIcon icon="fa-regular fa-calendar" />{" "}
                              {post.created_at}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
