// src/components/ImageSlider.jsx
import Slider from "react-slick";
import ProfileCard from "./ProfileStructure";

const images = [
  {
    id: 1,
    name: "James Igbekoyi",
    generation: "3rd",
    role: "Father",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
    bio: "Akinlemibola Ade is a dedicated father who values family traditions and is committed to preserving the legacy of the Akinlemibola lineage. He is known for his wisdom and leadership within the family.",

    dob: "1970-04-15",

    children: ["Tom", "Grace"],
    siblings: ["Micheal", "Sandra"],
  },

  {
    id: 2,
    name: "Joseph Olaniyi- cheif Baipe ",
    generation: "2nd",
    role: "Grandmother",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
    bio: "Akinlemibola Ade is a dedicated father who values family traditions and is committed to preserving the legacy of the Akinlemibola lineage. He is known for his wisdom and leadership within the family.",
    dob: "1970-04-15",

    children: ["Tom", "Grace"],
    siblings: ["Micheal", "Sandra"],
  },
  {
    id: 3,
    name: "John Oladele",
    generation: "4th",
    role: "Child",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
    bio: "Akinlemibola Ade is a dedicated father who values family traditions and is committed to preserving the legacy of the Akinlemibola lineage. He is known for his wisdom and leadership within the family.",
    dob: "1970-04-15",

    children: ["Tom", "Grace"],
    siblings: ["Micheal", "Sandra"],
  },
  {
    id: 4,
    name: "Jeremiah Oladiran",
    generation: "4th",
    role: "Child",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
    bio: "Akinlemibola Ade is a dedicated father who values family traditions and is committed to preserving the legacy of the Akinlemibola lineage. He is known for his wisdom and leadership within the family.",
    dob: "1970-04-15",

    children: ["Tom", "Grace"],
    siblings: ["Micheal", "Sandra"],
  },
  {
    id: 5,
    name: "Ebenezer Olatudun",
    generation: "3rd",
    role: "Mother",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
    bio: "Akinlemibola Ade is a dedicated father who values family traditions and is committed to preserving the legacy of the Akinlemibola lineage. He is known for his wisdom and leadership within the family.",
    dob: "1970-04-15",

    children: ["Tom", "Grace"],
    siblings: ["Micheal", "Sandra"],
  },
  {
    id: 6,
    name: "Reverend Isaiah Bosede",
    generation: "2nd",
    role: "Uncle",
    gender: "male",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-silhouette-of-happy-father-having-fun-with-his-son_SRW6Mggobb_thumb.jpg",
    bio: "Akinlemibola Ade is a dedicated father who values family traditions and is committed to preserving the legacy of the Akinlemibola lineage. He is known for his wisdom and leadership within the family.",
    dob: "1970-04-15",

    children: ["Tom", "Grace"],
    siblings: ["Micheal", "Sandra"],
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
    <div
      className="container py-5"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2 ">
            <div
              className="slider-container img-fluid"
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
