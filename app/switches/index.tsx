import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });
  //const toggleSwitch = () => setState(previousState => !previousState);

  return (
    <ThemedView margin>
      {/*<Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={state ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value => setState({...state, isActive: value}))}
          value={state.isActive}
        />*/}

      <ThemedCard>
        <ThemedSwitch 
          text='Activo'
          valor={state.isActive}
          onValueChange={value=> setState({...state, isActive: value})}
          className='mb-4'
        />

        <ThemedSwitch 
            text='Hambriento'
            valor={state.isHungry}
            onValueChange={value=> setState({...state, isHungry: value})}
            className='mb-4'
          />

        <ThemedSwitch 
          text='Feliz'
          valor={state.isHappy}
          onValueChange={value=> setState({...state, isHappy: value})}
          className='mb-4'
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
