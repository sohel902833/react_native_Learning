import React, {useState} from 'react';
import {Text, View, Animated} from 'react-native';

interface Props {
  step: number;
  steps: number;
  height: number;
}

const ProgressIndecator: React.FC<Props> = ({step, steps, height}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      useNativeDriver: true,
    }).start();
  }, []);
  React.useEffect(() => {
    //-width
    const newValue = -width + (width * step) / steps;
    reactive.setValue(newValue);
  }, [step, width]);

  return (
    <>
      <Text style={{fontSize: 12, fontWeight: '900', marginBottom: 10}}>
        {step}/{steps}
      </Text>
      <View
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: height,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            height,
            borderRadius: height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}></Animated.View>
      </View>
    </>
  );
};

export default ProgressIndecator;
