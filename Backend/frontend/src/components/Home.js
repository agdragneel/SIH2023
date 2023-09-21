import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const [translatedText, setTranslatedText] = useState(null);
  const [isTranslatedToHindi, setIsTranslatedToHindi] = useState(false);

  // JavaScript to trigger animation for the About the Company section and images
  useEffect(() => {
    const companyInfo = document.querySelector('.company-info');
    const companyPhotos = document.querySelectorAll('.company-photos img');

    companyInfo.style.opacity = '1';
    companyInfo.style.transform = 'translateY(0)';

    companyPhotos.forEach((photo) => {
      photo.style.opacity = '1';
      photo.style.transform = 'translateY(0)';
    });
  }, []);

  // Function to handle text translation and update the state
  const translateToHindi = () => {
    // This is a simple example of hardcoded translations.
    // Replace these with your actual translations as needed.
    const translations = {
      'Welcome to RoamEd': 'रोमएड में आपका स्वागत है',
      'Learn at your own pace, anytime, anywhere.':
        'अपने खुद के गति पर पढ़ें, कभी भी, कहीं भी।',
      'Education in motion.': 'शिक्षा गतिविधि में।',
      'Get Started': 'शुरू करें',
      'About RoamEd': 'रोमएड के बारे में',
      'At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.':
        'रोमएड में, हम उन जनजातीय बच्चों के जीवन पर सकारात्मक प्रभाव डालने के समर्पित हैं जो अपनी घुमंतु जीवनशैली के कारण विशेष चुनौतियों का सामना करते हैं। हमारा उद्देश्य एक उच्च-कक्षा की शिक्षा प्लेटफार्म प्रदान करना है जो इन युवा शिक्षार्थियों को उच्च गुणवत्ता की शिक्षा तक पहुँचाने की शक्ति प्रदान करता है, उनके भूगोलिक चलन की अनवरत स्वतंत्रता के बावजूद।',
      "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future.":
        "हमारा प्लेटफार्म लचीला और पहुँचने योग्य डिज़ाइन किया गया है, जिससे जनजाति के बच्चे बिना बाधा डाले अपनी पढ़ाई जारी रख सकते हैं। हम शिक्षा के अंतर को समापन करने और इन युवा शिक्षार्थियों को एक उज्ज्वल भविष्य के लिए सशक्त करने के प्रति प्रतिबद्ध हैं।",
      '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela':
        '“शिक्षा वह सबसे शक्तिशाली हथियार है जिसका आप दुनिया को बदलने के लिए उपयोग कर सकते हैं." - नेल्सन मंडेला',
    };

    // Reverse the translation if currently in Hindi
    if (isTranslatedToHindi) {
      const reversedTranslations = {};
      Object.keys(translations).forEach((key) => {
        reversedTranslations[translations[key]] = key;
      });
      setTranslatedText(reversedTranslations);
      setIsTranslatedToHindi(false);
    } else {
      // Set the translation to Hindi
      setTranslatedText(translations);
      setIsTranslatedToHindi(true);
    }
  };

  return (
    <>
      <div>
        <div className="carousel-container-static">
          <img
            src="https://i.ibb.co/RgJDNq0/Banner.png"
            alt="Static Image"
            className="static-image"
          />
        </div>
      </div>

      <section className="hero">
        <h1>{isTranslatedToHindi ? translatedText['Welcome to RoamEd'] : 'Welcome to RoamEd'}</h1>
        <p>
          {isTranslatedToHindi
            ? translatedText['Learn at your own pace, anytime, anywhere.']
            : 'Learn at your own pace, anytime, anywhere.'}
        </p>
        <p>{isTranslatedToHindi ? translatedText['Education in motion.'] : 'Education in motion.'}</p>
        {/* <a href="/login" className="cta-button"> */}
          {/* {isTranslatedToHindi ? translatedText['Get Started'] : 'Get Started'} */}
        {/* </a> */}
        <button onClick={translateToHindi}>
          {isTranslatedToHindi ? 'Translate to English' : 'Translate to Hindi'}
        </button>
      </section>

      <section className="company-info">
        <div className="company-text">
          <h2>{isTranslatedToHindi ? translatedText['About RoamEd'] : 'About RoamEd'}</h2>
          <p>
            {isTranslatedToHindi
              ? translatedText[
                  'At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.'
                ]
              : 'At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.'}
          </p>
          <p>
            {isTranslatedToHindi
              ? translatedText[
                  "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future."
                ]
              : "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future."}
          </p>
          <blockquote>
            <p>
              {isTranslatedToHindi
                ? translatedText[
                    '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela'
                  ]
                : '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela'}
            </p>
          </blockquote>
        </div>
        <div className="company-photos">
          <img
            src="https://source.unsplash.com/300x300?education"
            alt="Company Photo 1"
          />
          <img
            src="https://source.unsplash.com/300x300?books"
            alt="Company Photo 2"
          />
        </div>
      </section>
    </>
  );
}
