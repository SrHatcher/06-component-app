import useAnimation from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated, useAnimatedValue, Easing } from 'react-native';

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  } = useAnimation();

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
      <ThemedButton onPress={()=>{
          fadeIn({}); 
          startMovingTopPosition({
            easing: Easing.bounce,
            duration: 300
          })
        }} className='my-4'>
        fade in
      </ThemedButton>
      <ThemedButton onPress={()=>{fadeOut({})}} className='my-4'>
        fade in
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
