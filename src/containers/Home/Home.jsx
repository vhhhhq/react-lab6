import React from 'react';
import './Home.scss';
import {Button} from 'antd';

import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <div>
            <Button className='btn primary' type="primary">Button</Button>
            <Button className='btn default'>Default Button</Button>
            <Button className='btn dashed' type="dashed">Dashed Button</Button>
            <Button className='btn text' type="text">Text Button</Button>
            <Button className='btn link' type="link">Link Button</Button>
        </div>
    </div>
  )
}

export default Home
