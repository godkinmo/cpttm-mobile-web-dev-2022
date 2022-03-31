import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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

      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            <Link href="/product/a" class="group">
              <a>
                <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                </div>
                <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>Focus Paper Refill</h3>
                  <p>$13</p>
                </div>
                <p class="mt-1 text-sm italic text-gray-500">3 sizes available</p>
              </a>
            </Link>

            <Link href="/product/b" class="group">
              <a>
                <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg" alt="Paper card sitting upright in walnut card holder on desk." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                </div>
                <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>Focus Card Holder</h3>
                  <p>$64</p>
                </div>
                <p class="mt-1 text-sm italic text-gray-500">Walnut</p>
              </a>
            </Link>

            <Link href="/product/c" class="group">
              <a>
                <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg" alt="Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                </div>
                <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>Focus Carry Case</h3>
                  <p>$32</p>
                </div>
                <p class="mt-1 text-sm italic text-gray-500">Heather Gray</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
