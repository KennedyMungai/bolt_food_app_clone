import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import RestaurantDetails from '~/components/restaurant-details';

const IndividualRestaurantPage = () => {
  const { restaurantId } = useLocalSearchParams();

  console.log(restaurantId);

  return <RestaurantDetails id={restaurantId as string} />;
};

export default IndividualRestaurantPage;
