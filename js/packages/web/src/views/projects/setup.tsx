// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'antd';
// import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useMeta } from '../../contexts';
import { Image } from 'antd';
import React, { useEffect,useState } from 'react';
import { Row, Col, Divider,Layout } from 'antd';
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
           <h2 className="page-section-heading text-center text-uppercase text-white">Projects</h2>



    </>
  );
};
