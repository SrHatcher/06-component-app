import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated, useAnimatedValue, Easing } from 'react-native';

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = ()=>{
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
      //easing: Easing.elastic(10)
      easing: Easing.bounce
    }).start();
  }

  const fadeOut = ()=>{
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    //}).start(()=>animatedTop.setValue(-100));
  }).start(()=>animatedTop.resetAnimation());
  }

  return (
    <ThemedView margin className='flex-1 items-center justify-center'>
      <Animated.View 
      className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
      style={{
        width: 150,
        height: 150,
        opacity: animatedOpacity,
        transform: [{translateY: animatedTop}]
      }}
      />
      <ThemedButton onPress={fadeIn} className='my-4'>
        fade in
      </ThemedButton>
      <ThemedButton onPress={fadeOut} className='my-4'>
        fade in
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
