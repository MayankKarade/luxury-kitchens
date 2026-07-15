export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = {
  Services: {
    servicesList: `${API_BASE_URL}/service`,
    serviceDetail: `${API_BASE_URL}/service-detail`,
  },
  Product: {
    product: `${API_BASE_URL}/product`,
    productDetail: `${API_BASE_URL}/product_detail`,
    productFilter: `${API_BASE_URL}/filter`,
  },
  Blog: {
    category: `${API_BASE_URL}/blog_category`,
    blogsList: `${API_BASE_URL}/blogs`,
    blogDetail: `${API_BASE_URL}/blog-detail`,
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
};
