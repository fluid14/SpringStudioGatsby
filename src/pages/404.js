import * as React from 'react';
import Seo from '../components/seo';
import Theme from '../theme/Theme';

const NotFoundPage = () => (
  <Theme>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Theme>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
