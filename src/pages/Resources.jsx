import React, { useState } from "react";
import exampleImg from "../assets/slideshow_pics/react.svg";
import cardboardImg from "../assets/slideshow_pics/cardboard.jpg";
import newspaperImg from "../assets/slideshow_pics/newspaper.jpg";
import paperBagsImg from "../assets/slideshow_pics/paper-bags.jpg";

function Resources() {
  const [slideIndex, setSlideIndex] = useState(0);
  const paperImages = [cardboardImg, newspaperImg, paperBagsImg];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? paperImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev === paperImages.length - 1 ? 0 : prev + 1));
  };

  const cards = [
    {
      title: "📦 Paper/Cardboard",
      desc: "Newspapers, magazines, office paper, cardboard, and paper bags.",
      isSlider: true,
    },
    {
      title: "🥤 Plastics",
      desc: "Plastic bottles and jugs, some food containers.",
    },
    {
      title: "🔩 Metals",
      desc: "Aluminum cans, steel cans, copper pipes, brass fixtures.",
    },
    {
      title: "🍾 Glass",
      desc: "Glass bottles and jars.",
    },
    {
      title: "🚫 Do NOT Recycle",
      desc: "Plastic bags, styrofoam, greasy paper, disposable cups.",
    },
    {
      title: "⚡ Special Recycling",
      desc: "Batteries, paint, electronics, light bulbs, medical waste.",
    },
  ];

  return (
    <div className="bg-[#fffef9] min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 text-center">
          🌱 Resources
        </h1>
        <p className="text-gray-700 text-lg text-center mb-10">
          Learn how to recycle responsibly and get involved in local efforts!
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((item, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              {/* Green Top Bar */}
              <div className="bg-green-700 px-4 py-3">
                <h2 className="text-white font-semibold text-lg">{item.title}</h2>
              </div>

              {/* Card Body */}
              <div className="bg-[#ffffff] text-black p-5">
                {item.isSlider ? (
                  <div className="relative w-full h-40 mb-3">
                    <img
                      src={paperImages[slideIndex]}
                      alt="Paper recycling slide"
                      className="w-full h-40 object-contain rounded"
                    />
                    <button
                      onClick={handlePrev}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-green-700 px-2 py-1 rounded-l shadow"
                    >
                      ‹
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-green-700 px-2 py-1 rounded-r shadow"
                    >
                      ›
                    </button>
                  </div>
                ) : (
                  <img
                    src={exampleImg}
                    alt={item.title}
                    className="w-full h-40 object-contain mb-3"
                  />
                )}
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="text-center mt-12">
          <p className="text-lg font-semibold">
            ❓ Not sure what’s recyclable?{" "}
            <a
              href="/quiz"
              className="text-green-700 underline hover:text-green-900"
            >
              Check out our guide!
            </a>
          </p>
        </div>

        {/* YouTube */}
        <div className="mt-14 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eSeXWk3UTWQ?si=s_e4QHQL2aS5nIxf"
            title="Recycling Tips Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded shadow-xl"
          />
        </div>

        {/* Community + NYC */}
        <div className="mt-16 flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              🤝 Community Volunteering
            </h3>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>
                <a
                  href="https://bigreuse.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Big Reuse Opportunities
                </a>
              </li>
              <li>
                <a
                  href="https://earthmatter.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Earth Matter NYC
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              🏙️ NYC Recycling Info
            </h3>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>
                <a
                  href="https://portal.311.nyc.gov/article/?kanumber=KA-02013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  311 Recycling Guide
                </a>
              </li>
              <li>
                <a
                  href="https://hudsonriverpark.org/recycling-101-in-nyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hudson River Park Recycling 101
                </a>
              </li>
              <li>
                <a
                  href="https://www.nyc.gov/site/dsny/collection/residents/recycling.page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DSNY Recycling Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* National Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🇺🇸 Recycling Laws & Local Drop-off Points
          </h3>
          <p className="text-gray-700 mb-6">
            Laws vary by city and state. Check these links for up-to-date guidelines:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded overflow-hidden shadow">
              <div className="bg-green-700 px-4 py-3">
                <h4 className="text-white font-semibold">U.S. EPA Recycling Guide</h4>
              </div>
              <div className="bg-[#ffffff] text-black p-5">
                <a
                  href="https://www.epa.gov/recycle"
                  className="underline hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EPA.gov/recycle
                </a>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow">
              <div className="bg-green-700 px-4 py-3">
                <h4 className="text-white font-semibold">Earth911 Search</h4>
              </div>
              <div className="bg-[#ffffff] text-black p-5">
                <p>Find the nearest facility for almost anything:</p>
                <a
                  href="https://search.earth911.com"
                  className="underline hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  search.earth911.com
                </a>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow">
              <div className="bg-green-700 px-4 py-3">
                <h4 className="text-white font-semibold">Plastic Film Recycling</h4>
              </div>
              <div className="bg-[#ffffff] text-black p-5">
                <a
                  href="https://www.plasticfilmrecycling.org/recycling-bags-and-wraps/find-drop-off-location/"
                  className="underline hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find drop-offs for grocery bags & wraps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;


