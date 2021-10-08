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
         <h2 className="page-section-heading text-center text-uppercase text-white">HiPPAblocks</h2>


 <Col flex="1 0 20%">

        <Image
        width={275}
        src="DecimalHalfPi-YZ-endlessOwt-logx-Sinx-logx-85.png"/>

      <h4 className="page-section-heading text-center2 text-uppercase text-white" >HiPPAblocks</h4>


        </Col>
    </>
  );
};
