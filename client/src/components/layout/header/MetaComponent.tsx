import Head from 'next/head';
import React, { ReactElement } from 'react';

export const MetaComponent = (): ReactElement => {
  return (
    <Head>
      <title>몰랑</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
