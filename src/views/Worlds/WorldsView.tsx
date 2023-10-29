import "./WorldsView.css";
import {
  IonContent,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  useIonRouter,
  IonPage,
} from "@ionic/react";
import SlantedContainer from "../../components/SlantedContainter/SlantedContainer";
import { useEffect, useState } from "react";
import { WorldsService } from "../../core/services/worlds.service";
import { WorldLegacy } from "../../core/interfaces/world-legacy.interface";

const WorldsView = () => {
  const [worlds, setWorlds] = useState<WorldLegacy[]>([]);
  const navigation = useIonRouter();

  const handleClick = (worldId: string) =>
    navigation.push(`worlds/categories?worldId=${worldId}`, "root", "push");
  const getWorlds = async () => {
    const service = new WorldsService();
    const worlds = await service.get();
    setWorlds(worlds);
  };
  useEffect(() => {
    getWorlds();
  }, []);
  return (
    <IonContent className="background">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>Mundos</IonTitle>
      </IonToolbar>
      <IonContent className="ion-padding background">
        {worlds.map((world, index) => (
          <div
            key={world.id_category}
            className={`${index % 2 === 1 ? "mb-24" : "mt-0"}`}
          >
            <div>
              <SlantedContainer
                title={world.category.split(" ")[0]}
                subtitle={`${world.category.split(" ")[1]} ${
                  world.category.split(" ")[2] ?? ""
                }`}
                onClick={() => handleClick(world.id_category)}
                inverted={index % 2 === 1}
                backgroundImage={`../../../public/assets/img-cities/${world.icon_category}`}
              />
            </div>
          </div>
        ))}
      </IonContent>
    </IonContent>
  );
};

export default WorldsView;
