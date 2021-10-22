import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import {
  AnalyticsView,
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  ArtworksView,
  AuctionCreateView,
  AuctionView,
  AboutView,
  HomeView,
  RoadMapView,
   MarketplaceView,
   ProjectsView,
   NatdataView,
   HippaView,
   CandlesView,
} from './views';
import { AdminView } from './views/admin';
import { BillingView } from './views/auction/billing';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route exact path="/admin" component={() => <AdminView />} />
            <Route
              exact
              path="/analytics"
              component={() => <AnalyticsView />}
            />
            <Route
              exact
              path="/art/create/:step_param?"
              component={() => <ArtCreateView />}
            />
            <Route
              exact
              path="/artworks/:id?"
              component={() => <ArtworksView />}
            />
            <Route exact path="/art/:id" component={() => <ArtView />} />
            <Route exact path="/artists/:id" component={() => <ArtistView />} />
            <Route exact path="/artists" component={() => <ArtistsView />} />
            <Route
              exact
              path="/auction/create/:step_param?"
              component={() => <AuctionCreateView />}
            />
            <Route
              exact
              path="/auction/:id"
              component={() => <AuctionView />}
            />
            <Route
              exact
              path="/auction/:id/billing"
              component={() => <BillingView />}
            />
            <Route exact path="/about" component={() => <AboutView />} />
            <Route exact path="/roadmap" component={() => <RoadMapView />} />
            <Route exact path="/marketplace" component={() => <MarketplaceView />} />

            <Route exact path="/projects" component={() => <ProjectsView />} />
            <Route exact path="/hippa" component={() => <HippaView />} />
            <Route exact path="/lightcurves" component={() => <NatdataView />} />
            <Route exact path="/candles" component={() => <CandlesView />} />

<Route path='/discord' component={() => {
     window.location.href = 'https://discord.gg/5VnYG5KxMg';
     return null;
}}/>
<Route path='/twitter' component={() => {
     window.location.href = 'https://www.twitter.com/dat_a_bstract';
     return null;
}}/>
            <Route path="/" component={() => <HomeView />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
