import "./BottomBar.css";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router";
import { home, heart, map, search, globeOutline } from "ionicons/icons";
import Explore from "../../views/Explore/Explore";
import { Sports } from "../Sports/Sports";
import Discover from "../../views/Discover/Discover.view";
import WorldsView from "../../views/Worlds/WorldsView";
import PlaceView from "../../views/place/PlaceView";

export const Router = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <WorldsView />} exact={true} />
          <Route
            path="/worlds/categories"
            render={() => <Discover />}
            exact={true}
          />
          <Route path="/likes" render={() => <div></div>} exact={true} />
          <Route path="/search" render={() => <div></div>} exact={true} />
          <Route path="/worlds" render={() => <div></div>} exact={true} />
          <Route path="/map" render={() => <div></div>} exact={true} />
          <Route path="/places" render={() => <PlaceView />} exact={true} />

          <Route path="/discover" render={() => <Explore />} exact={true} />
          <Route path="/sports" render={() => <Sports />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="likes" href="/likes">
            <IonIcon icon={heart} />
            <IonLabel>Me gustas</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>

          <IonTabButton tab="worlds" href="/worlds">
            <IonIcon icon={globeOutline} />
            <IonLabel>Mundos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="map" href="/map">
            <IonIcon icon={map} />
            <IonLabel>Mapa</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};
