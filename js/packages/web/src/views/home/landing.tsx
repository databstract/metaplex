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
               <h2 className="page-section-heading text-center2 text-uppercase text-white" >GEN Zero</h2>
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

              <h3 className="page-section-heading text-center2 text-uppercase text-white" >Three Classes of Data-Driven Generative Art</h3>

<div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

               </Col>
</Row>

<Row>



      <Col flex="1 0 20%">

       <Link to={`/hippa`}>

       <img src="HiPPAblock-14.png" alt="hippa" width="275"/>


{/* <Image width={275} src="DecimalHalfPi-YZ-endlessOwt-logx-Sinx-logx-85.png" />*/}


       </Link>

      <h3 className="page-section-heading text-center2 text-uppercase text-white" >HiPPAblocks</h3>
      <h4 className="page-section-heading text-center2 text-uppercase text-white" >32 master edition NFTs</h4>


        </Col>

<Col flex="1 0 3%"></Col>

              <Col flex="1 0 20%">
       <Link to={`/candles`}>

            <img src="0000-XZ-torchOwt-Time-Price-Vol-90-70-WM.png" alt="candles" width="275"/>






    {/*    <Image width={275}     src="0000-XZ-torchOwt-Time-Price-Vol-90-70-WM.png"/>*/}


        </Link>
      <h3 className="page-section-heading text-center2 text-uppercase text-white" >CryptoCANDLES</h3>
      <h4 className="page-section-heading text-center2 text-uppercase text-white" >32 master edition NFTs</h4>

        </Col>

<Col flex="1 0 3%"></Col>
        <Col flex="1 0 20%">

       <Link to={`/lightcurves`}>
                     <img src="0003KEPLER-YZ-growthBlk-time-electrons-centroid-WM.png" alt="lightcurves" width="275"/>


      {/*  <Image width={275} src="DOGE-USDT-Apr-15th-2021-XZ-plasmaBlk-WM.png" />*/}


      </Link>
            <h3 className="page-section-heading text-center2 text-uppercase text-white" >lightCURVES</h3>
      <h4 className="page-section-heading text-center2 text-uppercase text-white" >32 master edition NFTs</h4>


        </Col>
</Row>






<Row>
<Divider />
               <Col span={24}>
               <h2 className="page-section-heading text-center2 text-uppercase text-white" >About the Project</h2>
               </Col>

<div className="divider-custom divider-light" style={{ width: '100%', marginTop: '2rem' }}></div>


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

                   <Col span={24}>
               <h2 className="page-section-heading text-center2 text-uppercase text-white" >About the Artist</h2>
               </Col>

               <div className="divider-custom divider-light" style={{ width: '100%', marginTop: '2rem' }}></div>


     {/* <h2 className="page-section-heading text-center text-uppercase text-white">About the Artist</h2> */}
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







{/*

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

*/}


      </Row>

      </Content>
    </>
  );
};



