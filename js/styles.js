html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;
}


<!-- linea -->
hr {
  border-color: #F05F40;
  border-width: 3px;
  max-width: 50px;
}

hr.light {
  border-color: white;
}


a {
  -webkit-transition: all 0.35s;
  -moz-transition: all 0.35s;
  transition: all 0.35s;
  color:  #000000;
}

a:hover,
a:focus {
  color: #eb3812;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;color: #339966;
}


p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.bg-primary {
  background-color: #F05F40;
}
.bg-dark {
  background-color: #222222;
  color: white;
}
.text-faded {
  color: rgba(255, 255, 255, 0.7);
}
section {
  padding: 100px 0;
}
aside {
  padding: 50px 0;
}
.no-padding {
  padding: 0;
}
.navbar-default {
  background-color: white;
  border-color: rgba(34, 34, 34, 0.05);
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  -webkit-transition: all 0.35s;
  -moz-transition: all 0.35s;
  transition: all 0.35s;
}
.navbar-default .navbar-header .navbar-brand {
  color: #F05F40;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}
.navbar-default .navbar-header .navbar-brand:hover,
.navbar-default .navbar-header .navbar-brand:focus {
  color: #eb3812;
}
.navbar-default .navbar-header .navbar-toggle {
  font-weight: 700;
  font-size: 12px;
  color: #222222;
  text-transform: uppercase;
}
.navbar-default .nav > li > a,
.navbar-default .nav > li > a:focus {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  color: #222222;
}
.navbar-default .nav > li > a:hover,
.navbar-default .nav > li > a:focus:hover {
  color: #F05F40;
}
.navbar-default .nav > li.active > a,
.navbar-default .nav > li.active > a:focus {
  color: #F05F40 !important;
  background-color: transparent;
}
.navbar-default .nav > li.active > a:hover,
.navbar-default .nav > li.active > a:focus:hover {
  background-color: transparent;
}
@media  (min-width: @screen-sm-min) (min-width: @screen-md-min)  (min-width: @screen-lg-min)  {
  .navbar-default {
    background-color: transparent;
    border-color: rgba(255, 255, 255, 0.3);
  }
  .navbar-default .navbar-header .navbar-brand {
    color: rgba(255, 255, 255, 0.7);
  }
  .navbar-default .navbar-header .navbar-brand:hover,
  .navbar-default .navbar-header .navbar-brand:focus {
    color: white;
  }
  .navbar-default .nav > li > a,
  .navbar-default .nav > li > a:focus {
    color: rgba(255, 255, 255, 0.7);
  }
  .navbar-default .nav > li > a:hover,
  .navbar-default .nav > li > a:focus:hover {
    color: white;
  }
  .navbar-default.affix {
    background-color: white;
    border-color: rgba(34, 34, 34, 0.05);
  }
  .navbar-default.affix .navbar-header .navbar-brand {
    color: #F05F40;
    font-size: 14px;
  }
  .navbar-default.affix .navbar-header .navbar-brand:hover,
  .navbar-default.affix .navbar-header .navbar-brand:focus {
    color: #eb3812;
  }
  .navbar-default.affix .nav > li > a,
  .navbar-default.affix .nav > li > a:focus {
    color: #222222;
  }
  .navbar-default.affix .nav > li > a:hover,
  .navbar-default.affix .nav > li > a:focus:hover {
    color: #F05F40;
  }
  }
