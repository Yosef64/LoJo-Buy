import { Tabs, useSegments } from 'expo-router';
import { View, StyleSheet, Pressable } from 'react-native';
import {
  Chrome as Home,
  ShoppingBag,
  Receipt,
  User,
  HomeIcon,
} from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function TabLayout() {
  const segments = useSegments();

  const currentRoute = segments[segments.length - 1]; // last segment of route
  console.log('Current route:', currentRoute);
  const shouldShowTabBar = ['(tabs)', 'cart', 'payment', 'account'].includes(
    currentRoute
  );
  return (
    <Tabs
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBar,
          { display: shouldShowTabBar ? 'flex' : 'none' },
        ],
        tabBarActiveTintColor: '#FF6B00',
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarButton: (props) => {
          const focused = props.accessibilityState?.selected;

          const animatedStyle = useAnimatedStyle(() => {
            return {
              transform: [
                {
                  scale: withSpring(focused ? 1.2 : 1, {
                    damping: 10,
                    stiffness: 100,
                  }),
                },
              ],
              backgroundColor: withTiming(focused ? '#FFF5EE' : 'transparent', {
                duration: 200,
              }),
            };
          });

          const iconColor = focused ? '#FF6B00' : '#9E9E9E';

          const icons = {
            index: <HomeIcon size={22} color={iconColor} />,
            cart: <ShoppingBag size={22} color={iconColor} />,
            payment: <Receipt size={22} color={iconColor} />,
            account: <User size={22} color={iconColor} />,
          };

          const routeName = route.name as keyof typeof icons;
          const Icon = icons[routeName];

          return (
            <AnimatedPressable
              {...props}
              style={[styles.tabButton, animatedStyle]}
            >
              <View style={styles.iconContainer}>
                {Icon}
                {focused && <View style={styles.dot} />}
              </View>
            </AnimatedPressable>
          );
        },
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="payment" />
      <Tabs.Screen name="account" />
      <Tabs.Screen name="notifications" options={{ href: null }} />
      <Tabs.Screen name="wishlist" options={{ href: null }} />
      <Tabs.Screen name="product/[id]" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 65,
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderTopWidth: 0,
    paddingBottom: 0,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 8,
    marginHorizontal: 6,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
  },
  dot: {
    position: 'absolute',
    bottom: -4,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FF6B00',
  },
});
