import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { dummyRestaurantsData } from '~/assets/data/restaurantsData';
import MarketCard from '~/components/market-card';

const TabHomeScreen = () => {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.header}>
        <View className={styles.addressContainer}>
          <MaterialCommunityIcons name="map-marker-outline" size={28} />
          <Text className={styles.addressText}>Your Address Here</Text>
        </View>
      </View>

      <FlatList
        data={dummyRestaurantsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <Text className={styles.cardTitle}>All Restaurants and Stores</Text>
        )}
        renderItem={({ item }) => <MarketCard restaurantData={item} />}
      />
    </SafeAreaView>
  );
};

export default TabHomeScreen;

const styles = {
  container: 'flex-1 p-4 mt-12 bg-white',
  header: 'flex-row justify-between',
  addressContainer: 'flex-row items-center',
  addressText: 'ml-2',
  cardTitle: 'font-bold text-xl text-neutral-600 mt-4 mb-2',
};
