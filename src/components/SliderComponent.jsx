// src/components/ImageSlider.jsx
import Slider from "react-slick";
import ProfileCard from "./ProfileStructure";

const images = [
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  //   "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",

  {
    id: 1,
    name: "Akinlemibola Ade",
    generation: "3rd",
    role: "Father",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  {
    id: 2,
    name: "Akinlemibola Bola",
    generation: "2nd",
    role: "Grandmother",
    gender: "female",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  {
    id: 3,
    name: "Akinlemibola Taiwo",
    generation: "4th",
    role: "Child",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  {
    id: 4,
    name: "Akinlemibola Kehinde",
    generation: "4th",
    role: "Child",
    gender: "female",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  {
    id: 5,
    name: "Akinlemibola Ife",
    generation: "3rd",
    role: "Mother",
    gender: "female",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  {
    id: 6,
    name: "Akinlemibola Kunle",
    generation: "2nd",
    role: "Uncle",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  {
    id: 7,
    name: "Akinlemibola Shade",
    generation: "2nd",
    role: "Aunt",
    gender: "female",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  {
    id: 8,
    name: "Akinlemibola Fola",
    generation: "4th",
    role: "Teen",
    gender: "female",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  {
    id: 9,
    name: "Akinlemibola Moyo",
    generation: "4th",
    role: "Teen",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
  },
  // Add more image paths (make sure they exist in public/images or src/assets)
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // phone
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-5">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2 ">
            <div
              className="slider-container"
              style={{
                backgroundImage: `url(${img.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "300px",
                borderRadius: "10px",
              }}
            >
              <h2 className="text-center py-3 text-white">{img.name}</h2>

              <p className="text-center text-white">
                <b>Generation: {img.generation} </b>
              </p>
              <p className="text-center text-white">
                <b>Gender: </b>
                {img.gender}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
// Note: Ensure that the images are placed in the correct directory (e.g., public/images or src/assets) for them to be displayed correctly.
// You can adjust the image paths based on your project structure.
