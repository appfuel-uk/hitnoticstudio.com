import React from 'react';

export default ({ contact }) => (
  <div className="eloisa_fn_share_popup">
    <div className="eloisa_fn_share_popup_closer">
      <span className="eloisa_fn_widget_menu_closer">
        <a href="#" />
        <span />
        <span />
      </span>
    </div>
    <div className="eloisa_fn_share_wrap">
      <div className="social_icons">
        <ul>
          <li>
            <a href={contact.twitter}>
              <i className="xcon-twitter" />
            </a>
            <div className="name twitter">
              <span>Twitter</span>
              <div className="effect" />
            </div>
          </li>
          <li>
            <a href={contact.instagram}>
              <i className="xcon-instagram" />
            </a>
            <div className="name instagram">
              <span>Instagram</span>
              <div className="effect" />
            </div>
          </li>
          <li>
            <a href={contact.linkedin}>
              <i className="xcon-linkedin" />
            </a>
            <div className="name linkedin">
              <span>Linkedin</span>
              <div className="effect" />
            </div>
          </li>
          <li>
            <a href={contact.github}>
              <i className="xcon-github" />
            </a>
            <div className="name github">
              <span>Github</span>
              <div className="effect" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
