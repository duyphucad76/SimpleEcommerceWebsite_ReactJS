import React from "react";
import Post from "../../components/Post";
import "./Blog.css";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <div className="wrapper-post">
      <div className="container pt-2">
        <div className="breadcrumb-list">
          Home {`>`} <span style={{ color: "#abc373" }}>News</span>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-3 bg-light">
            <div className="search-widget mb-5 pt-3">
              <div className="sidebar-widget-title mb-2">Search</div>
              <div className="search-form p-2 border">
                <form action="">
                  <input
                    type="text"
                    name="txtsearch"
                    placeholder="Search our store"
                    className="border-0"
                  />{" "}
                  |
                  <button type="submit" className="border-0">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="custom-menu mb-5">
              <div className="sidebar-widget-title mb-2">Custom Menu</div>
              <ul class="px-0">
                <li class="">
                  <Link to="#">About Us</Link>
                </li>

                <li class="">
                  <Link to="#">Team Member</Link>
                </li>

                <li class="">
                  <Link to="#">Specials</Link>
                </li>

                <li class="">
                  <Link to="#">Career</Link>
                </li>

                <li class="">
                  <Link to="#">Best sellers</Link>
                </li>

                <li class="">
                  <Link to="#">Contact us</Link>
                </li>

                <li class="">
                  <Link to="#">Our stores</Link>
                </li>
              </ul>
            </div>
            <div className="recent-post mb-5">
              <div className="sidebar-widget-title mb-2">Recent Post</div>
              <div className="row">
                <div className="col-4">
                  <img src="./public/post/post-1.webp" alt="" width="100%" />
                </div>
                <div className="col-8 px-0">
                  <Link to="#" className="recent-post-title">
                    Ohio Tropics Hous...
                  </Link>
                  <br />
                  <span className="recent-post-meta">Oct 13, 2019</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-4">
                  <img src="./public/post/post-2.webp" alt="" width="100%" />
                </div>
                <div className="col-8 px-0">
                  <Link to="#" className="recent-post-title">
                    Ohio Tropics Hous...
                  </Link>
                  <br />
                  <span className="recent-post-meta">Oct 13, 2019</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-4">
                  <img src="./public/post/post-3.webp" alt="" width="100%" />
                </div>
                <div className="col-8 px-0">
                  <Link to="#" className="recent-post-title">
                    Ohio Tropics Hous...
                  </Link>
                  <br />
                  <span className="recent-post-meta">Oct 13, 2019</span>
                </div>
              </div>
            </div>
            <div className="archive mb-5">
              <div className="sidebar-widget-title mb-2">Archive</div>
              <ul class="archive-sidebar px-0">
                <li>
                  <a
                    href="/blogs/news/ohio-tropics-houseplant-nice-collection"
                    title=""
                  >
                    Ohio Tropics Houseplant | Nice Collection
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/news/best-indoor-plant-care-tips-the-house-plant"
                    title=""
                  >
                    Best Indoor Plant Care Tips - The House Plant
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/news/plants-are-the-strangest-people"
                    title=""
                  >
                    Plants are the Strangest People
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/news/epic-gardening-houseplants-collection"
                    title=""
                  >
                    Epic Gardening | Houseplants Collection
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/news/guide-to-house-plants-tips-for-growing-plants-indoors"
                    title=""
                  >
                    Guide to House Plants - Tips for Growing Plants Indoors
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/news/the-houseplant-guru-collection-2020"
                    title=""
                  >
                    The Houseplant Guru | Collection 2020
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/news/on-the-ledge-plant-and-flower-podcast"
                    title=""
                  >
                    On The Ledge | Plant and Flower Podcast
                  </a>
                </li>
              </ul>
            </div>
            <div className="tags-widget">
              <button className="tags">Land</button>
              <button className="tags">Plant</button>
              <button className="tags">Roof</button>
              <br />
              <button className="tags">Small</button>
              <button className="tags">Tree</button>
              <button className="tags">Vesoz</button>
            </div>
          </div>
          <div className="col-9">
            <Post
              src="./public/post/post-1.webp"
              title="Ohio Tropics Houseplant | Nice Collection"
            ></Post>
            <Post
              src="./public/post/post-2.webp"
              title="Best Indoor Plant Care Tips - The House Plant"
            ></Post>
            <Post
              src="./public/post/post-3.webp"
              title="Plants are the Strangest People"
            ></Post>
            <Post
              src="./public/post/post-4.webp"
              title="Epic Gardening | Houseplants Collection"
            ></Post>
          </div>
        </div>
      </div>
    </div>
  );
}
