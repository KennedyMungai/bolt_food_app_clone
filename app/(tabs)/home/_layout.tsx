import { Stack } from 'expo-router';
import React from 'react';

const TabHomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerTitle: 'Home', headerShown: false }} />
    </Stack>
  );
};

export default TabHomeLayout;
