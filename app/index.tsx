import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import MenuItem from '@/presentation/menu/menuItem';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { View } from 'react-native';

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index)=> (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index===0}
          isLast={index===uiMenuRoutes.length - 1}
        />
      ))}
      <View style={{height: 20}} />
      {uiMenuRoutes.map((route, index)=> (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index===0}
          isLast={index===uiMenuRoutes.length - 1}
        />
      ))}
       <View style={{height: 20}} />
      {menuRoutes.map((route, index)=> (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index===0}
          isLast={index===uiMenuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};
export default ComponentsApp;
