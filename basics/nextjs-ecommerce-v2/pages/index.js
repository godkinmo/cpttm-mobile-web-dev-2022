import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import axios from 'axios'

export async function getStaticProps(context) {
  const gql = String.raw

  const query = gql`
    query PRODUCTS_QUERY {
      products(first: 5) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `
  const res = await axios({
    url: process.env.NEXT_PUBLIC_API_URL,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },
    data: { query, variables: {} }
  })

  return {
    props: {
      products: res.data.data.products.edges
    },
  }
}

export default function Home({ products }) {
  useEffect(() => {
    console.log(products)
  }, [])

  return (
    <>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Headless  </span>
            <span className="block text-indigo-600 xl:inline">E-commerce</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Mobile web develop</p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"> Live demo </a>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {
              products.map((product) => {
                return (
                  <Link href={`/product/${product.node.handle}`} key={product.node.id}>
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                        <img
                          src={product.node.images.edges[0].node.transformedSrc}
                          alt={product.node.images.edges[0].node.altText}
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                        <h3 className="animate-bounce bg-red-500 group-hover:bg-green-500 duration-300">{product.node.title}</h3>
                        <p>${product.node.priceRange.minVariantPrice.amount / 100}</p>
                      </div>
                      <p className="mt-1 text-sm italic text-gray-500">3 sizes available</p>
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
