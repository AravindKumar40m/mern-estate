import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Listing = () => {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        await axios
          .get(`/api/listing/get/${params.id}`)
          .then((res) => {
            setListing(res.data);
            setLoading(false);
            setError(false);
            console.log(res.data.imageUrls);
          })
          .catch((err) => {
            if (err.response.data.success === false) {
              setError(true);
              setLoading(false);
              return;
            }
          });
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.id]);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${url})` }}
                >
                  <img src={url} className=" bg-cover w-full" alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </main>
  );
};

export default Listing;
