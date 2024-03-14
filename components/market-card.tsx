import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { dummyRestaurantsData } from '~/assets/data/restaurantsData';

const MarketCard = () => {
  return (
    <Pressable className={styles.cardContainer}>
      <View>
        <Image
          source={{ uri: dummyRestaurantsData[0].profileImage }}
          className={styles.cardImage}
          resizeMode="cover"
        />
        <View className={styles.overlay}>
          <Text className={styles.overlayText}>{dummyRestaurantsData[0].delivery} min</Text>
        </View>
      </View>
      <View className={styles.textContainer}>
        <Text className={styles.restaurantName}>{dummyRestaurantsData[0].name}</Text>
        <View className={styles.ratingContainer}>
          <FontAwesome name="star" size={24} />
          <Text className={styles.ratingText}>{dummyRestaurantsData[0].rating}</Text>
        </View>
      </View>
      <Text className={styles.priceText}>$ {dummyRestaurantsData[0].price}</Text>
    </Pressable>
  );
};

export default MarketCard;

const styles = {
  cardContainer: 'mt-5',
  cardImage: 'w-full h-[180px] rounded-md',
  overlay: 'absolute bg-white rounded-sm bottom-2 right-2',
  overlayText: 'text-sm font-semibold py-1 px-2',
  textContainer: 'flex flex-row items-center justify-between py-2',
  restaurantName: 'font-bold text-2xl text-neutral-600',
  ratingContainer: 'flex flex-row gap-5',
  ratingText: 'text-2xl text-neutral-500',
  priceText: 'font-semibold text-[1.5rem] text-orange-500',
};
