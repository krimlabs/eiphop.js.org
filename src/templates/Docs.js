import React from 'react';
import {useRouteData, useLocation} from 'react-static';
import {Link, Redirect} from 'react-router-dom';

import Nav from '../components/Nav';
import string from '../utils/string';

import GettingStartedInstallation from '../docs/gettingStarted/Installation.md';
import GettingStartedMentalModel from '../docs/gettingStarted/MentalModel.md';
import GettingStartedSetupMain from '../docs/gettingStarted/SetupMain.md';
import GettingStartedSetupRenderer from '../docs/gettingStarted/SetupRenderer.md';
import UsageRequests from '../docs/usage/Requests.md';
import UsageNotifiers from '../docs/usage/Notifiers.md';

const Sidebar = ({docIndex}) => {
  const location = useLocation();
  return (<div className="br b--white-20 pt4" style={{height: '90vh'}}>
    {docIndex.map(top => (<div className="mb3" key={string.slugify(top.title)}>
      <div className="mb1 ttu f7 white-50 pl2 pr4">{top.title}</div>
      <div>
        {top.content.map(c => {
          const pathname = `/docs/${string.slugify(top.title)}/${string.slugify(c.title)}`;
          const active = (location && location.pathname === pathname) || (window && window.location.pathname === pathname);
          return (<Link 
            key={string.slugify(c.title)} 
            to={pathname}
          >
            <div className={`pointer dim pl2 pr4 pv1 ${active ? "bg-white black" : ""}`}>
              {c.title}
            </div>
          </Link>);
        })}
      </div>
    </div>))}
  </div>);
};

const docTitleToComponentMap = {
  'Installation': GettingStartedInstallation,
  'Mental Model': GettingStartedMentalModel,
  'Setup Main': GettingStartedSetupMain,
  'Setup Renderer': GettingStartedSetupRenderer,
  'Requests': UsageRequests,
  'Notifiers': UsageNotifiers,
};

const Section = ({doc}) => {
  const Component = docTitleToComponentMap[doc.title];
  if (!Component) return (<div className="ph4">Documentation for {doc.title} coming soon!</div>);

  return (<div className="ph4 flex-auto lh-copy overflow-y-scroll" style={{height: '90vh'}}>
    <div className="w-60 word-wrap">
      <Component />
    </div>
  </div>);
}


const Docs = () => {
  const {docIndex, doc} = useRouteData();
  const location = useLocation();

  if (!location || location && location.pathname === '/docs') {
    return (<Redirect to={`/docs/${string.slugify(docIndex[0].title)}/${string.slugify(docIndex[0].content[0].title)}`} />)
  }

  return (<div className="flex flex-column bg-black min-vh-100 white">
    <Nav showHome />
    <div className="cf">
      <div className="fl" style={{width: '16%'}}>
        <Sidebar docIndex={docIndex} />
      </div>
      <div className="fl" style={{width: `${100-16}%`}}>
        <Section doc={doc} />
      </div>
    </div>
  </div>)
};

export default Docs;