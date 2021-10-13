// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'antd';
// import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useMeta } from '../../contexts';
import { Image } from 'antd';
import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
export const SetupView = () => {
  // const { store } = useMeta();
  // const history = useHistory();
  // const wallet = useWallet();
  // const { setVisible } = useWalletModal();
  // const connect = useCallback(
  //   () => (wallet.wallet ? wallet.connect().catch() : setVisible(true)),
  //   [wallet.wallet, wallet.connect, setVisible],
  // );

  return (
    <>
      {/* <!-- About Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-white">About the Project</h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-line"></div>
      </div>


      <Row>
      <Col flex="1 0 25%">
        <Image
        width={275}
        src="Decimal2Pi-YZ-softice-x-Cosx-x-99.png" />


        </Col>
      <Col flex="1 0 55%">

      <p>DATAbstract is an evolving Solana based NFT project.</p>
      <br/>
      <p className="bold_text">Our mission is centered around building generative art from raw, real world datasets.</p><br/>

<p>Large datasets can hold complex relationships that are often hard to access.  Analytical visualization often involves folding, layering, and stretching the data to extract insight from the numbers.  This process traditionally focuses on simplification, distilling data down to dimensions and relationships we can easily grasp.</p>
<br/>
<p>DATAbstract explores the complex beauty in these manipulations: by letting go of simplicity, we let the numbers reveal themselves.</p>
</Col>
    </Row>


<Divider />



    {/* <!-- About Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-white">About the Artist</h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-line"></div>
      </div>


      <Row>

      <Col flex="1 0 60%">

      <p>I began developing generative art algorithms and non-linear plotting over a decade ago. </p> <br/>
      <p>Using just C++ to code up strange attractor plots and mandelbrot set images, I quickly grew fascinated how simple functions and data could generate such extensive complexity and beauty.  Several of my first pieces of art appeared in a local arts publication. </p>

<br/><p>The real world pulled me towards civil engineering as I helped launch a small construction start-up.  As the company grew, I found myself with a new passion for woodworking, and the code tinkering it required. </p>

<br/><p>After a successful buyout from my construction company, I created another small business creating custom art pieces in wood by writing boutique code for my CNC machine. </p>

<br/><p>DATAbstract grew directly out of my workshop: a new way to communicate the striking world of data through the magic of the blockchain. </p>

</Col>
<Col flex="1 0 6%"></Col>
<Col flex="1 0 33%">
        <Image
        width={300}
        src="SeaLight.jpg"/>


        </Col>


    </Row>


    </>
  );
};
