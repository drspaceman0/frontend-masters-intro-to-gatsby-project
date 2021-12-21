import * as React from 'react'; 
import { Seo } from '../components/seo.js';

import { Link, useStaticQuery, graphql } from 'gatsby';
 export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const meta = data?.site?.siteMetadata ?? {};
   return (
    <>
    <Seo />
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
       <main>
         <h1>Hello Frontend Masters!</h1>
         <Link to="/about">About this site</Link>
       </main>
    </>
   );
 }