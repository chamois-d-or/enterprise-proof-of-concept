import "../styles/globals.css";
import React from 'react';
import NextApp from 'next/app';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { 
  repositoryName,
  linkResolver 
} from './../prismicConfiguration';

export default class MyApp extends NextApp {

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <PrismicPreview repositoryName={repositoryName}>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href} {...props}>
              <a>{children}</a>
            </Link>
          )}
        >
          <Component {...pageProps} />
        </PrismicProvider>
      </PrismicPreview>
    )
  }
}