/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
import './src/styles/tailwind.min.css';
import './static/main';
import React from 'react';
import { PickedPackageProvider } from './src/context/PickedPackageContext';

export const wrapRootElement = ({ element }) => (
  <PickedPackageProvider>{element}</PickedPackageProvider>
);
