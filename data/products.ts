// Mock data for the e-commerce app

// Categories
export const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Women' },
  { id: 3, name: 'Men' },
  { id: 4, name: 'Shoes' },
  { id: 5, name: 'Kids' },
  { id: 6, name: 'Sport' },
  { id: 7, name: 'Accessories' },
];

// Featured Products
export const featuredProducts = [
  {
    id: 'featured1',
    title: 'Casual Skinny Turtleneck Slim Sweater',
    image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg',
    rating: 4.6,
    reviews: 121,
    location: 'Metaverse Department ASO59',
    originalPrice: 69.99,
    salePrice: 49.99,
  }
];

// Products
export const products = [
  {
    id: 'p1',
    name: 'Nike Winfu 8',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    rating: 4.7,
    originalPrice: 599,
    salePrice: 349,
    discount: 42,
    detailImage: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    detailTitle: 'Nike SB I-Shoe',
    category: 'Whitman Nike',
    totalReviews: '01',
    isFavorite: true,
    colorVariants: [
      { color: 'blue', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg' },
      { color: 'white', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg' },
      { color: 'gray', image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg' },
      { color: 'black', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg' },
      { color: 'red', image: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg' },
    ]
  },
  {
    id: 'p2',
    name: 'Mesh T-Shirt',
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
    rating: 4.5,
    originalPrice: 600,
    salePrice: 499,
    discount: 17,
    detailImage: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
    detailTitle: 'Oversized Fit Printed Mesh T-Shirt',
    category: 'Women\'s T-Shirt',
    totalReviews: '01',
    isFavorite: false,
    colorVariants: [
      { color: 'blue', image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg' },
      { color: 'white', image: 'https://images.pexels.com/photos/8346230/pexels-photo-8346230.jpeg' },
      { color: 'gray', image: 'https://images.pexels.com/photos/7679684/pexels-photo-7679684.jpeg' },
      { color: 'black', image: 'https://images.pexels.com/photos/8346188/pexels-photo-8346188.jpeg' },
      { color: 'red', image: 'https://images.pexels.com/photos/8346656/pexels-photo-8346656.jpeg' },
    ]
  },
  {
    id: 'p3',
    name: 'Classic Fit Short',
    image: 'https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg',
    rating: 4.3,
    originalPrice: 450,
    salePrice: 399,
    discount: 11,
    detailImage: 'https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg',
    detailTitle: 'Classic Fit Short',
    category: 'Whitman Fashion',
    totalReviews: '05',
    isFavorite: true,
    colorVariants: [
      { color: 'blue', image: 'https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg' },
      { color: 'white', image: 'https://images.pexels.com/photos/6311166/pexels-photo-6311166.jpeg' },
      { color: 'gray', image: 'https://images.pexels.com/photos/6310998/pexels-photo-6310998.jpeg' },
      { color: 'black', image: 'https://images.pexels.com/photos/6311137/pexels-photo-6311137.jpeg' },
      { color: 'red', image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg' },
    ]
  },
  {
    id: 'p4',
    name: 'Nike Dunk High',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    rating: 4.8,
    originalPrice: 699,
    salePrice: 599.75,
    discount: 14,
    detailImage: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    detailTitle: 'Nike Dunk High',
    category: 'Whitman shoes',
    totalReviews: '07',
    isFavorite: true,
    colorVariants: [
      { color: 'blue', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg' },
      { color: 'white', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg' },
      { color: 'gray', image: 'https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg' },
      { color: 'black', image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg' },
      { color: 'red', image: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg' },
    ]
  },
];

// Wishlist Products
export const wishlistProducts = [
  {
    id: 'w1',
    name: 'Nike Dunk High',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    category: 'Whitman shoes',
    price: 599.75,
    isFavorite: true,
  },
  {
    id: 'w2',
    name: 'Classic Fit Short',
    image: 'https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg',
    category: 'Whitman Fashion',
    price: 399,
    isFavorite: true,
  },
  {
    id: 'w3',
    name: 'Nike SB I-shoe',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    category: 'Whitman Nike',
    price: 45,
    isFavorite: true,
  },
  {
    id: 'w4',
    name: 'T-shirt basique en',
    image: 'https://images.pexels.com/photos/8346230/pexels-photo-8346230.jpeg',
    category: 'Whitman Fashion',
    price: 375.50,
    isFavorite: true,
  },
];

// Cart Items
export const cartItems = [
  {
    id: 'c1',
    name: 'Nike Dunk High',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    variant: 'Blue, Size: 9',
    price: 599.75,
    quantity: 1,
  },
  {
    id: 'c2',
    name: 'Classic Fit Short',
    image: 'https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg',
    variant: 'Blue, Size: M',
    price: 399,
    quantity: 2,
  },
];

// Helper function to get product by ID
export function getProductById(id: string | undefined) {
  if (!id) return null;
  
  // Check in regular products
  const product = products.find(p => p.id === id);
  if (product) return product;
  
  // Check in wishlist products
  const wishlistProduct = wishlistProducts.find(p => p.id === id);
  if (wishlistProduct) {
    // Find full product details from products array
    const fullProduct = products.find(p => 
      p.name.toLowerCase().includes(wishlistProduct.name.toLowerCase())
    );
    return fullProduct || null;
  }
  
  return null;
}