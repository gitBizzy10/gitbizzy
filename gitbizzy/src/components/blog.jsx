import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Sept 1, 2019 </small> | <small> Moved to NYC </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Dillon Puts Photos</a></h3>
							<p>DillonDillonDillonDillonDillonDillonDillonDillonDillonDillonDillonDillon</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Sept 2, 2019 </small> | <small> Moved to NYC Again </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">DillonDillonDillonDillonDillonDillon</a></h3>
							<p>DillonDillonDillonDillonDillonDillon</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Sept 3, 2019 </small> | <small> I Write </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Make website from scratch</a></h3>
							<p>DillonDillonDillonDillonDillonDillon</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
