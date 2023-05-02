'use strict';

class UserNavbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"
        ><img
          style="width: 100px; height: 100px"
          src="img/moose-logo.jpeg"
          alt="MooseLogo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#NavbarHeader"
        aria-controls="NavbarHeader"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="NavbarHeader">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          <a class="nav-link" href="#">Link1</a>
          <a class="nav-link" href="#">Link2</a>
          <a class="nav-link" href="#">Contact Me</a>
        </div>
      </div>
    </div>
  </nav>
    `;
  }
}

customElements.define('usernavbar-component', UserNavbar);

class UserFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer class="white-section mt-2" id="footer">
      <div class="container-fluid">
        <div class="d-flex justify-content-center fs-3">
        <a href=""><i class="social-icon fab fa-facebook-f mx-3"></i></a>
        <a href=""><i class="social-icon fab fa-twitter me-3"></i></a>
        <a href=""><i class="social-icon fab fa-instagram me-3"></i></a>
        <a href=""><i class="social-icon fas fa-envelope me-3"></i></a>
        </div>
        <p class="text-center">© Copyright 2023 MOOSE</p>
      </div>
    </footer>
      `;
  }
}

customElements.define('userfooter-component', UserFooter);

class UserCarousel extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div id="carousel-Header" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel-Header"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel-Header"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel-Header"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="img/castle.jpeg"
          class="d-block w-100 img-thumbnail"
          style="height: 50vh"
          alt="Castle"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="img/lake1.jpeg"
          class="d-block w-100 img-thumbnail"
          style="height: 50vh"
          alt="lake"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="img/japan-1.jpeg"
          class="d-block w-100 img-thumbnail"
          style="height: 50vh"
          alt="Japan"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel-Header"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel-Header"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
        `;
  }
}

customElements.define('usercarousel-component', UserCarousel);
