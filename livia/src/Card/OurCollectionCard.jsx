import React from "react";

import ProductCard from "../component/ProductCard";

const OurCollectionCard = ({setShowModal,setCurrentItem}) => {

  const data = [
{ id: 1,title:"Livina avacoda Soap", image: "/soap-avacoda-LMGO1G64.jpeg", rating: "4.6", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 2,title:"Livina Charcoal Soap", image: "soap2.jpeg", rating: "4.4", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 3,title:"Livina Avarmpoora Soap", image: "soap3.jpeg", rating: "4.5", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 4,title:"Livina Goat Milk Soap", image: "soap4.jpeg", rating: "4.7", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 5,title:"Livina Charcoal Soap", image: "soap5.jpeg", rating: "4.3", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 6,title:"Livina Charcoal Soap", image: "soap6.jpeg", rating: "4.7", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 7,title:"Livina Charcoal Soap", image: "soap7.jpeg", rating: "4.5", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 8,title:"Livina Charcoal Soap", image: "soap8.jpeg", rating: "4.6", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 9,title:"Livina Charcoal Soap", image: "soap9.jpeg", rating: "4.8", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },

{ id: 10,title:"Livina Charcoal Soap", image: "soap10.jpeg", rating: "4.9", price: "69.00", desc: "Experience a deep cleanse with our activated charcoal soap. Expertly handcrafted, it acts like a magnet to draw out impurities, excess oil, and toxins from your pores, helping to reduce breakouts and leave your skin feeling exceptionally clean, refreshed, and purified. Suitable for oily and acne-prone skin." },
  ];

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {data.map((item, idx) => (
          <ProductCard item={item} idx={idx} key={idx} setShowModal={setShowModal} setCurrentItem={setCurrentItem}/>
      ))}
    </div>
  );
};

export default OurCollectionCard;
