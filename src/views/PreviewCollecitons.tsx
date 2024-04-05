/* eslint-disable @next/next/no-img-element */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'Headphones',
      description: 'Listen what you want',
      imageSrc: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072227.jpg?w=360',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/category/headphones',
    },
    {
      name: 'Monitors',
      description: 'Watch Anything in UHDR',
      imageSrc: 'https://img.freepik.com/free-photo/gaming-room-no-people-equiped-with-rgb-powerful-personal-computer-online-videogames-tournament-gaming-chair-first-person-shooter-game-screen-cozy-room-with-neon-light_482257-12428.jpg?w=826',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/category/monitors',
    },
    {
      name: 'Accessories',
      description: 'Daily commute essentials',
      imageSrc: 'https://img.freepik.com/free-photo/laptop-with-camera-sd-card-pink-table_23-2148037002.jpg?w=740',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/category/accessories',
    },
  ]
  
  export default function PreviewCollections() {
    return (
      <div className="py-5">
        <div className="mx-auto max-w-6xl px-8 md:px-16 lg:px-0">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-white">Collections</h2>
  
            <div className="mt-6 space-y-10 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-white">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-white">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  