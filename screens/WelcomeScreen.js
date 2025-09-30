import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView
} from 'react-native';

export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    console.log("✅ WelcomeScreen mounted");
    const timer = setTimeout(() => {
      navigation.replace('SignupStep1'); // Auto navigate after 1.5s
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/GIGS_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.fromText}>From</Text>
        <Text style={styles.systemAddictText}>SystemAddict</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80, // Gives space for footer
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 30,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  fromText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '300',
  },
  systemAddictText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
