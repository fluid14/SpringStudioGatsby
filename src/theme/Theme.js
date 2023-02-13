import React from 'react';
import Navbar from '../components/layout/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '../components/layout/Footer/Footer';
import Seo from '../components/seo';

const Theme = ({ children }) => (
  <>
    <Helmet
      htmlAttributes={{
        lang: 'pl',
      }}
    >
      <Seo />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.cdnfonts.com/css/general-sans?styles=135312,135310,135313,135303"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"
        rel="stylesheet"
      />
      <body className="antialiased bg-body text-body font-body" />
    </Helmet>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Theme;
