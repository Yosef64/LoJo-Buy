import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react-native';

import { getProductById } from '@/data/products';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const product = getProductById(id);
  
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');
  
  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const colorOptions = [
    { id: 'blue', color: '#3B82F6' },
    { id: 'gray', color: '#D1D5DB' },
    { id: 'white', color: '#FFFFFF', border: true },
    { id: 'black', color: '#111827' },
    { id: 'red', color: '#EF4444' },
  ];

  const sizeOptions = ['S', 'M', 'L', 'XL'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Product</Text>
        <TouchableOpacity style={styles.cartButton}>
          <ShoppingCart size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.productImageContainer}>
          <Image 
            source={{ uri: product.detailImage }} 
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Color Variants */}
        <View style={styles.variantsContainer}>
          {product.colorVariants.map((variant, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.variantButton}
            >
              <Image 
                source={{ uri: variant.image }} 
                style={styles.variantImage}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{product.detailTitle}</Text>
          <Text style={styles.productCategory}>{product.category}</Text>

          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Colors & Size</Text>
            <View style={styles.reviewsContainer}>
              <Text style={styles.reviewCount}>{product.totalReviews}</Text>
              <Heart size={14} color="#000" fill={product.isFavorite ? "#FF3B30" : "none"} />
            </View>
          </View>

          {/* Colors */}
          <View style={styles.colorsContainer}>
            {colorOptions.map((color) => (
              <TouchableOpacity
                key={color.id}
                style={[
                  styles.colorOption,
                  { backgroundColor: color.color },
                  color.border && styles.colorOptionBorder,
                  selectedColor === color.id && styles.selectedColorOption,
                ]}
                onPress={() => setSelectedColor(color.id)}
              />
            ))}
          </View>

          {/* Sizes */}
          <View style={styles.sizesContainer}>
            {sizeOptions.map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeOption,
                  selectedSize === size && styles.selectedSizeOption,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text 
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.description}>
            When users select an item, they are taken to a stock cart interface where they can review their chosen products, view detailed descriptions, and check size, color and quantity...
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Read more</Text>
          </TouchableOpacity>

          {/* People who pinned this */}
          <View style={styles.socialProofContainer}>
            <View style={styles.avatarsRow}>
              {Array(5).fill(0).map((_, i) => (
                <Image 
                  key={i}
                  source={{ uri: `https://i.pravatar.cc/150?img=${20 + i}` }} 
                  style={[styles.avatar, { marginLeft: i > 0 ? -15 : 0 }]}
                />
              ))}
            </View>
            <Text style={styles.pinnedText}>475+ People Pinned this</Text>
          </View>

          {/* Price and Add to Cart */}
          <View style={styles.bottomContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>${product.originalPrice}</Text>
              <Text style={styles.salePrice}>${product.salePrice}</Text>
            </View>

            <TouchableOpacity style={styles.addToCartButton}>
              <ShoppingCart size={20} color="#FFFFFF" />
              <Text style={styles.addToCartText}>Add to card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  cartButton: {
    padding: 8,
  },
  productImageContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#F5F5F5',
  },
  productImage: {
    width: 240,
    height: 240,
  },
  variantsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  variantButton: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 8,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  variantImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 16,
  },
  productTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Inter-Regular',
    marginBottom: 16,
  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitleText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewCount: {
    marginRight: 8,
    fontFamily: 'Inter-Medium',
  },
  colorsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
  },
  colorOptionBorder: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedColorOption: {
    borderWidth: 2,
    borderColor: '#FF6B00',
  },
  sizesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  sizeOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  selectedSizeOption: {
    backgroundColor: '#FF6B00',
  },
  sizeText: {
    fontFamily: 'Inter-Medium',
  },
  selectedSizeText: {
    color: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4B5563',
    fontFamily: 'Inter-Regular',
    marginBottom: 8,
  },
  readMore: {
    fontSize: 14,
    color: '#FF6B00',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 20,
  },
  socialProofContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarsRow: {
    flexDirection: 'row',
    marginRight: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  pinnedText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  originalPrice: {
    fontSize: 14,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter-Regular',
  },
  salePrice: {
    fontSize: 20,
    color: '#FF6B00',
    fontFamily: 'Inter-Bold',
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#FF6B00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    marginLeft: 8,
  },
});