// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'antd';
// import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useMeta } from '../../contexts';
import { Link, useHistory } from 'react-router-dom';
import {Row, Col, Divider,Layout, Image,Steps, List,Table} from 'antd';
const { Content } = Layout;
import React, { useEffect,useState } from 'react';
import useWindowDimensions from '../../utils/layout';
import { useMeta } from '../../contexts';


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
     <Content style={{width: '100%'}}>
     <Row>
             <Col span={24}>
               <h2 className="page-section-heading text-center2 text-uppercase text-white" >GEN Zero</h2>
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

              <h4 className="page-section-heading text-uppercase text-white" >For our first mint, we selected 3 unique datasets that exemplify the diversity of data that surrounds us. We deployed bespoke algorithms on each dataset to stretch, invert, and project the information into one-of-a-kind, dynamic artworks.    </h4>

               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>


              <h4 className="page-section-heading text-uppercase text-white" >Each dataset has been minted to the blockchain and will never be abstracted again. For more details, click on each of the artworks below.  </h4>

<div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

               </Col>


</Row>
     <Row>

      <Col flex="1 0 20%">
      <h3 className="page-section-heading text-center2 text-uppercase text-white" >HiPPAblocks</h3>
                     <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '.5rem' }}></div>



              <Link to={`/hippa`}>

       <img src="HiPPAblock-14.png" alt="hippa" width="275"/>


       </Link>

               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '.5rem' }}></div>

      <h4 className="page-section-heading text-center2 text-uppercase text-white" > 32 master edition NFTs</h4>

      <h5 className="page-section-heading text-center2 text-uppercase text-white" >A trigonometric data table conceived by the Greek mathematician Hipparchus over 2000 years ago</h5>


      <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1.5rem' }}></div>
      <h4 className="page-section-heading text-center2 text-uppercase text-white" >Available on:</h4>
      <div className="page-section-heading text-center2" style={{ width: '100%', marginTop: '0rem' }}>
      <a href="https://t.co/JaI4VYMoZ3"><img src="footer-logo-large.svg" alt="exchange" width="175"/></a></div>

        </Col>


<Col flex="1 0 3%"></Col>

              <Col flex="1 0 20%">

                    <h3 className="page-section-heading text-center2 text-uppercase text-white" >CryptoCANDLES</h3>
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '.5rem' }}></div>

       <Link to={`/candles`}>

              <img src="0000-XZ-torchOwt-Time-Price-Vol-90-70-WM.png" alt="hippa" width="275"/>


    {/*    <Image width={275}     src="0000-XZ-torchOwt-Time-Price-Vol-90-70-WM.png"/>*/}


        </Link>
                       <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '.5rem' }}></div>

      <h4 className="page-section-heading text-center2 text-uppercase text-white" >32 master edition NFTs</h4>

      <h5 className="page-section-heading text-center2 text-uppercase text-white" >Volume and price data from 30 minute intervals for the most traded cryptocurrencies on the market
</h5>


        </Col>

<Col flex="1 0 3%"></Col>
        <Col flex="1 0 20%">
            <h3 className="page-section-heading text-center2 text-uppercase text-white" >lightCURVES</h3>
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '.5rem' }}></div>

       <Link to={`/lightcurves`}>
                     <img src="0003KEPLER-YZ-growthBlk-time-electrons-centroid-WM.png" alt="hippa" width="275"/>



      </Link>
                     <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '.5rem' }}></div>

      <h4 className="page-section-heading text-center2 text-uppercase text-white" >32 master edition NFTs</h4>


      <h5 className="page-section-heading text-center2 text-uppercase text-white" >Telescope data from NASA’s Kepler Mission launched to discover Earth-size planets orbiting other stars</h5>


      <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1.5rem' }}></div>
      <h4 className="page-section-heading text-center2 text-uppercase text-white" >Available on:</h4>
      <div className="page-section-heading text-center2" style={{ width: '100%', marginTop: '0rem' }}>
      <a href="https://t.co/6w6Rbe3DhY"><img src="footer-logo-large.svg" alt="exchange" width="175"/></a></div>



        </Col>

</Row>
</Content>
    </>
  );
};
