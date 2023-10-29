import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import { CategoriesFinal } from "../../core/interfaces/world-legacy.interface";

export const Card: React.FC<{
  place: CategoriesFinal;
  index: number;
  onClick: () => void;
}> = ({ place, index, onClick }) => {
  return (
    <IonCard className="rounded-xl" onClick={onClick}>
      <img alt="Silhouette of mountains" src={`/assets/final/${place.image}`} />
      <IonCardHeader>
        <IonCardTitle className="text-center">{place.name}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};
export default Card;
