import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header className="topbar" style={{ zIndex: 5 }}>
      <a className="brand" href="./" aria-label="Astra Terra home" onClick={e => e.preventDefault()}>
        <span className="brand-mark" aria-hidden="true"></span>
        <span>
          <strong>Astra Terra</strong>
          <small>Orbital command view</small>
        </span>
      </a>
      <form id="search-form" className="search" autoComplete="off" onSubmit={e => e.preventDefault()}>
        <span aria-hidden="true">⌕</span>
        <input id="search-input" type="search" placeholder="Search city" aria-label="Search city" />
      </form>
      <div className="actions">
        <button className="icon-btn" type="button" aria-label="Reset to globe view">↺</button>
        <button className="icon-btn" type="button" aria-label="Capture screenshot">▣</button>
      </div>
    </header>
  );
};

export default Topbar;
