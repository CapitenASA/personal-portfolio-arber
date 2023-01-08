import React from 'react';
import { Helmet } from "react-helmet";
import { NavigationDots, SocialMedia } from '../components';
import './Wrapper.scss';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>

      <SocialMedia />

      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <Helmet><call-us-selector phonesystem-url="https://1187.3cx.cloud" party="personalpage"></call-us-selector>
            <script defer="defer" src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"></script>
          </Helmet>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;