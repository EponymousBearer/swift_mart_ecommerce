/* eslint-disable @next/next/no-img-element */
export default function PromoSection() {
  return (
    <div className="py-20 relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-16 ">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
              New Designs are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new collection will shelter you from the harsh elements of a world that doesnt care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10 ">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className=" pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-6xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074255.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072181.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074251.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-photo/high-tech-futuristic-gaming-virtual-reality-headset_23-2151133178.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072201.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/AllProducts"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
