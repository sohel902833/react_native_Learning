import React, {useState, useRef} from 'react';
import {View, Animated, PanResponder, Text} from 'react-native';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const progressValue = useRef(new Animated.Value(0)).current;

  // Define the pan responder events
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Start the animation when user taps and holds
        Animated.timing(progressValue, {
          toValue: 1,
          duration: 3000, // Set the duration of the animation
          useNativeDriver: true,
        }).start();
      },
      onPanResponderRelease: () => {
        // Stop the animation when user releases the touch
        progressValue.stopAnimation(value => setProgress(value));
        progressValue.setValue(0);
      },
      onPanResponderTerminate: () => {
        // Stop the animation when user cancels the touch
        progressValue.stopAnimation(value => setProgress(value));
        progressValue.setValue(0);
      },
      onPanResponderMove: Animated.event([null, {dx: progressValue}], {
        useNativeDriver: false,
      }),
    }),
  ).current;

  return (
    <View {...panResponder.panHandlers}>
      <Animated.View
        style={{
          width: `${progress * 100}%`,
          height: 10,
          backgroundColor: 'blue',
        }}
      />
    </View>
  );
};

export default ProgressBar;
