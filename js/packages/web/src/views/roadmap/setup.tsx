// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Row, Button, Col, Card, Layout,Steps, Divider,Image } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
// import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useMeta } from '../../contexts';

const { Step } = Steps;

export const SetupView = () => {
  // const { store } = useMeta();
  // const history = useHistory();
  // const wallet = useWallet();
  // const { setVisible } = useWalletModal();
  // const connect = useCallback(
  //   () => (wallet.wallet ? wallet.connect().catch() : setVisible(true)),
  //   [wallet.wallet, wallet.connect, setVisible],
  // );

  const { Content } = Layout

  return (
    <>
    <Row>
     <Col span={24}>
               <h2 className="page-section-heading text-center2 text-uppercase text-white" >Roadmap</h2>
               </Col>

<div className="divider-custom divider-light" style={{ width: '100%', marginTop: '2rem' }}></div>

        <div className="auction-container" style={{ margin: 0 }}>

<div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}>


            <Col span={24}>
                <div className="centered-roadmap">
                    <Steps className="center-padding" direction="vertical" current={0}>
                        <Step title="GEN00: Base 3 Classes" subTitle="October 2021" description="Auction of 96 Master Editions: HiPPAblocks, cryptoCANDLES, and NATdata" />
                        <Step title="GEN01: Weekly Drops" subTitle="November - December 2021" description="8 Weekly Drops with 32 artworks from a BASE 3 Class and exclusive Strange Attractor drops" />
                        <Step title="GEN02" subTitle="Q1 2022" description="Community integration for dataset selection and data stream API implementation" />
                        <Step title="GEN03" subTitle="Q2 2022" description="User data portal for iconography and dataset storage on the blockchain" />
                       </Steps>
                </div>
            </Col>
             </div>
              </div>

               </Row>
    </>
  );
};
