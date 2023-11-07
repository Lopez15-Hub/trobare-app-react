import "./Explore.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IonButtons,
  IonContent,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { WorldsService } from "../../core/services/worlds.service";
import { Category } from "../../core/interfaces/world-legacy.interface";

const Explore = () => {
  const [activities, setActivities] = useState<Category[]>([]);
  const circles: number = 6;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const worldId = searchParams.get("worldId");
  const categoryId = searchParams.get("categoryId")!;
  const navigation = useIonRouter();

  const handleClick = (activityId: string) =>
    navigation.push(
      `sports?activityId=${activityId}&categoryId=${categoryId}&worldId=${worldId}`,
      "root",
      "push"
    );
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const getActivities = async () => {
    const service = new WorldsService();
    const worlds = await service.get();
    const world = worlds.find((world) => world.id_category === worldId)!;
    const currentCategory = world.subcategories.find(
      (category) => category.id_subcategory === categoryId
    )!;
    setActivities(currentCategory.categories);
  };
  useEffect(() => {
    getActivities();
  }, []);
  const handleMouseDown = (e: any) => {
    setStartPosition({ x: e.clientX, y: e.clientY });
    const handleMouseMove = (e: any) => {
      const dx = e.clientX - startPosition.x;
      const dy = e.clientY - startPosition.y;
      const angle = Math.atan2(dy, dx);
      const degrees = angle * (180 / Math.PI);
      setRotation(degrees);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleTouchStart = (e: any) => {
    const touch = e.touches[0];
    setStartPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: any) => {
    const touch = e.touches[0];
    const dx = touch.clientX - startPosition.x;
    const dy = touch.clientY - startPosition.y;
    const angle = Math.atan2(dy, dx);
    const degrees = angle * (180 / Math.PI);
    setRotation(degrees);
  };
  return (
    <IonContent
      color="red"
      scrollY={false}
      scrollX={false}
      fullscreen
      className="relative background"
    >
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>Actividades</IonTitle>
      </IonToolbar>
      <div
        className="absolute top-0 bottom-0 mt-[70%]  "
        onMouseDown={handleMouseDown}
        onTouchStart={activities.length > 4 ? handleTouchStart : () => null}
        onTouchMove={activities.length > 4 ? handleTouchMove : () => null}
        style={{ cursor: "grab" }}
      >
        <div
          className={`rounded-full border absolute w-[150px] h-[150px] `}
          style={{
            transform: `rotate(${rotation}deg)`,
            background: `url('https://picsum.photos/id/24/200/300')`,
            backgroundSize: "cover",
          }}
        >
          {activities.length > 0 &&
            activities.map((activity, index) => {
              const angle = index * (360 / circles) * (Math.PI / 180); // Calcular el ángulo en radianes
              const radius = 200; // Radio del círculo rojo en este ejemplo (ajústalo según sea necesario)
              const x = radius * Math.cos(angle); // Calcular la posición x
              const y = radius * Math.sin(angle); // Calcular la posición y

              return (
                <div
                  key={activity.id_subcategoryFinal}
                  className="bg-blue-200 rounded-full absolute w-[150px] h-[150px] mr-10 cursor-pointer"
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                    backgroundColor: "white",
                    background: `url(${`ﬁhttps://picsum.photos/id/${
                      index * 23
                    }200/200`})`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => handleClick(activity.id_subcategoryFinal)}
                >
                  <div className="text-center justify-center my-16 items-center">
                    <h1
                      className="text-xl font-bold text-orange-500"
                      style={{ transform: `rotate(${rotation})` }}
                    >
                      {activity.subcategoryFinal}
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </IonContent>
  );
};

export default Explore;
