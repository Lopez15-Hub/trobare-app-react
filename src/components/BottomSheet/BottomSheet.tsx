import React, { useRef } from "react";
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonSearchbar,
  IonIcon,
} from "@ionic/react";
import { starSharp, shareSocial } from "ionicons/icons";
import { CategoriesFinal } from "../../core/interfaces/world-legacy.interface";

export const BottomSheet: React.FC<{ place: CategoriesFinal }> = ({
  place,
}) => {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonContent className="ion-padding ">
      <IonModal
        className="rounded-t-3xl "
        ref={modal}
        isOpen
        trigger="open-modal"
        initialBreakpoint={0.5}
        breakpoints={[0.25, 0.5, 0.75, 1]}
      >
        <IonContent className="ion-padding">
          <div className="px-5 py-5  ">
            <div className="my-4">
              <h1 className="text-xl font-bold  ">{place.name}</h1>
              <div className="flex">
                <IonIcon className="text-yellow-400" icon={starSharp}></IonIcon>
                <p className="font-light text-sm">4.5</p>
              </div>
            </div>
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24824.79050175656!2d-68.24993410714349!3d-38.94457092365067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960bcc069c896943%3A0x8e29c62b899c83e2!2sRestaurant%20La%20Tia!5e0!3m2!1ses!2sar!4v1698349855018!5m2!1ses!2sar"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h1 className="text-xl font-bold my-4">Nosotros</h1>
            <p className="font-light text-xs">{place.desc}</p>
            <h1 className="text-xl font-bold my-4 ">Más...</h1>
            <div className="flex w-full justify-between">
              <img
                src="https://cdn.icon-icons.com/icons2/2407/PNG/512/uber_icon_146079.png"
                alt=""
                className="w-12 h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/2048px-Google_Maps_icon_%282015-2020%29.svg.png"
                alt=""
                className="w-12 h-12"
              />
              <img
                src="https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw"
                alt=""
                className="w-12 h-12"
              />
              <IonIcon
                className="text-white text-3xl bg-blue-500 p-3 rounded-md my-auto"
                size="medium"
                icon={shareSocial}
              ></IonIcon>
            </div>
          </div>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};
