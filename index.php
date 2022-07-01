<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jason Gamba</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="icon" href="images/meicon.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">@jasongamba</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon nav-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-center justify-content-end" id="navbarNavDropdown">
            <ul class="nav fs-4 justify-content-end d-block d-md-flex">
              <li class="nav-item text-center">
                <a class="nav-link tablinks text-dark" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link tablinks text-dark"  href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link tablinks text-dark"  href="#projects">Projects</a> <!--onclick="appearPage(event, 'projects')"-->
              </li>
            </ul>
          </div>
        </div>
    </nav>

      <main id="homepage" role="main">
        <div class="container pe-4 mt-5">
          <div class="row text-center">
            <div class="col-md-6">
              <img src="images/jasonc.png" class="img-fluid meicon rounded-circle" alt="">
            </div>
            <div class="col-md-6 d-md-block m-auto text-md-end text-dark">
              <p class="fs-3 mt-4">Hello there!👋</p>
              <h1 class="mt-md-0">I'm Jason Gamba</h1>
              <p class="mt-4 fs-3">Web Developer & Web Designer
                <!-- I'm an Adamson University graduate with a degree in Bachelor of Sc1ience in Information Technology. A web developer and web designer. I love working -->
              </p>
                      <div class="icons">
                      <a href="https://www.linkedin.com/in/jsngmb" target="_blank" class="fa fa-linkedin"></a>
                      <a href="https://twitter.com/jsngmb" target="_blank" class="fa fa-twitter"></a>
                      <a href="https://www.facebook.com/jasongamba14" target="_blank" class="fa fa-facebook"></a>
                      <a href="https://www.instagram.com/jsngmb/" target="_blank" class="fa fa-instagram"></a>
                      <a href="https://github.com/jsngmb" target="_blank" class="fa-brands fa-github"></a>
                      </div>
            </div>
          </div>

          <section class="about" id="about">
            <div class="row">
              <div class="col-md-6">
                <h2>Who am I?</h2>
                <p>A passionate web designer & web developer based in the Philippines. I am a graduate of Information Technology in Adamson University. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio aspernatur ut ab eveniet perspiciatis illum magni enim ducimus, non rem perferendis temporibus architecto. Reiciendis tenetur iste quidem eveniet nostrum?</p>
                <p><span class="fa fa-envelope-o"></span>jsngmb@gmail.com</p>
                <p><span class="fa fa-phone"></span>+639458570392</p>
              </div>
              <div class="col-md-6">
                <img src="images/prog.svg" class="img-fluid prog" alt="">
              </div>
            </div>
            
          </section>

          <section class="tech-stack">
            <div class="container">
              <h2 class="text-center text-md-start">Technology Stack</h2>
              <div class="d-flex mt-4 justify-content-center justify-content-md-start">
                <div class="t-card">
                  <img src="images/html5logo.png" class="img-fluid" alt="">
                </div>
                <div class="t-card">
                  <img src="images/css3logo.png" class="img-fluid" alt="">
                </div>
                <div class="t-card">
                  <img src="images/figmalogo.png" class="img-fluid" alt="">
                </div>
                <div class="t-card">
                  <img src="images/sasslogo.jpg.png" class="img-fluid" alt="">
                </div>
                <div class="t-card">
                  <img src="images/js.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>
          </section>
          
          <section class="certificate mt-5">
            <div class="container">
            <h2 class="text-center text-md-start">Certificates</h2>
              <div class="row mt-4">
                  <div class="col-6 col-lg-4 col-xl-2">
                      <a href="https://app.testdome.com/cert/1dd0497a0e7c4baa8f401f7dbca32b25" target="_blank" class="c-card img-fluid testdome-certificate-stamp gold m-auto"><span class="testdome-certificate-name">    
                        Jason Del Rosario Gamba</span>
                        <span class="testdome-certificate-test-name">HTML/CSS </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
                        <script>var stylesheet = "https://app.testdome.com/content/source/stylesheets/embed.css", link = document.createElement("link"); link.href = stylesheet, link.type = "text/css", link.rel = "stylesheet", link.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(link);</script>
                  </div>
                  <div class="col-6 col-lg-4 col-xl-2 mt-md-0">  
                      <a href="https://app.testdome.com/cert/43a49e4ec349431f9c8222be52b08a3a" target="_blank" class="c-card img-fluid testdome-certificate-stamp gold m-auto"><span class="testdome-certificate-name">    
                        Jason Del Rosario Gamba</span><span class="testdome-certificate-test-name">SQL </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
                      <script>var stylesheet = "https://app.testdome.com/content/source/stylesheets/embed.css", link = document.createElement("link"); link.href = stylesheet, link.type = "text/css", link.rel = "stylesheet", link.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(link);</script>
                  </div>
                  <div class="col-6 col-lg-4 col-xl-2 mt-3 mt-lg-0">  
                  
                      <a href="https://app.testdome.com/cert/255cef5a72c04ef1b82ebd173ab2de31" target="_blank" class="c-card img-fluid testdome-certificate-stamp silver m-auto"><span class="testdome-certificate-name">    
                        Jason Del Rosario Gamba</span>
                      <span class="testdome-certificate-test-name">HTML/CSS and Bootstrap</span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
                      <script>var stylesheet = "https://app.testdome.com/content/source/stylesheets/embed.css", link = document.createElement("link"); link.href = stylesheet, link.type = "text/css", link.rel = "stylesheet", link.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(link);</script>
                    
                  </div>
                  <div class="col-6 col-lg-4 col-xl-2 mt-3 mt-xl-0 text-center"> 
                      <a href="https://olympus1.mygreatlearning.com/course_certificate/EYDGPLIK" target="_blank"><img src="cert/designthinking.jpg" style="width: 11.5em;" class="c-card img-fluid m-auto rounded" alt=""></a>
                  </div>
                  <div class="col-6 col-lg-4 col-xl-2 mt-3 mt-xl-0 text-center">  
                      <a href="https://olympus1.mygreatlearning.com/course_certificate/SCXYJDIY" target="_blank"><img src="cert/frontenddev.jpg" style="width: 11.5em;" class="c-card img-fluid m-auto rounded" alt=""></a>
                  </div>
                  <div class="col-6 col-lg-4 col-xl-2 mt-3 mt-xl-0 text-center">  
                      <a href="https://olympus1.mygreatlearning.com/course_certificate/SKMKDPYV" target="_blank"><img src="cert/networksec.jpg" style="width: 11.5em;" class="c-card img-fluid m-auto rounded" alt=""></a>
                  </div>
                </div>
              </div>
          </section>

          <section class="projects mt-5" id="projects">
            
            <div class="container mt-4">
              <h2 class="text-center text-md-start">Projects</h2>
              <div class="row">
                <div class="col-lg-6 mt-3 mb-md-5">
                  <div class="card border-0 bg-light text-white justify-content-center">
                    <div class="overlay">
                    </div>
                    <img src="images/jgclothing.svg" class="card-img img-fluid rounded" style="object-fit: cover;" height="400" alt="...">
                    <div class="card-img-overlay">
                      <div class="card-title align-items-center">
                        <h2 class="card-title fw-bold">JG Clothing Co.</h2>
                        <p>E-commerce website</p>
                      </div>
                      <i class="card-text">HTML, CSS, Bootstrap, Javascript</i>
                      <div class="row view-btn text-center justify-content-center align-items-center" style="height: 40px;">
                      <a href="Portfolio/JGClothing/homepage/index.html" target="_blank" class="btn btn-primary w-50">View Page</a>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="col-lg-6 mt-3 mb-5">
                  <div class="card border-0 bg-light text-white justify-content-center">
                    <div class="overlay">
                    </div>
                    <img src="images/valgambalogo.svg" class="card-img img-fluid rounded" style="object-fit: cover;" height="400" alt="...">
                    <div class="card-img-overlay">
                      <div class="card-title align-items-center">
                        <h2 class="card-title fw-bold">Val Gamba</h2>
                        <p>Tattoo shop website</p>
                      </div>
                      <i class="card-text">HTML, CSS, Bootstrap, Javascript</i>
                      <div class="row view-btn text-center justify-content-center align-items-center" style="height: 40px;">
                      <a href="https://valgamba.000webhostapp.com/" target="_blank" class="btn btn-primary w-50">View Page</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div class="container text-center text-md-start d-md-flex align-items-center py-3">
          <a href="#" class="text-decoration-none">@jasongamba</a>
          <div class="social">
              <a href="https://www.linkedin.com/in/jsngmb" target="_blank" class="fa fa-linkedin"></a>
              <a href="https://twitter.com/jsngmb" target="_blank" class="fa fa-twitter"></a>
              <a href="https://www.facebook.com/jasongamba14" target="_blank" class="fa fa-facebook"></a>
              <a href="https://www.instagram.com/jsngmb/" target="_blank" class="fa fa-instagram"></a>
              <a href="https://github.com/jsngmb" target="_blank" class="fa-brands fa-github"></a>
          </div>
          
        </div>
      </footer>
      <script src="https://kit.fontawesome.com/c2b020b549.js" crossorigin="anonymous"></script>
      <!-- <script>
        function appearPage(evt, pageName) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                  tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                  tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(pageName).style.display = "block";
                evt.currentTarget.className += " active";
              }
      </script> -->
   
</body>
</html>