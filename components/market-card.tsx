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
    </Pressable>
  );
};

export default MarketCard;

const styles = {
  cardContainer: 'mt-5',
  cardImage: 'w-full h-[180px] rounded-md',
  overlay: 'absolute bg-white rounded-sm bottom-2 right-2',
  overlayText: 'text-sm font-semibold py-1 px-2',
};
