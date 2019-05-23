import React from 'react';
import Image from './Components/Image';
import Text from './Components/Text';
import Link from './Components/Link';
import Head from './Components/Head';

import './App.css';

export default () => (
    <div className="App">
      <Head>
        <Image />
        <Text />
        <Link />       
      </Head>
    </div>
)

