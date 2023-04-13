import { App } from '@capacitor/app';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useEffect } from 'react';
import Test from '../components/Test';
import './Home.css';

const Home: React.FC = () => {
  const ionRouter = useIonRouter();
  useEffect(() => {
    document.addEventListener('ionBackButton', (ev: any) => {
      ev.detail.register(-1, () => {
        if (!ionRouter.canGoBack()) {
          App.exitApp();
        }
      });
    });
  }, []);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Test</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Test />
      </IonContent>
    </IonPage>
  );
};

export default Home;
