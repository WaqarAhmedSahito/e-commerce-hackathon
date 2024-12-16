import Link from "next/link"
import Card from "../component/Card"
import Footer from "../component/Footer"
import Header from "../component/Header"

export default function products() {
  return (
    <div>
      <Header/>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 p-4 ">
        <div className="space-y-4 ">
          <h3 className="font-semibold text-xl ">New (500)</h3>
          <div className="border-b-2 border-black p-3 flex-nowrap">
            <p>Shoes</p>
            <p>Sports Bras</p>
            <p>Tops & T-Shirts</p>
            <p>Hoodies & Sweatshirt</p>
            <p>Jackets</p>
            <p>Trousers & Tights</p>
            <p>Shorts</p>
            <p>Tracksuits</p>
            <p>Jumpsuits & Rompers</p>
            <p>Skirts & Dresses</p>
            <p>Socks</p>
            <p>Accessories & Equipment</p>
          </div>
          <div className="border-b-2 border-black pb-4">
            <h4 className="font-medium text-lg">Gender</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="men" className="mr-2" />
                <label htmlFor="men">Men</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="women" className="mr-2" />
                <label htmlFor="women">Women</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="unisex" className="mr-2" />
                <label htmlFor="unisex">Unisex</label>
              </div>
            </div>
          </div>

          <div className="border-b-2 border-black pb-4">
            <h4 className="font-medium text-lg">Kids</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="boys" className="mr-2" />
                <label htmlFor="boys">Boys</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="girls" className="mr-2" />
                <label htmlFor="girls">Girls</label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg">Shop By Price</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="under-2500" className="mr-2" />
                <label htmlFor="under-2500">Under ₹ 2,500</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="2500-5000" className="mr-2" />
                <label htmlFor="2500-5000">₹ 2 501.00 - ₹ 7 500.00</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full md:w-3/4 p-4">
        <div className=" grid-cols-3 gap-4">

          <div className="flex flex-nowrap space-x-4 items-end justify-end ">
            <p>Hide Filters</p>
            <img src="/filter-1.png" alt="filter" />
            <p>Sort By</p>
            <img src="/arrow-1.png" alt="arrow down" />
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1">
            <Link
              href={{
                pathname: "/productdetail", // Navigate to product detail page
                query: {
                  image: "/product/product-1.png",
                  name: "Nike Air Force 1 Mid'07'",
                  price: "₹ 10,795.00",
                  category: "Men's Shoes",
                },
              }}
            >
              <Card
                image="/product/product-1.png"
                name="Nike Air Force 1 Mid'07'"
                price="₹ 10,795.00"
                category="Men's Shoes"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail", // Navigate to product detail page
                query: {
                  image: "/product/product-2.png",
                  name: "Nike Court Vision Low Next Nature",
                  price: "₹ 4,995.00",
                  category: "Men's Shoes"
                },
              }}>

              <Card
                image="/product/product-2.png"
                name="Nike Court Vision Low Next Nature"
                price="₹ 4,995.00"
                category="Men's Shoes"

              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail", // Navigate to product detail page
                query: {
                  image: "/product/product-3.png",
                  name: "Nike Air Force 1 PLT.AF.ORM",
                  price: "₹ 8,695.00",
                  category: "Women's Shoes"
                },
              }}>
              <Card
                image="/product/product-3.png"
                name="Nike Air Force 1 PLT.AF.ORM"
                price="₹ 8,695.00"
                category="Women's Shoes"

              /></Link>
            <Link
              href={{
                pathname: "/productdetail", // Navigate to product detail page
                query: {
                  image: "/product/product-4.png",
                  name: "Nike Air Force 1 React",
                  price: "₹ 13,295.00",
                  category: "Men's Shoes"
                },
              }}>
              <Card
                image="/product/product-4.png"
                name="Nike Air Force 1 React"
                price="₹ 13,295.00"
                category="Men's Shoes"

              /></Link>
            <Link
              href={{
                pathname: "/productdetail", // Navigate to product detail page
                query: {
                  image: "/product/product-5.png",
                  name: "Air Jordan 1 Elevate Low",
                  price: "₹ 11,895.00",
                  category: "Women's Shoes"
                },
              }}>
              <Card
                image="/product/product-5.png"
                name="Air Jordan 1 Elevate Low"
                price="₹ 11,895.00"
                category="Women's Shoes"

              /></Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-6.png",
                  name: "Nike Standard Issue",
                  price: "₹ 2 895.00",
                  category: "Women's Basketball Jersey",
                },
              }}
            >
              <Card
                image="/product/product-6.png"
                name="Nike Standard Issue"
                price="₹ 2 895.00"
                category="Women's Basketball Jersey"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail",
                // Navigate to product detail page
                query: {
                  image: "/product/product-7.png",
                  name: "Nike Pegasus Trail 4",
                  price: "₹ 11,895.00",
                  category: "Women's Shoes"
                },
              }}>
              <Card
                image="/product/product-7.png"
                name="Nike Pegasus Trail 4"
                price="₹ 11,895.00"
                category="Women's Shoes"

              /></Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-8.png",
                  name: "Nike Dri-FIT UV Hyverse'",
                  price: "₹ 2 495.00",
                  category: "Men's Short-Sleeve Graphic Fitness Top",
                },
              }}
            >
              <Card
                image="/product/product-8.png"
                name="Nike Dri-FIT UV Hyverse'"
                price="₹ 2 495.00"
                category="Men's Short-Sleeve Graphic Fitness Top"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-9.png",
                  name: "Nike Court Vision Low",
                  price: "₹ 5,695.00",
                  category: "Men's Shoe",
                },
              }}
            >
              <Card
                image="/product/product-9.png"
                name="Nike Court Vision Low"
                price="₹ 5,695.00"
                category="Men's Shoe"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-10.png",
                  name: "Nike Dri-FIT Ready",
                  price: "₹ 10,795.00",
                  category: "Men's Short-Sleeve Fitness Top",
                },
              }}
            >
              <Card
                image="/product/product-10.png"
                name="Nike Dri-FIT Ready"
                price="₹ 10,795.00"
                category="Men's Short-Sleeve Fitness Top"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-11.png",
                  name: "Nike One Leak Protection: Period",
                  price: " ₹ 3 395.00",
                  category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
                },
              }}
            >
              <Card
                image="/product/product-11.png"
                name="Nike One Leak Protection: Period"
                price=" ₹ 3 395.00"
                category="Women's Mid-Rise 18cm (approx.) Biker Shorts"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-12.png",
                  name: "Nike Air Zoom Vomero 16",
                  price: "₹ 14,995.00",
                  category: "Men's Road Running Shoes",
                },
              }}
            >
              <Card
                image="/product/product-12.png"
                name="Nike Air Zoom Vomero 16"
                price="₹ 14,995.00"
                category="Men's Road Running Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-13.png",
                  name: "Nike Dri-FIT ADV",
                  price: "₹ 1,995.00",
                  category: "Women's T-Shirt",
                },
              }}
            >
              <Card
                image="/product/product-13.png"
                name="Nike Dri-FIT ADV"
                price="₹ 1,995.00"
                category="Women's T-Shirt"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-14.png",
                  name: "Nike Air Monarch IV",
                  price: "₹ 4,495.00",
                  category: "Men's Training Shoes",
                },
              }}
            >
              <Card
                image="/product/product-14.png"
                name="Nike Air Monarch IV"
                price="₹ 4,495.00"
                category="Men's Training Shoes"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-15.png",
                  name: "Nike Pro Dri-FIT",
                  price: "₹ 1 495.00",
                  category: "Men's Tight-Fit Sleeveless Top",
                },
              }}
            >
              <Card
                image="/product/product-15.png"
                name="Nike Pro Dri-FIT"
                price="₹ 1 495.00"
                category="Men's Tight-Fit Sleeveless Top"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-16.png",
                  name: "Nike Metcon 8",
                  price: "₹ 13,295.00",
                  category: "Men's Training Shoes",
                },
              }}
            >
              <Card
                image="/product/product-16.png"
                name="Nike Metcon 8"
                price="₹ 13,295.00"
                category="Men's Training Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-17.png",
                  name: "Nike Air Max Plus",
                  price: "₹ 16,495.00",
                  category: "Women's Shoes",
                },
              }}
            >
              <Card
                image="/product/product-17.png"
                name="Nike Air Max Plus"
                price="₹ 16,495.00"
                category="Women's Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-18.png",
                  name: "Nike ZoomX Invincible Run Flyknit",
                  price: "₹ 17,495.00",
                  category: "Men's Running Shoes",
                },
              }}
            >
              <Card
                image="/product/product-18.png"
                name="Nike ZoomX Invincible Run Flyknit"
                price="₹ 17,495.00"
                category="Men's Running Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-19.png",
                  name: "Nike Renew Element 55",
                  price: "₹ 6,795.00",
                  category: "Unisex Shoes",
                },
              }}
            >
              <Card
                image="/product/product-19.png"
                name="Nike Renew Element 55"
                price="₹ 6,795.00"
                category="Unisex Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-20.png",
                  name: "Nike Flex Experience Run 11",
                  price: "₹ 4,295.00",
                  category: "Men's Running Shoes",
                },
              }}
            >
              <Card
                image="/product/product-20.png"
                name="Nike Flex Experience Run 11"
                price="₹ 4,295.00"
                category="Men's Running Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-21.png",
                  name: "Nike Legend Essential 2",
                  price: "₹ 4,995.00",
                  category: "Women's Training Shoes",
                },
              }}
            >
              <Card
                image="/product/product-21.png"
                name="Nike Legend Essential 2"
                price="₹ 4,995.00"
                category="Women's Training Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-22.png",
                  name: "Nike Court Legacy",
                  price: "₹ 3,495.00",
                  category: "Men's Shoes",
                },
              }}
            >
              <Card
                image="/product/product-22.png"
                name="Nike Court Legacy"
                price="₹ 3,495.00"
                category="Men's Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-23.png",
                  name: "Nike Everyday Max Cushioned Socks",
                  price: "₹ 995.00",
                  category: "Unisex Socks",
                },
              }}
            >
              <Card
                image="/product/product-23.png"
                name="Nike Everyday Max Cushioned Socks"
                price="₹ 995.00"
                category="Unisex Socks"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-24.png",
                  name: "Nike Air Max 270",
                  price: "₹ 14,495.00",
                  category: "Men's Shoes",
                },
              }}
            >
              <Card
                image="/product/product-24.png"
                name="Nike Air Max 270"
                price="₹ 14,495.00"
                category="Men's Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-25.png",
                  name: "Nike Air Presto",
                  price: "₹ 10,995.00",
                  category: "Unisex Shoes",
                },
              }}
            >
              <Card
                image="/product/product-25.png"
                name="Nike Air Presto"
                price="₹ 10,995.00"
                category="Unisex Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-26.png",
                  name: "Nike Sportswear Club Hoodie",
                  price: "₹ 4,795.00",
                  category: "Men's Hoodie",
                },
              }}
            >
              <Card
                image="/product/product-26.png"
                name="Nike Sportswear Club Hoodie"
                price="₹ 4,795.00"
                category="Men's Hoodie"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-27.png",
                  name: "Nike Therma-FIT ADV",
                  price: "₹ 12,495.00",
                  category: "Women's Jacket",
                },
              }}
            >
              <Card
                image="/product/product-27.png"
                name="Nike Therma-FIT ADV"
                price="₹ 12,495.00"
                category="Women's Jacket"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-28.png",
                  name: "Nike Renew Run 2",
                  price: "₹ 7,995.00",
                  category: "Men's Running Shoes",
                },
              }}
            >
              <Card
                image="/product/product-28.png"
                name="Nike Renew Run 2"
                price="₹ 7,995.00"
                category="Men's Running Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-29.png",
                  name: "Nike Air Force 1 Shadow",
                  price: "₹ 12,295.00",
                  category: "Women's Shoes",
                },
              }}
            >
              <Card
                image="/product/product-29.png"
                name="Nike Air Force 1 Shadow"
                price="₹ 12,295.00"
                category="Women's Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-30.png",
                  name: "Nike Air Huarache",
                  price: "₹ 13,995.00",
                  category: "Unisex Shoes",
                },
              }}
            >
              <Card
                image="/product/product-30.png"
                name="Nike Air Huarache"
                price="₹ 13,995.00"
                category="Unisex Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-31.png",
                  name: "Nike Epic Fast Leggings",
                  price: "₹ 3,895.00",
                  category: "Women's Leggings",
                },
              }}
            >
              <Card
                image="/product/product-31.png"
                name="Nike Epic Fast Leggings"
                price="₹ 3,895.00"
                category="Women's Leggings"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-32.png",
                  name: "Nike Air Max 97",
                  price: "₹ 17,995.00",
                  category: "Men's Shoes",
                },
              }}
            >
              <Card
                image="/product/product-32.png"
                name="Nike Air Max 97"
                price="₹ 17,995.00"
                category="Men's Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-33.png",
                  name: "Nike Flex Control TR4",
                  price: "₹ 5,295.00",
                  category: "Men's Training Shoes",
                },
              }}
            >
              <Card
                image="/product/product-33.png"
                name="Nike Flex Control TR4"
                price="₹ 5,295.00"
                category="Men's Training Shoes"
              />
            </Link>

            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-34.png",
                  name: "Nike Sportswear Swoosh Shorts",
                  price: "₹ 2,495.00",
                  category: "Men's Shorts",
                },
              }}
            >
              <Card
                image="/product/product-34.png"
                name="Nike Sportswear Swoosh Shorts"
                price="₹ 2,495.00"
                category="Men's Shorts"
              />
            </Link>
            <Link
              href={{
                pathname: "/productdetail",
                query: {
                  image: "/product/product-35.png",
                  name: "Nike Air Zoom Structure 24",
                  price: "₹ 11,495.00",
                  category: "Men's Running Shoes",
                },
              }}
            >
              <Card
                image="/product/product-35.png"
                name="Nike Air Zoom Structure 24"
                price="₹ 11,495.00"
                category="Men's Running Shoes"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>

  )
}