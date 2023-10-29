import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import Card from "../Card/Card";
import { useLocation, useHistory } from "react-router";
import { WorldsService } from "../../core/services/worlds.service";
import { useEffect, useState } from "react";
import { CategoriesFinal } from "../../core/interfaces/world-legacy.interface";

export const Sports = () => {
  const [places, setPlaces] = useState<CategoriesFinal[]>([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activityId = searchParams.get("activityId");
  const categoryId = searchParams.get("categoryId");
  const worldId = searchParams.get("worldId");
  const navigation = useIonRouter();

  const getPlaces = async () => {
    const service = new WorldsService();
    const worlds = await service.get();
    const world = worlds.find((world) => world.id_category === worldId)!;
    const currentCategory = world.subcategories.find(
      (category) => category.id_subcategory === categoryId
    )!;
    const currentActivities = currentCategory.categories.find(
      ({ id_subcategoryFinal }) => id_subcategoryFinal === activityId
    )!;

    setPlaces(currentActivities.categoriesFinal);
  };
  useEffect(() => {
    getPlaces();
  }, []);

  const handleClick = (placeId: string) =>
    navigation.push(
      `/places?placeId=${placeId}&categoryId=${categoryId}&worldId=${worldId}&activityId=${activityId}`,
      "root",
      "push"
    );
  return (
    <IonContent fullscreen>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>Lugares</IonTitle>
      </IonToolbar>
      <IonGrid>
        <IonRow>
          {places.map((place, index) => (
            <IonCol size="6" key={place.id}>
              <Card
                onClick={() => handleClick(place.id)}
                place={place}
                index={index + 2 * 6}
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};
