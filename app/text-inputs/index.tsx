import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: ""
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height": undefined} >
    <ScrollView>
    <ThemedView margin >
      <ThemedCard className='mb-5'>
        <ThemedTextInput 
          value={form.name}
          onChangeText={value=>setForm({...form, name: value})}
          placeholder='Nombre'
          autoCapitalize='words'
          keyboardType='number-pad'
        />
        <ThemedTextInput 
          value={form.email}
          onChangeText={value=>setForm({...form, email: value})}
          placeholder='correo electrolitos'
          autoCapitalize='words'
          keyboardType='email-address'
        />
        <ThemedTextInput 
          value={form.phone}
          onChangeText={value=>setForm({...form, phone: value})}
          placeholder='correo electrolitos'
          autoCapitalize='words'
          keyboardType='name-phone-pad'
        />
      </ThemedCard>

      <ThemedCard className='mb-5'>
        <ThemedText>
          {JSON.stringify(form, null, 2)}
        </ThemedText>
      </ThemedCard>
      <ThemedCard className='mb-5'>
        <ThemedText>
          {JSON.stringify(form, null, 2)}
        </ThemedText>
      </ThemedCard>
      <ThemedCard className='mb-5'>
        <ThemedText>
          {JSON.stringify(form, null, 2)}
        </ThemedText>
      </ThemedCard>
      <ThemedCard className='mb-5'>
        <ThemedText>
          {JSON.stringify(form, null, 2)}
        </ThemedText>
      </ThemedCard>
      <ThemedCard className='mb-5'>
        <ThemedText>
          {JSON.stringify(form, null, 2)}
        </ThemedText>
      </ThemedCard>

      <ThemedView>
        <ThemedTextInput 
          value={form.phone}
          onChangeText={value=>setForm({...form, phone: value})}
          placeholder='correo electrolitos'
          autoCapitalize='words'
          keyboardType='name-phone-pad'
        />
      </ThemedView>
    </ThemedView>
    {isIOS && <View style={{
      height: 100
    }} />}
    </ScrollView> 
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
