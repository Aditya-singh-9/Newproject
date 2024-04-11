import React from 'react';
import './App.css';
import PoojaCard from './PoojaCard';

function App() {
  const poojas = [
    {
      name: "Durga Pooja",
      description: "Durga Puja, a revered Hindu ritual, seeks blessings from Goddess Durga, the deity of power and strength. Performing this puja can bring protection, prosperity, and empowerment into one's life. Devotees believe it mitigates the effects of negative influences, fostering success and well-being.",
      imageUrl: "durga puja.jpg",
      
    },
    {
      name: "Gopal Pooja",
      description: "Gopal Pooja is performed to seek the blessings of Lord Krishna, also known as Gopal. This pooja is believed to bring peace, happiness, and prosperity to the devotees' lives. It is often performed with devotion and offerings to Lord Krishna.",
      imageUrl: "Gopal pooja.jpg",
    },
    {
      name: "Vastu Pooja",
      description: "Vastu Pooja is a Hindu ritual performed to appease Vastu Purush, the deity of directions and architecture. It is believed to bring harmony and positive energy to a new home or building. Devotees perform this pooja to ensure the well-being and prosperity of the occupants.",
      imageUrl: "vastu pooja.jpg",
    },
    {
      name: "Chandra Pooja",
      description: "Chandra Pooja is dedicated to Lord Chandra, the Hindu deity of the Moon. This pooja is performed to seek blessings for mental peace, emotional stability, and overall well-being. Devotees believe that worshipping Lord Chandra can alleviate mental stress and bring clarity of mind.",
      imageUrl: "Chandra pooja.jpg",
    },
    {
      name: "Mahalaxmi Pooja",
      description: "Maha Lakshmi Puja is a Hindu ritual dedicated to the goddess Lakshmi, the deity of wealth, prosperity, and fortune. It is commonly performed during the festival of Diwali but can also be observed on other auspicious occasions",
      imageUrl: "Mahalaxmi pooja.jpg",
    },
    {
      name: "Mritunjay Pooja",
      description: "Dedicated to Lord Shiva, the destroyer of death. It is performed to seek protection from untimely death and to promote longevity and well-being.",
      imageUrl: "mritunjay pooja.jpg",
    },
    {
      name: "Surya Pooja",
      description: "Worship of the Sun god, Surya. It is performed to seek blessings for good health, vitality, success, and prosperity.",
      imageUrl: "Surya pooja.jpg",
    },
    {
      name: "Saraswati Puja",
      description: "Devoted to Goddess Saraswati, the deity of knowledge, wisdom, and arts. It is performed to invoke her blessings for academic success, creativity, and intellect.",
      imageUrl: "Saraswati pooja.jpg",
    },
    {
      name: "Kali Puja",
      description: "Kali Puja is dedicated to Goddess Kali, the fierce embodiment of Shakti. It is performed to seek protection from evil forces, conquer negativity, and attain spiritual power and liberation.",
      imageUrl: "Kali pooja.jpg",
    },
    {
      name: "Bhagwat Geeta Pooja",
      description: "Worship of the Bhagavad Gita, a sacred Hindu scripture. It is performed to honor the teachings of Lord Krishna and to seek spiritual guidance and enlightenment.",
      imageUrl: "Bhagwat geta pooja.jpg",
    },
    {
      name: "Navgrah Pooja",
      description: "Navgrah Pooja is dedicated to the nine celestial bodies or planets in Hindu astrology. It is performed to mitigate the adverse effects of planetary positions and to seek blessings for harmony, prosperity, and overall well-being.",
      imageUrl: "Navgrah pooja.jpg",
    },
    {
      name: "Rahu Pooja",
      description: "Rahu Pooja is performed to appease Rahu, one of the nine celestial bodies in Hindu astrology. It is believed to mitigate the negative influence of Rahu and bring prosperity, success, and protection from malefic effects.",
      imageUrl: "Rahu pooja.jpg",
    },
    {
      name: "Ketu Pooja",
      description: "Ketu Pooja is dedicated to Ketu, one of the nine celestial bodies in Hindu astrology. It is performed to seek protection from negative energies, attain spiritual wisdom, and overcome obstacles.",
      imageUrl: "Ketu pooja.jpg",
    },
    {
      name: "Mangal Pooja",
      description: "Mangal Pooja is dedicated to Mangal, the planet Mars in Hindu astrology. It is performed to mitigate the adverse effects of Mangal Dosha and to seek blessings for marital harmony, courage, and prosperity.",
      imageUrl: "Mangal pooja.jpg",
    },
    {
      name: "Rudra Bhishek Pooja",
      description: "Rudra Bhishek Pooja is dedicated to Lord Shiva in his Rudra avatar. It involves the ceremonial bathing of the Shivling with various sacred substances and chanting of Vedic mantras. It is believed to remove sins, purify the soul, and bring blessings of health, wealth, and prosperity.",
      imageUrl: "Rudra Abhishek pooja.jpg",
    },
    {
      name: "Gath Bandhan Pooja",
      description: "Gath Bandhan Pooja is performed to strengthen the bond between husband and wife. It involves tying sacred threads (gath) around each other's wrists as a symbol of unity, love, and lifelong commitment.",
      imageUrl: "Gath Bandhan pooja.jpg",
    },
    {
      name: "Satya Narayan Pooja",
      description: "Satya Narayan Pooja is dedicated to Lord Vishnu in his form as Satyanarayan. It is performed to seek blessings for prosperity, happiness, and fulfillment of desires. The puja involves the recitation of the Satyanarayan Katha, offering of prayers, and distribution of prasad (sacred food).",
      imageUrl: "Satya narayan pooja.jpg",
    },
    {
      name: "Brihaspati Pooja",
      description: "Brihaspati Pooja is dedicated to Lord Brihaspati, the guru of the Devas (celestial beings). It is performed to seek blessings for wisdom, knowledge, success, and prosperity. Devotees believe that worshipping Brihaspati can enhance their intellect and bring good fortune.",
      imageUrl: "Brihaspati pooja.jpg",
    },
    {
      name: "Nakshatra Pooja",
      description: "Nakshatra Pooja is performed to honor the birth star (nakshatra) of an individual. It is believed to bring blessings, protection, and prosperity to the person and their family. The puja involves offering prayers to the ruling deity of the nakshatra and performing rituals to appease malefic planetary influences.",
      imageUrl: "nakshatra-puja.jpg",
    },
    {
      name: "Pitra Dosh Pooja",
      description: "Pitra Dosh Pooja is performed to appease the ancestors and mitigate the effects of pitra dosh (ancestral curse) in one's horoscope. It is believed that performing this pooja can bring peace, harmony, and blessings from the ancestors.",
      imageUrl: "Pitra dosh pooja.jpg",
    },
    {
      name: "Manglik Pooja",
      description: "Manglik Pooja is performed to mitigate the adverse effects of Mangal Dosha in one's horoscope. It is believed that Mangal Dosha can cause delays and obstacles in marriage, but performing this pooja can help overcome such challenges and ensure marital bliss.",
      imageUrl: "Manglik pooja.jpg",
    },
  ];

  const handleBookNow = () => {
    // Handle the book now functionality here
    console.log("Book now clicked");
  };

  return (
    <div className="App">
      {poojas.map((pooja, index) => (
        <PoojaCard
          key={index}
          poojaName={pooja.name}
          poojaDescription={pooja.description}
          imageUrl={pooja.imageUrl}
          onBookNow={handleBookNow}
        />
      ))}
    </div>
  );
}

export default App;
