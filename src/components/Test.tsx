import { IonButton } from '@ionic/react';
import { AppPlugins } from '../lib';
import './Test.css';

interface ContainerProps { }

const Test: React.FC<ContainerProps> = () => {
  const test = () => {
    AppPlugins.test({ "message": "Hello World" }).then((data) => {
      console.log(data)
    })
  }
  return (
    <div className="container">
      <IonButton onClick={ test }>Test</IonButton>
    </div>
  );
};

export default Test;
