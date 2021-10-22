// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'antd';
// import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useMeta } from '../../contexts';
import { Image } from 'antd';
import React, { useState } from 'react';
import { Row, Col, Divider,Table } from 'antd';

const dataSource = [
 {
            "name": "HiPPAblock|01",
            "description": "XSinX-TwoPi-X",
            "palette": "magmaBlk",
            "xsubset": "TwoPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "X",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|02",
            "description": "XSinX-TwoPi-Sin",
            "palette": "magmaBlk",
            "xsubset": "TwoPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "X",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|03",
            "description": "XSinX-Pi-X",
            "palette": "heat",
            "xsubset": "Pi",
            "xrange": "0 < X > pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "X",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|04",
            "description": "XSinX-Pi-Sin",
            "palette": "heat",
            "xsubset": "Pi",
            "xrange": "0 < X > pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "X",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|05",
            "description": "XSinX-Ints-X",
            "palette": "temp",
            "xsubset": "Ints",
            "xrange": "0 < X > 2001",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "X",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|06",
            "description": "XSinX-Ints-Sin",
            "palette": "temp",
            "xsubset": "Ints",
            "xrange": "1 < X > 2001",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "X",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|07",
            "description": "XSinX-HalfPi-X",
            "palette": "rainbow",
            "xsubset": "HalfPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "X",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|08",
            "description": "XSinX-HalfPi-Sin",
            "palette": "rainbow",
            "xsubset": "HalfPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "X",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|09",
            "description": "XSinSin-TwoPi-X",
            "palette": "magmaBlk",
            "xsubset": "TwoPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "SinX",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|10",
            "description": "XSinSin-TwoPi-Sin (EVODAO)",
            "palette": "temp",
            "xsubset": "TwoPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "SinX",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|11",
            "description": "XSinSin-Pi-X",
            "palette": "heat",
            "xsubset": "Pi",
            "xrange": "0 < X > pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "SinX",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|12",
            "description": "XSinSin-Pi-Sin",
            "palette": "heat",
            "xsubset": "Pi",
            "xrange": "0 < X > pi",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "SinX",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|13",
            "description": "XSinSin-Ints-X",
            "palette": "temp",
            "xsubset": "Ints",
            "xrange": "0 < X > 2001",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "SinX",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|14",
            "description": "XSinSin-Ints-Sin",
            "palette": "temp",
            "xsubset": "Ints",
            "xrange": "1 < X > 2001",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "SinX",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|15",
            "description": "XSinSin-HalfPi-X",
            "palette": "rainbow",
            "xsubset": "HalfPi",
            "xrange": "0 < X > pi/2",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "SinX",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|16",
            "description": "XSinSin-HalfPi-Sin",
            "palette": "rainbow",
            "xsubset": "HalfPi",
            "xrange": "0 < X > pi/2",
            "ivariable": "X",
            "jvariable": "SinX",
            "kvariable": "SinX",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|17",
            "description": "XCosX-TwoPi-X",
            "palette": "softice",
            "xsubset": "TwoPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "X",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|18",
            "description": "XCosX-TwoPi-Cos",
            "palette": "softice",
            "xsubset": "TwoPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "X",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|19",
            "description": "XCosX-Pi-X",
            "palette": "growthBlk",
            "xsubset": "Pi",
            "xrange": "0 < X > pi",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "X",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|20",
            "description": "XCosX-Pi-Cos",
            "palette": "growthBlk",
            "xsubset": "Pi",
            "xrange": "0 < X > pi",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "X",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|21",
            "description": "XCosX-Ints-X",
            "palette": "deepwaterBlk",
            "xsubset": "Ints",
            "xrange": "0 < X > 2001",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "X",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|22",
            "description": "XCosX-Ints-Cos",
            "palette": "deepwaterBlk",
            "xsubset": "Ints",
            "xrange": "1 < X > 2001",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "X",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|23",
            "description": "XCosX-HalfPi-X",
            "palette": "windBlk",
            "xsubset": "HalfPi",
            "xrange": "0 < X > pi/2",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "X",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|24",
            "description": "XCosX-HalfPi-Cos",
            "palette": "windBlk",
            "xsubset": "HalfPi",
            "xrange": "0 < X > pi/2",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "X",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|25",
            "description": "XCosCos-TwoPi-X",
            "palette": "softice",
            "xsubset": "TwoPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "CosX",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|26",
            "description": "XCosCos-TwoPi-Cos",
            "palette": "softice",
            "xsubset": "TwoPi",
            "xrange": "0 < X > 2pi",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "CosX",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|27",
            "description": "XCosCos-Pi-X",
            "palette": "growthBlk",
            "xsubset": "Pi",
            "xrange": "0 < X > pi",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "CosX",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|28",
            "description": "XCosCos-Pi-Cos",
            "palette": "growthBlk",
            "xsubset": "Pi",
            "xrange": "0 < X > pi",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "CosX",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|29",
            "description": "XCosCos-Ints-X",
            "palette": "deepwaterBlk",
            "xsubset": "Ints",
            "xrange": "0 < X > 2001",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "CosX",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|30",
            "description": "XCosCos-Ints-Cos",
            "palette": "deepwaterBlk",
            "xsubset": "Ints",
            "xrange": "0 < X > 2001",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "CosX",
            "viewfrom": "j"
        },
        {
            "name": "HiPPAblock|31",
            "description": "XCosCos-HalfPi-X",
            "palette": "windBlk",
            "xsubset": "HalfPi",
            "xrange": "0 < X > pi/2",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "CosX",
            "viewfrom": "i"
        },
        {
            "name": "HiPPAblock|32",
            "description": "XCosCos-HalfPi-Cos",
            "palette": "windBlk",
            "xsubset": "HalfPi",
            "xrange": "0 < X > pi/2",
            "ivariable": "X",
            "jvariable": "CosX",
            "kvariable": "CosX",
            "viewfrom": "j"
        },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Color Palette',
    dataIndex: 'palette',
    key: 'palette',
  },

    {
    title: 'X Subset',
    dataIndex: 'xsubset',
    key: 'xsubset',
  },


    {
    title: 'X Range',
    dataIndex: 'xrange',
    key: 'xrange',
  },
    {
    title: 'i Var',
    dataIndex: 'ivariable',
    key: 'ivariable',
  },
    {
    title: 'j Var',
    dataIndex: 'jvariable',
    key: 'jvariable',
  },
      {
    title: 'k Var',
    dataIndex: 'kvariable',
    key: 'kvariable',
  },

        {
    title: 'View',
    dataIndex: 'viewfrom',
    key: 'viewfrom',
  },
];


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
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

