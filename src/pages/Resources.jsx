import React, { useState } from "react";
import cardboardImg from "../assets/slideshow_pics/cardboard.jpg";
import newspaperImg from "../assets/slideshow_pics/newspaper.jpg";
import paperBagsImg from "../assets/slideshow_pics/paper-bags.jpg";
import plasticBottle from "../assets/slideshow_pics/plastic-bottle.png";
import plasticContainers from "../assets/slideshow_pics/plastic-containers.jpg";
import milkJugs from "../assets/slideshow_pics/milk-jugs.jpg";
import canImg from "../assets/slideshow_pics/can.jpg";
import cans2Img from "../assets/slideshow_pics/cans2.webp";
import glassImg from "../assets/slideshow_pics/glass.png";
import glass2Img from "../assets/slideshow_pics/glass2.webp";
import notRecycle1 from "../assets/slideshow_pics/do-not-recycle.jpg";
import notRecycle2 from "../assets/slideshow_pics/do-not-recycle2.jpg";
import notRecycle3 from "../assets/slideshow_pics/do-not-recycle3.jpg";
import notThrow1 from "../assets/slideshow_pics/do-not-throw-out.webp";
import notThrow2 from "../assets/slideshow_pics/do-not-throw-out2.jpg";
import notThrow3 from "../assets/slideshow_pics/do-not-throwout3.jpg";

function Resources() {
  const paperImages = [cardboardImg, newspaperImg, paperBagsImg];
  const plasticImages = [plasticBottle, plasticContainers, milkJugs];
  const metalImages = [canImg, cans2Img];
  const glassImages = [glassImg, glass2Img];
  const noRecycleImages = [notRecycle1, notRecycle2, notRecycle3];
  const specialRecycleImages = [notThrow1, notThrow2, notThrow3];

  const [slideIndices, setSlideIndices] = useState({});

  const handlePrev = (key, length) => {
    setSlideIndices((prev) => ({
      ...prev,
      [key]: prev[key] > 0 ? prev[key] - 1 : length - 1,
    }));
  };

  const handleNext = (key, length) => {
    setSlideIndices((prev) => ({
      ...prev,
      [key]: prev[key] < length - 1 ? prev[key] + 1 : 0,
    }));
  };

  const cards = [
    {
      title: "📦 Paper/Cardboard",
      desc: "Newspapers, magazines, office paper, cardboard, and paper bags.",
      images: paperImages,
      key: "paper",
    },
    {
      title: "🥤 Plastics",
      desc: "Plastic bottles and jugs, some food containers.",
      images: plasticImages,
      key: "plastic",
    },
    {
      title: "🔩 Metals",
      desc: "Aluminum cans, steel cans, copper pipes, brass fixtures.",
      images: metalImages,
      key: "metals",
    },
    {
      title: "🍾 Glass",
      desc: "Glass bottles and jars.",
      images: glassImages,
      key: "glass",
    },
    {
      title: "🚫 Do NOT Recycle",
      desc: "Plastic bags, styrofoam, greasy paper, disposable cups.",
      images: noRecycleImages,
      key: "noRecycle",
    },
    {
      title: "⚡ Special Recycling",
      desc: "Batteries, paint, electronics, light bulbs, medical waste.",
      images: specialRecycleImages,
      key: "special",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-14 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 text-center">
          🌱 Recycling Categories
        </h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Get to know what materials are recyclable and how to sort them correctly.
        </p>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {cards.map((item, index) => {
            const [firstWord, ...rest] = item.title.split(" ");
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center"
              >
                <div className="w-full h-40 relative mb-4">
                  <img
                    src={item.images[slideIndices[item.key] || 0]}
                    alt={item.title}
                    className="w-full h-full object-contain rounded"
                  />
                  <button
                    onClick={() => handlePrev(item.key, item.images.length)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-green-700 px-2 py-1 rounded-l shadow"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => handleNext(item.key, item.images.length)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-green-700 px-2 py-1 rounded-r shadow"
                  >
                    ›
                  </button>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <span className="text-green-600">{firstWord}</span>{" "}
                  {rest.join(" ")}
                </h2>
                <p className="text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Recycling Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 my-16">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">💡</span>
            <h3 className="text-2xl font-bold text-green-700">Tips for Proper Recycling</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-800 hover:bg-green-100 transition">
              <a
                href="https://ecomyths.org/myth-you-must-rinse-all-containers-before-recycling-them/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-900"
              >
                Rinse containers before recycling to avoid contamination.
              </a>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-800 hover:bg-green-100 transition">
              <a
                href="https://www.swaco.org/FAQ.aspx?QID=74"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-900"
              >
                Flatten cardboard boxes to save space in the recycling bin.
              </a>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-800 hover:bg-green-100 transition">
              <a
                href="https://recyclerightny.recyclist.co/guide/plastic-caps/?embeddedguide=true"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-900"
              >
                Check local rules about removing bottle caps before recycling.
              </a>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-800 hover:bg-green-100 transition">
              <a
                href="https://sogreenpack.com/post/can-greasy-pizza-boxes-be-recycled-or-composted-a-comprehensive-guide/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-900"
              >
                Do not recycle greasy pizza boxes; compost the clean part if possible.
              </a>
            </div>
          </div>
        </div>

        {/* Community + NYC Recycling Info */}
        {/* ... (no changes below this point) ... */}
      </div>
    </div>
  );
}

export default Resources;
