import React from 'react'
import './Dev.css';
import Feature1 from './Feature1';
import Feature2 from './Feature2';

export default function Dev() {
  return (
    <div className='dev_branch'>
        <h1>Dev branch</h1>
        <p>This is content of dev branch:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque ratione officia. Accusantium sed soluta debitis placeat earum ipsam reiciendis! Dolor iure ullam assumenda a nisi autem cupiditate eum minus.
        Blanditiis, beatae soluta perferendis aperiam doloremque error quod nesciunt. Debitis itaque dolore sequi illo. Esse ipsa totam, quidem eius ad possimus odio, reiciendis aliquid nobis consectetur animi accusantium, temporibus sit?</p>
        <Feature1 />
        <Feature2 />
        <p>Version 1.3: do the squash commit</p>
    </div>
  )
}
