export function getImageUrl(product) {
  // Assuming product has an id or similar attribute to differentiate images
  const images = [
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/D2A34B5C-000D-4EAA-BDBD-A6B20FB14E71.jpeg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/O1CN01u9h6Hn1WDNeLYKE90_!!2528122754-0-cib.jpg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/product_shop_16741845252.jpg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/product_shop_16741845252.jpg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/IMG_9857.jpeg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/product_shop_16335957875.jpg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/product_shop_16312409251.jpg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/product_shop_15738200201.jpg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/product_shop_1591202276.jpg',
    'https://www.tukkatalovely.com/assets/image/shop_product/tukkatalovely/product_shop_1576159701.jpg',
  ]; // Correctly formatted image names

  // You can use the product ID to select an image. Here is a simple example:
  const imageIndex = product.id % images.length; // Ensures the index is within the bounds of the images array
  return images[imageIndex]; // Return the corresponding image URL
}
