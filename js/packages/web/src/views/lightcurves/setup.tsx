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
      <h2 className="page-section-heading text-center text-uppercase text-white">lightCURVES</h2>
            <h3 className="page-section-heading text-center2 text-uppercase text-white" >Coming Soon</h3>
            <div className="divider-custom divider-light" style={{ width: '100%', marginTop: '2rem' }}></div>


<Col flex="1 0 3%"></Col>
        <Col flex="1 0 20%">
        <Image
        width={275}
        src="0003KEPLER-YZ-growthBlk-time-electrons-centroid-WM.png" />


        </Col>
    </>
  );
};
