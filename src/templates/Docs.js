import React from 'react';
import {useRouteData, useLocation} from 'react-static';
import {Link, Redirect} from 'react-router-dom';

import Nav from '../components/Nav';
import string from '../utils/string';

const Sidebar = ({docIndex}) => {
  const location = useLocation();
  return (<div className="br b--white-20">
    {docIndex.map(top => (<div className="mb3" key={string.slugify(top.title)}>
      <div className="mb1 ttu f7 white-50 ph2">{top.title}</div>
      <div>
        {top.content.map(c => {
          const pathname = `/docs/${string.slugify(top.title)}/${string.slugify(c.title)}`;
          const active = (location && location.pathname === pathname) || (window && window.location.pathname === pathname);
          return (<Link 
            key={string.slugify(c.title)} 
            to={pathname}
          >
            <div className={`pointer dim ph2 pv1 ${active ? "bg-white black" : ""}`}>
              {c.title}
            </div>
          </Link>);
        })}
      </div>
    </div>))}
  </div>);
};

const Section = ({doc}) => {
  return (<div className="ph3">
    <div className="f2">{doc.title}</div>
  </div>)
}


const Docs = () => {
  const {docIndex, doc} = useRouteData();
  const location = useLocation();

  if (!location || location && location.pathname === '/docs') {
    return (<Redirect to={`/docs/${string.slugify(docIndex[0].title)}/${string.slugify(docIndex[0].content[0].title)}`} />)
  }

  return (<div className="flex flex-column bg-black min-vh-100 white">
    <Nav showHome />
    <div className="flex">
      <Sidebar docIndex={docIndex} />
      <Section doc={doc} />
    </div>
  </div>)
};

export default Docs;