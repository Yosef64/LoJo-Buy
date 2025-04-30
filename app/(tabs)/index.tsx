import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import { Search, ShoppingCart, Bell, Menu } from 'lucide-react-native';

// Mock Data
import { categories, products, featuredProducts } from '@/data/products';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Brooklyn Simmons</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => router.push('/cart')}
          >
            <ShoppingCart size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => router.push('/notifications')}
          >
            <Bell size={22} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#9E9E9E" />
            <TextInput 
              style={styles.searchInput} 
              placeholder="Search..."
              placeholderTextColor="#9E9E9E"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Menu size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categories.map((category, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.name && styles.selectedCategory
                ]}
                onPress={() => setSelectedCategory(category.name)}
              >
                <Text 
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category.name && styles.selectedCategoryText
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Product */}
        <View style={styles.featuredContainer}>
          <Image 
            source={{ uri: featuredProducts[0].image }} 
            style={styles.featuredImage}
          />
          <View style={styles.featuredOverlay}>
            <Text style={styles.featuredTitle}>{featuredProducts[0].title}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>★ {featuredProducts[0].rating}</Text>
              <Text style={styles.reviewCount}>({featuredProducts[0].reviews})</Text>
            </View>
            <Text style={styles.featuredLocation}>{featuredProducts[0].location}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.salePrice}>${featuredProducts[0].salePrice}</Text>
            </View>
          </View>
        </View>

        {/* Wardrobe Management */}
        <View style={styles.productSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Wardrobe Management</Text>
            <Link href="/wishlist" asChild>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </Link>
          </View>
          
          <View style={styles.productsGrid}>
            {products.slice(0, 4).map((product, index) => (
              <Link key={index} href={`/product/${product.id}`} asChild>
                <TouchableOpacity style={styles.productCard}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-{product.discount}%</Text>
                  </View>
                  <Image source={{ uri: product.image }} style={styles.productImage} />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <View style={styles.productRating}>
                      <Text style={styles.ratingText}>★ {product.rating}</Text>
                    </View>
                    <View style={styles.priceRow}>
                      <Text style={styles.originalPrice}>${product.originalPrice}</Text>
                      <Text style={styles.salePrice}>${product.salePrice}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
  },
  userInfo: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 14,
    color: '#9E9E9E',
    fontFamily: 'Inter-Regular',
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#000000',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  categoriesSection: {
    marginBottom: 20,
  },
  categoriesScroll: {
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  selectedCategory: {
    backgroundColor: '#FF6B00',
  },
  categoryButtonText: {
    fontFamily: 'Inter-Medium',
    color: '#000000',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  featuredContainer: {
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  featuredTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    color: '#FFD700',
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  reviewCount: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginLeft: 4,
  },
  featuredLocation: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
  priceContainer: {
    marginTop: 8,
  },
  productSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  seeAllText: {
    color: '#FF6B00',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  productCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Inter-Bold',
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 8,
  },
  productName: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginBottom: 4,
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 12,
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
    marginRight: 8,
    fontFamily: 'Inter-Regular',
  },
  salePrice: {
    fontSize: 14,
    color: '#FF6B00',
    fontFamily: 'Inter-SemiBold',
  },
});