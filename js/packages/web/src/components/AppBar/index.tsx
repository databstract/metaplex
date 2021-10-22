import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { ConnectButton, CurrentUserBadge } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';
import { useMeta } from '../../contexts';

import { TwitterOutlined } from '@ant-design/icons';


import Icon from '@ant-design/icons';


const UserActions = () => {
  const { publicKey } = useWallet();
  const { whitelistedCreatorsByCreator, store } = useMeta();
  const pubkey = publicKey?.toBase58() || '';

  const canCreate = useMemo(() => {
    return (
      store?.info?.public ||
      whitelistedCreatorsByCreator[pubkey]?.info?.activated
    );
  }, [pubkey, whitelistedCreatorsByCreator, store]);

  return (
    <>
      {store && (
        <>
          {/* <Link to={`#`}>
            <Button className="app-btn">Bids</Button>
          </Link> */}
          {canCreate ? (
            <Link to={`/art/create`}>
              <Button className="app-btn">Create</Button>
            </Link>
          ) : null}
          <Link to={`/auction/create/0`}>
            <Button className="connector" type="primary">
              Sell
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {
  const { connected } = useWallet();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
      }}
    >
      <Link to={`/`}>
        <Button className="app-btn">Home</Button>
      </Link>

      <Link to={`/marketplace`}>
        <Button className="app-btn">Marketplace</Button>
      </Link>

      <Dropdown overlay={
      <Menu>
       {/* <Menu.SubMenu title="Options">*/}
          <Menu.Item key="display">
         <Link to="/hippa">   HiPPAblocks </Link>
          </Menu.Item>
          <Menu.Item key="mode">
         <Link to="/candles">    CryptoCANDLES</Link>
                      </Menu.Item>

           <Menu.Item key="mode">
         <Link to="/lightcurves">    lightCURVES</Link>
                      </Menu.Item>
       {/* </Menu.SubMenu>*/}
      </Menu>}>
     <Link to="/projects"> <Button className="app-btn">GEN Zero</Button></Link>
    </Dropdown>


{/*
     <Dropdown overlay={
      <Menu>

          <Menu.Item key="roadmap">
         <Link to="/roadmap">    Roadmap</Link>
                      </Menu.Item>

      </Menu>}>
     <Link to={`/about`}> <Button className="app-btn">About</Button></Link>
    </Dropdown>
*/}




      <Link to={`/artworks`}>
        <Button className="app-btn">
          {connected ? 'My Items' : 'Gallery'}
        </Button>
      </Link>





      <Link to={`/discord`}>
        <Button className="app-btn">
        <Icon component={() => (<img width="35" src="/discord2.svg" />)} /></Button>
      </Link>

      <Link to={`/twitter`}>
        <Button className="app-btn">
        <Icon component={() => (<img width="30" src="/twitter.svg" />)} /></Button>
      </Link>



      {/*<Link to={`/artists`}>
        <Button className="app-btn">Creators</Button>
      </Link>*/}


    </div>
  );
};

const MetaplexMenu = () => {
  const { width } = useWindowDimensions();
  const { connected } = useWallet();

  if (width < 768)
    return (
      <>
        <Dropdown
          arrow
          placement="bottomLeft"
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item>
                <Link to={`/`}>
                  <Button className="app-btn">Home</Button>
                </Link>
              </Menu.Item>



   <Menu.Item>
                <Link to={`/store`}>
        <Button className="app-btn">Store</Button>
      </Link>
                            </Menu.Item>


                   <Menu.Item>
                <Link to={`/roadmap`}>
        <Button className="app-btn">Roadmap</Button>
      </Link>
                            </Menu.Item>

                  <Menu.Item>
                <Link to={`/about`}>
        <Button className="app-btn">About</Button>
      </Link>
                            </Menu.Item>


              <Menu.Item>

              <Menu.Item>
                <Link to={`/artworks`}>
                  <Button className="app-btn">
                    {connected ? 'My Items' : 'Gallery'}
                  </Button>
                </Link>
              </Menu.Item>

                                <Menu.Item>



                <Link to={`/discord`}>
        <Button className="app-btn">Discord</Button>
      </Link>
                            </Menu.Item>




      {/*<Link to={`/artists`}>
        <Button className="app-btn">Creators</Button>
      </Link>*/}
              </Menu.Item>
            </Menu>
          }
        >
          <MenuOutlined style={{ fontSize: '1.4rem' }} />
        </Dropdown>
      </>
    );

  return <DefaultActions />;
};

export const AppBar = () => {
  const { connected } = useWallet();

  return (
    <>

<div className="app-bar-side">
{window.location.hash !== '#/analytics' && <Notifications />}
</div>

      <div className="app-left app-bar-box">
        <MetaplexMenu />
      </div>
      {connected ? (
        <div className="app-right app-bar-box">
          <UserActions />
          <CurrentUserBadge
            showBalance={false}
            showAddress={false}
            iconSize={24}
          />
        </div>
      ) : (
        <ConnectButton type="primary" allowWalletChange />
      )}
    </>
  );
};
