import React from 'react';
import { SafeAreaView, View } from 'react-native';

const TabHomeScreen = () => {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.header}>
        <View className={styles.addressContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default TabHomeScreen;

const styles = {
  container: 'flex-1 p-4 mt-12 bg-white',
  header: '',
  addressContainer: '',
};
