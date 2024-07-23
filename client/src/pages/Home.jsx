import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ListingItems from "../components/ListingItems";

const Home = () => {
  SwiperCore.use([Navigation]);
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  console.log(offerListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        await axios
          .get("/api/listing/get?offer=true&limit=4")
          .then((res) => {
            setOfferListings(res.data);
            fetchRentListings();
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        await axios
          .get("/api/listing/get?type=rent&limit=4")
          .then((res) => {
            setRentListings(res.data);
            fetchSaleListings();
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        await axios
          .get("/api/listing/get?type=sale&limit=4")
          .then((res) => {
            setSaleListings(res.data);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* top */}

      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next
          <span className="text-slate-500"> perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Aravind Estate is the best place to find your next perfect place to
          live.
          <br />
          we have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}

      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]})`,
                }}
                className="h-[500px]  bg-cover bg-center"
                key={listing._id}
              >
                <img
                  src={listing.imageUrls[0]}
                  className=" bg-cover w-full"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="div">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm  text-blue-800 hover:underline flex my-4"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
              <div className="flex flex-wrap gap-4">
                {offerListings.map((listing) => (
                  <ListingItems listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="div">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm  text-blue-800 hover:underline  flex my-4"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
              <div className="flex flex-wrap gap-4">
                {rentListings.map((listing) => (
                  <ListingItems listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="div">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sales
              </h2>
              <Link
                className="text-sm  text-blue-800 hover:underline  flex my-4"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
              <div className="flex flex-wrap gap-4">
                {saleListings.map((listing) => (
                  <ListingItems listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