<Row>
<Col flex="0 0 5%"></Col>
 <Col flex="0 0 15%">
<div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2.5rem' }}></div>
<img src="hipparchus.png" alt="hippa" width="150" />

        </Col>
<Col flex="0 0 5%"></Col>
 <Col flex="1 0 35%">

 <p>Humans have tracked the movement of astronomical bodies across the sky for millennia.  Our desire to capture, process and understand the world around us continues.
</p>
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

 <p>Between 162 and 127 BC, Hipparchus constructed trigonometric tables of observational data while founding the field of trigonometry itself.
</p>
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

 <p> With this set of 32 images, we pay homage to the giants upon whose shoulders we stand.  Four trigonometric tables of 2000 data points are abstracted and layered though our algorithm, bringing new life to a dataset started in antiquity.
</p>

        </Col>

<Col flex="1 0 3%"></Col>
 <Col flex="1 0 20%">

       <Image
        width={275}
        src="HiPPAblock-07.png"/>



        </Col>


</Row>
<Divider />

         <h3 className="page-section-heading text-center text-uppercase text-white">Dataset Metadata</h3>
                        <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>


<Row>


<Col flex="1 0 40%">

        <a href="https://www.arweave.net/-B6B_KmyTMn-9y3MonBWDvJTbwR5q5G38-9dcL196aA?ext=html">
        <img
        width="575"
        src="hippajson.png"/></a>
</Col>
</Row>


               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

         <h3 className="page-section-heading text-center text-uppercase text-white">Attribute Table</h3>
                        <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

<Row>

<Table dataSource={dataSource} columns={columns} />

</Row>

    </>
  );
};
