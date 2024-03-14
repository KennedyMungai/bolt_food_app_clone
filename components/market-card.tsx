import React from 'react';
import { Image, Pressable, View } from 'react-native';
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
      </View>
    </Pressable>
  );
};

export default MarketCard;

const styles = {
  cardContainer: 'mt-5',
  cardImage: 'w-full h-[180px] rounded-md',
};
