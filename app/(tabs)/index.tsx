import {Image} from 'expo-image';
import {StyleSheet, Text} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import {ThemedView} from '@/components/ThemedView';
import * as SecureStore from "expo-secure-store";
import {useEffect, useState} from "react";
import axios from "@/scripts/axiosConfig";
import {YStack} from "tamagui";
import {ProductCard} from "@/components/ProductCard";


export default function HomeScreen() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get('products')
      .then(reponse => {
        setProducts(reponse.data)
      })
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <YStack>
        {products.map(product => (


            <ProductCard key={product.id}
                product={product}
               animation="bouncy"
               size="$4"
               width={250}
               height={300}
               scale={0.9}
               hoverStyle={{scale: 0.925}}
               pressStyle={{scale: 0.875}}
            />
            ))}
          </YStack>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
