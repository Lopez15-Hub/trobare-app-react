import {
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  useIonRouter,
  IonImg,
} from "@ionic/react";
import "./Discover.view.css";
import { useLocation } from "react-router";
import { WorldsService } from "../../core/services/worlds.service";
import { useState, useEffect } from "react";
import { Subcategory } from "../../core/interfaces/world-legacy.interface";
const Discover = () => {
  const navigation = useIonRouter();
  const [categories, setCategories] = useState<Subcategory[]>([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const worldId = searchParams.get("worldId");

  const handleClick = (categoryId: string, worldId: string) =>
    navigation.push(
      `/discover?categoryId=${categoryId}&worldId=${worldId}`,
      "root",
      "push"
    );
  const getWorld = async () => {
    const service = new WorldsService();
    const worlds = await service.get();
    const world = worlds.find((world) => world.id_category === worldId);
    setCategories(world!.subcategories);
  };
  useEffect(() => {
    getWorld();
  }, []);
  return (
    <IonContent fullscreen className="background">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>Sub mundos</IonTitle>
      </IonToolbar>
      <div className="mt-10">
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <div
                key={category.id_subcategory}
                className={` ${index % 2 === 0 ? "point-left" : "point-right"}`}
              >
                <div
                  className="point bg-white shadow rounded-full"
                  onClick={() => handleClick(category.id_subcategory, worldId!)}
                >
                  <div className="relative">
                    <IonImg
                      src={`https://picsum.photos/512/512`}
                      alt=""
                      className="cover mx-auto my-2"
                    />
                    <h1 className="point-text text-sm text-black text-center font-bold ">
                      {category.subcategory}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </IonContent>
  );
};

export default Discover;
