import React from 'react';

const Main = props => {
  return (

    <nav>
      <div class="nav-wrapper">
        
        <a href="#" class="brand-logo right">
          <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
        </a>

        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li><a href="#">Search Web</a></li>
          <li><a href="#">Search Tutorials</a></li>
          <li><a href="#">My Definitions</a></li>
          <li><a href="#">My Library</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default Main