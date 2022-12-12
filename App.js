import React from "react";
import { AppLoading } from 'expo';

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = () => {
    // Load assets here
  }
  return isReady ? (
      <Text>Estoy listo</Text>
  ) : (
    <AppLoading onError={console.error} onFinish={handleFinish} startAsync={loadResourcesAsync} />
  );
}
