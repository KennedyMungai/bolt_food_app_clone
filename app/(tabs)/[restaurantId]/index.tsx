import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const IndividualRestaurantPage = () => {
  const { restaurantId } = useLocalSearchParams();

  console.log(restaurantId);

  return (
    <View>
      <Text>IndividualRestaurantPage</Text>
    </View>
  );
};

export default IndividualRestaurantPage;
