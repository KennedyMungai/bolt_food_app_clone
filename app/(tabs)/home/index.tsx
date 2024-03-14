import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const TabHomeScreen = () => {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.header}>
        <View className={styles.addressContainer}>
          <MaterialCommunityIcons name="map-marker-outline" size={28} />
          <Text className={styles.addressText}>Your Address Here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TabHomeScreen;

const styles = {
  container: 'flex-1 p-4 mt-12 bg-white',
  header: 'flex-row justify-between',
  addressContainer: 'flex-row items-center',
  addressText: 'ml-2',
};
