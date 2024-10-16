import React from 'react';
import ContentLoader from 'react-content-loader';

const WokSceleton = (props = {}) => (
  <ContentLoader speed={2} width={285} height={450} viewBox="0 0 285 450" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
    <circle cx="144" cy="142" r="117" />
    <rect x="182" y="345" rx="6" ry="6" width="85" height="40" />
    <rect x="23" y="345" rx="6" ry="6" width="140" height="40" />
    <rect x="17" y="406" rx="12" ry="12" width="265" height="40" />
    <rect x="21" y="297" rx="6" ry="6" width="245" height="26" />
  </ContentLoader>
);

export default WokSceleton;
