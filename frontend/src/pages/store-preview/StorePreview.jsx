// const PRODUCTS = [
//   {
//     id: 1,
//     name: "N95 Mask",
//     description: "High-filtration mask for polluted air",
//     price: "₹299",
//     tag: "Essential",
//     image: "/store/n95-mask.png",
//   },
//   {
//     id: 2,
//     name: "Air Purifier",
//     description: "HEPA purifier for indoor air quality",
//     price: "₹8,999",
//     tag: "Indoor",
//     image: "/store/air-purifier.png",
//   },
//   {
//     id: 3,
//     name: "AQI Monitor",
//     description: "Real-time indoor air quality sensor",
//     price: "₹2,499",
//     tag: "Monitor",
//     image: "/store/aqi-monitor.png",
//   },
//   {
//     id: 4,
//     name: "Activated Carbon Filter",
//     description: "Reduces odors and harmful gases",
//     price: "₹1,199",
//     tag: "Filter",
//     image: "/store/activated-carbon-filter.png",
//   },
// ];

const PRODUCTS = [
  {
    id: 1,
    name: "N95 Mask",
    description: "High-filtration mask for polluted air",
    price: "₹299",
    tag: "Essential",
    image: "/store/n95-mask.png",
  },
  {
    id: 2,
    name: "Air Purifier",
    description: "HEPA purifier for indoor air quality",
    price: "₹8,999",
    tag: "Indoor",
    image: "/store/air-purifier.png",
  },
  {
    id: 3,
    name: "AQI Monitor",
    description: "Real-time indoor air quality sensor",
    price: "₹2,499",
    tag: "Monitor",
    image: "/store/aqi-monitor.png",
  },
  {
    id: 4,
    name: "Activated Carbon Filter",
    description: "Reduces odors and harmful gases",
    price: "₹1,199",
    tag: "Filter",
    image: "/store/activated-carbon-filter.png",
  },



  {
    id: 5,
    name: "PM2.5 Anti-Pollution Mask",
    description: "Reusable mask with PM2.5 replaceable filter",
    price: "₹499",
    tag: "Outdoor",
    image: "/store/pm2.5-anti-pollution-mask.png",
  },
  {
    id: 6,
    name: "Replacement HEPA Filter",
    description: "High-efficiency replacement filter for air purifiers",
    price: "₹2,199",
    tag: "Filter",
    image: "/store/replacement-hepa-filter.png",
  },
  {
    id: 7,
    name: "Portable Air Purifier",
    description: "Compact purifier for desks and small rooms",
    price: "₹4,999",
    tag: "Portable",
    image: "/store/portable-air-purifier.png",
  },
  {
    id: 8,
    name: "Car Air Purifier",
    description: "Removes dust and pollutants inside vehicles",
    price: "₹3,499",
    tag: "Vehicle",
    image: "/store/car-air-purifier.png",
  },
  {
    id: 9,
    name: "Smart Humidifier",
    description: "Maintains optimal humidity for better air quality",
    price: "₹2,799",
    tag: "Indoor",
    image: "/store/smart-humidifier.png",
  },
  {
    id: 10,
    name: "Indoor Pollution Test Kit",
    description: "DIY kit to measure indoor air pollutants",
    price: "₹1,599",
    tag: "Monitor",
    image: "/store/indoor-pollution-test-kit.png",
  },
  {
    id: 11,
    name: "Air Quality Mobile Sensor",
    description: "Clip-on sensor to track AQI on the go",
    price: "₹3,999",
    tag: "Portable",
    image: "/store/portable-clip.png",
  },
  {
    id: 12,
    name: "Odor Absorbing Gel",
    description: "Natural gel to neutralize indoor odors",
    price: "₹699",
    tag: "Essential",
    image: "/store/odor-absorbing-gel.png",
  },
];


import ProductCard from "./ProductCard";

export default function StorePreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900">
          AQI Safety Essentials
        </h2>
        <p className="mt-3 text-gray-600">
          Products curated to help you reduce exposure to air pollution.
          Purchasing will be enabled soon.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
