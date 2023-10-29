import { IonPage } from "@ionic/react";
import "./Home.css";
import { Router } from "../../components/BottomBar/BottomBar";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Router />
    </IonPage>
  );
};

export default Home;
