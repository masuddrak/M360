import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createProductsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ limit, skip }) => `products?limit=${limit}&skip=${skip}`,
        }),
        getProductId: builder.query({
            query: (productId) => `products/${productId}`,
        }),
        getCategoryProduct: builder.query({
            query: (productId) => `products/${productId}`,
        }),

        getCategories: builder.query({
            query: () => "products/categories",
        }),
        getCategoriesSlug: builder.query({
            query: (slug) => `products/category/${slug}`,
        }),
    }),


})

export const
    { useGetProductsQuery,
        useGetProductIdQuery,
        useGetCategoriesQuery,
        useGetCategoryProductQuery,
        useGetCategoriesSlugQuery
    } = createProductsApi;