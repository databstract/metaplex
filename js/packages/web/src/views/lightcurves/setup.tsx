// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'antd';
// import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useMeta } from '../../contexts';
import { Image } from 'antd';
import React, { useState } from 'react';
import {Row, Col, Divider,Layout, Steps, List,Table} from 'antd';


const dataSource = [
 {
            "name": "lightCURVE|01",
            "description": "0000KEPLER<--ELECTRONS",
            "palette": "growthBlk",
            "xsubset": "0000KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|02",
            "description": "0000KEPLER<--TIME",
            "palette": "growthBlk",
            "xsubset": "0000KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "i"
        },
        {
            "name": "lightCURVE|03",
            "description": "0000KEPLER<--CENTROID",
            "palette": "PinkyBlue",
            "xsubset": "0001KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|04",
            "description": "0001KEPLER<--ELECTRONS",
            "palette": "PinkyBlue",
            "xsubset": "0001KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|05",
            "description": "0001KEPLER<--TIME",
            "palette": "PinkyBlue",
            "xsubset": "0001KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "i"
        },
        {
            "name": "lightCURVE|06",
            "description": "0002KEPLER<--CENTROID",
            "palette": "blueBurstBlk",
            "xsubset": "0002KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|07",
            "description": "0002KEPLER<--ELECTRONS",
            "palette": "blueBurstBlk",
            "xsubset": "0002KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|08",
            "description": "0002KEPLER<--TIME",
            "palette": "blueBurstBlk",
            "xsubset": "0002KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "i"
        },
        {
            "name": "lightCURVE|09",
            "description": "0003KEPLER<--CENTROID",
            "palette": "magmaBlk",
            "xsubset": "0003KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|10",
            "description": "0003KEPLER<--ELECTRONS",
            "palette": "magmaBlk",
            "xsubset": "0003KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|11",
            "description": "0004KEPLER<--CENTROID",
            "palette": "blueglowBlk",
            "xsubset": "0004KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|12",
            "description": "0004KEPLER<--ELECTRONS",
            "palette": "blueglowBlk",
            "xsubset": "0004KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|13",
            "description": "0004KEPLER<--TIME",
            "palette": "blueglowBlk",
            "xsubset": "0004KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "i"
        },
        {
            "name": "lightCURVE|14",
            "description": "0005KEPLER<--ELECTRONS",
            "palette": "plasmaBlk",
            "xsubset": "0005KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|15",
            "description": "0007KEPLER<--CENTROID",
            "palette": "eray",
            "xsubset": "0007KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|16",
            "description": "0007KEPLER<--ELECTRONS",
            "palette": "eray",
            "xsubset": "0007KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|17",
            "description": "0008KEPLER<--CENTROID",
            "palette": "ectoBlk",
            "xsubset": "0008KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|18",
            "description": "0008KEPLER<--ELECTRONS",
            "palette": "ectoBlk",
            "xsubset": "0008KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|19",
            "description": "0008KEPLER<--TIME",
            "palette": "ectoBlk",
            "xsubset": "0008KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "i"
        },
        {
            "name": "lightCURVE|20",
            "description": "0009KEPLER<--CENTROID",
            "palette": "deepwaterBlk",
            "xsubset": "0009KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|21",
            "description": "0009KEPLER<--ELECTRONS",
            "palette": "deepwaterBlk",
            "xsubset": "0009KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|22",
            "description": "0009KEPLER<--TIME",
            "palette": "deepwaterBlk",
            "xsubset": "0009KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "i"
        },
        {
            "name": "lightCURVE|23",
            "description": "0010KEPLER<--CENTROID",
            "palette": "purpGlowOwt",
            "xsubset": "0010KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|24",
            "description": "0010KEPLER<--ELECTRONS",
            "palette": "purpGlowOwt",
            "xsubset": "0010KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|25",
            "description": "0010KEPLER<--TIME",
            "palette": "purpGlowOwt",
            "xsubset": "0010KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "i"
        },
        {
            "name": "lightCURVE|26",
            "description": "0011KEPLER<--CENTROID",
            "palette": "blueDwarf",
            "xsubset": "0011KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|27",
            "description": "0011KEPLER<--ELECTRONS",
            "palette": "blueDwarf",
            "xsubset": "0011KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|28",
            "description": "0012KEPLER<--CENTROID",
            "palette": "magmaBlu",
            "xsubset": "0012KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|29",
            "description": "0012KEPLER<--ELECTRONS",
            "palette": "magmaBlu",
            "xsubset": "0012KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
        },
        {
            "name": "lightCURVE|30",
            "description": "0012KEPLER<--TIME",
            "palette": "magmaBlu",
            "xsubset": "0012KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "i"
        },
        {
            "name": "lightCURVE|31",
            "description": "0015KEPLER<--CENTROID",
            "palette": "purpGold",
            "xsubset": "0015KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "k"
        },
        {
            "name": "lightCURVE|32",
            "description": "0015KEPLER<--ELECTRONS",
            "palette": "purpGold",
            "xsubset": "0015KEPLER",
            "ivariable": "time",
            "jvariable": "electrons",
            "kvariable": "centroid",
            "view": "j"
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
    dataIndex: 'view',
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
               <h2 className="page-section-heading text-center text-uppercase text-white">lightCURVES</h2>
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

<Row>
<Col flex="0 0 0%"></Col>
 <Col flex="0 0 15%">
<div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '0.5rem' }}></div>
<img src="Keplerfieldofviewstarchart.gif" alt="keplerchart" width="240" />

        </Col>
<Col flex="0 0 5%"></Col>
 <Col flex="1 0 35%">

 <p>The Kepler space telescope was launched by NASA in early 2009 to discover Earth-size planets orbiting other stars. Using a photometer to continuously monitor over 150,000 stars, scientists grappled with mountains of data, and over their nine-year search detected nearly 3,000 planets.</p>


               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

<p>This collection probes and transforms the commissioning data beamed back to Earth and later released to the general public. Through abstract visualization, we gain a glimpse into the strange complexity and beauty hidden in universal data. </p>

               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

 <p>Each piece arrays 2,975 data points along three dimensions: time, electrons, and centroids.</p>


        </Col>

<Col flex="1 0 3%"></Col>
 <Col flex="1 0 20%">

       <Image
        width={275}
        src="0003KEPLER-YZ-growthBlk-time-electrons-centroid-WM.png"/>



        </Col>


</Row>
<Divider />

         <h3 className="page-section-heading text-center text-uppercase text-white">Dataset Metadata</h3>
                        <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>


<Row>


<Col flex="1 0 40%">

        <a href="https://www.arweave.net/-B6B_KmyTMn-9y3MonBWDvJTbwR5q5G38-9dcL196aA?ext=html">
        <img
        width="675"
        src="lightcurvesdatajson.png"/></a>
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
