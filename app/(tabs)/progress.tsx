import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function progressScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F5A623', dark: '#333333' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Workout Planner</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="body">Plan your exercises and stay fit!</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});

