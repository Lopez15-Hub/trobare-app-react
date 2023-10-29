import { IonContent, IonIcon, useIonRouter } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { BottomSheet } from "../../components/BottomSheet/BottomSheet";
import { WorldsService } from "../../core/services/worlds.service";
import { useEffect, useState } from "react";
import { CategoriesFinal } from "../../core/interfaces/world-legacy.interface";

const PlaceView = () => {
  const [place, setPlace] = useState<CategoriesFinal>({
    desc: "",
    id: "0",
    image: "",
    name: "No encontrado",
  });
  const searchParams = new URLSearchParams(location.search);
  const worldId = searchParams.get("worldId");
  const categoryId = searchParams.get("categoryId")!;
  const activityId = searchParams.get("activityId")!;
  const placeId = searchParams.get("placeId")!;

  const navigation = useIonRouter();

  const getPlace = async () => {
    const service = new WorldsService();
    const worlds = await service.get();
    const world = worlds.find((world) => world.id_category === worldId)!;
    const currentCategory = world.subcategories.find(
      (category) => category.id_subcategory === categoryId
    )!;
    const currentActivities = currentCategory.categories.find(
      ({ id_subcategoryFinal }) => id_subcategoryFinal === activityId
    )!;
    const currentPlace = currentActivities.categoriesFinal.find(
      (place) => place.id === placeId
    );
    setPlace(currentPlace!);
  };
  useEffect(() => {
    getPlace();
  }, []);
  return (
    <IonContent fullscreen>
      {place && (
        <div
          style={{
            height: "100%",
            backgroundSize: "contain",
            background: place.image
              ? `url('/assets/final/${place.image}')`
              : "https://picsum.photos/512/512",
          }}
        >
          <button onClick={() => navigation.goBack()} className=" text-black">
            <IonIcon
              className="bg-white m-2 mx-auto text-xl p-2  rounded-full w-[18px] h-[18px] border shadow justify-center py-auto px-auto"
              icon={arrowBack}
            ></IonIcon>
          </button>
        </div>
      )}
      <BottomSheet place={place} />
    </IonContent>
  );
};

export default PlaceView;
