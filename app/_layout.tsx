import '../global.css';

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="[restaurantId]"
        options={{ headerShown: true, headerTitle: 'Restaurant Details' }}
      />
    </Stack>
  );
}
