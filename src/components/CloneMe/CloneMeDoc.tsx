import React from 'react';
import { CloneMeProps } from './type';

export const CloneMeDoc: React.VFC<CloneMeProps> = () => {
  return (
    <div>
      <h1>Replacing DocsPage with a custom component</h1>
      <p>
        The Docs page can be customized with your own custom content written as
        a React Component.
      </p>
      <p>Write your own code here👇</p>
    </div>
  );
};
