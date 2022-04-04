import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <li key={page}>
          <a href={'/' + page}>
            {page}
          </a>
        </li>
        
      )
    });

    return <ul>{navLinks}</ul>;
  }
}

