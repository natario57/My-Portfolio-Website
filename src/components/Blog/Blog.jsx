import React from "react";
import './blog.css'
import First from "../../assets/first-blog.png";
import Second from "../../assets/second-blog.png";
import Third from "../../assets/third-blog.png"


const Blog = () => {
  return (
    <section id="blog">

    <div class="blog-top">
      <h2 class="orange-text">News Blog</h2>
      <h1>Our Recent Articles</h1>
    </div>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card blog-design">
          <div class="blog-img">
            <img src={First} class="blog-img-top" alt="..."/>
          </div>
          <div class="blog-date">
            <figure>16</figure>
            <p class="month">Aug</p>
          </div>
          <div class="card-body blog-body">
            <h3 class="blog-title">Spacing guide for designers</h3>
            <p class="blog-text">Spaces are the horizontal and vertical distances between two components or the viewpoints of the screen. All spaces are set to an increment of 8 (8, 16, 24, 32 … 128).....</p>
            <a href="https://uxplanet.org/spacing-guide-for-designers-5bd140afe52a" class="blog-link" target='_blank'>Read More <i class="fa-solid fa-angle-right fa-sm"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card blog-design">
          <div class="blog-img">
            <img src={Second} class="blog-img-top" alt="..."/>
          </div>
          <div class="blog-date">
            <figure>09</figure>
            <p class="month">Jul</p>
          </div>
          <div class="card-body blog-body">
            <h3 class="blog-title">Become A Good Developer</h3>
            <p class="blog-text">Web design refers to the design of webs that are displayed on the internet. It most usually refers to the user experience aspects of website development.....</p>
            <a href="https://typescale.com/" class="blog-link" target='_blank'>Read More <i class="fa-solid fa-angle-right fa-sm"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card blog-design">
          <div class="blog-img">
            <img src={Third} class="blog-img-top" alt="..."/>
          </div>
          <div class="blog-date">
            <figure>22</figure>
            <p class="month">June</p>
          </div>
          <div class="card-body blog-body">
            <h3 class="blog-title">How To Find Art Inspiration</h3>
            <p class="blog-text">Art inspiration is everywhere, right? At least that's what they say. But when you're sitting down to make your own work, it can feel hard to know how to find inspiration for art.....</p>
            <a href="https://www.skillshare.com/en/blog/art-inspiration-and-where-to-find-it/" class="blog-link" target='_blank'>Read More <i class="fa-solid fa-angle-right fa-sm"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Blog