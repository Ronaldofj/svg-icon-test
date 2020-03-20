import "./styles/index.scss";

import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

// Components
import IconSVG from './components/IconSVG';

// Stories
import * as Stories from './stories';

SyntaxHighlighter.registerLanguage('jsx', jsx)

function App() {
  return (
    <div className="container">
      <div className="content">
        <p className="content__title">svg icons</p>
        <div className="content__icons-wrapper">
          <IconSVG icon="like" width={100} height={100} fill=""></IconSVG>
          <IconSVG icon="like" width={80} height={80} fill=""></IconSVG>
          <IconSVG icon="like" width={60} height={60} fill=""></IconSVG>
          <IconSVG icon="like" width={40} height={40} fill=""></IconSVG>
          <IconSVG icon="like" width={20} height={20} fill=""></IconSVG>
        </div>
        <p className="content__title">imported component</p>
        <SyntaxHighlighter style={prism}>
          {Stories.ImportIconSVG}
        </SyntaxHighlighter>
        <p className="content__title">pure component</p>
        <SyntaxHighlighter style={prism}>
          {Stories.IconSVG}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
