import {
  Button,
  Row,
  Col,
  Layout,
} from 'antd';
import { ArtCard } from '../../components/ArtCard';
import Masonry from 'react-masonry-css';
import { CardLoader } from '../../components/MyLoader';
import { Link, useHistory } from 'react-router-dom';
import useWindowDimensions from '../../utils/layout';
import { useMeta } from '../../contexts';
import { useEffect, useState } from 'react';
const { Content } = Layout;
import { Steps, Divider,Image } from 'antd';

const { Step } = Steps;

export const LandingView = () => {
  const { metadata, isLoading } = useMeta();
  const { width } = useWindowDimensions();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const items = metadata;

  const artworkGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!isLoading
        ? items.slice(0, Math.min(items.length, 12)).map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/art/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  height={250}
                  width={250}
                />
              </Link>
            );
          })
        : [...Array(12)].map((_, idx) => <CardLoader key={idx} />)}
    </Masonry>
  );

  return (
    <>


      <Content style={{width: '100%'}}>

      <Row>


             <Col span={24}>
               <h2 className="page-section-heading text-center2 text-uppercase text-white" >Data-Driven Generative Art</h2>
<div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

               </Col>
</Row>

<Row>
      <Col flex="1 0 20%">

       <Link to={`/hippa`}> <Image
        width={275}
        src="DecimalHalfPi-YZ-endlessOwt-logx-Sinx-logx-85.png" /></Link>

      <h4 className="page-section-heading text-center2 text-uppercase text-white" >HiPPAblocks</h4>


        </Col>

<Col flex="1 0 3%"></Col>

              <Col flex="1 0 20%">
       <Link to={`/candles`}> <Image
        width={275}
        src="0000-XZ-torchOwt-Time-Price-Vol-90-70-WM.png"/></Link>
      <h4 className="page-section-heading text-center2 text-uppercase text-white" >CryptoCANDLES</h4>


        </Col>

<Col flex="1 0 3%"></Col>
        <Col flex="1 0 20%">

       <Link to={`/natdata`}> <Image
        width={275}
        src="DOGE-USDT-Apr-15th-2021-XZ-plasmaBlk-WM.png" /></Link>
      <h4 className="page-section-heading text-center2 text-uppercase text-white" >NATdata</h4>


        </Col>
</Row>






<Row>
<Divider />
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

      </Content>
    </>
  );
};



