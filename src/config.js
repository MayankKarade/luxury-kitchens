export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = {
  Services: {
    servicesList: "/api/service",
    serviceDetail: "/api/service-detail",
  },
  Product: {
    product: "/api/product",
    productDetail: "/api/product-detail",
    productFilter: `${API_BASE_URL}/filter`,
  },
  Blog: {
    category: `${API_BASE_URL}/blog_category`,
    blogsList: `${API_BASE_URL}/blogs`,
    blogDetail: `${API_BASE_URL}/blog-detail`,
    cateBlog: `${API_BASE_URL}/single-blog-data`,
    singleDetail: `${API_BASE_URL}/single-blog-data`,
  },
  Gallery: {
    gallery: `${API_BASE_URL}/gallery`,
  },
  BookConsultation: {
    booking: `${API_BASE_URL}/book-consultation`,
  },
  Portfolio: {
    portfolio: `${API_BASE_URL}/portfolio`,
    details: `${API_BASE_URL}/portfolio-detail`,
  },
  Contact: {
    contact: `${API_BASE_URL}/contact-enquiry`,
  },
  Policy: {
    privacy: `${API_BASE_URL}/privacy_policy`,
    terms: `${API_BASE_URL}/terms_policy`,
    return: `${API_BASE_URL}/return_policy`,
  },
};
