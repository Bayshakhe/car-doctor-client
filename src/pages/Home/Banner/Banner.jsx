import image1 from "../../../assets/images/banner/5.jpg";
import image2 from "../../../assets/images/banner/4.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  const bannerOverlay = (
    <div className="absolute flex items-center h-full gap-2 transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white w-1/3 rounded-xl">
      <div className=" space-y-5 ml-6">
        <h2 className="text-4xl md:text-6xl font-bold ">
          Affordable Price For Car Servicing
        </h2>
        <p>
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <button className="btn bg-red-600 mr-3">Discover More</button>
        <button className="btn btn-error btn-outline">Latest Project</button>
      </div>
    </div>
  );
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full rounded-xl" />
        {bannerOverlay}
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn bg-red-500 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-xl" />
        {bannerOverlay}
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn bg-red-500 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-xl" />
        {bannerOverlay}
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn bg-red-500 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rounded-xl" />
        {bannerOverlay}
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn bg-red-500 btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
