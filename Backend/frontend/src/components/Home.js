import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const [translatedText, setTranslatedText] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language is English

  useEffect(() => {
    // JavaScript to trigger animation for the About the Company section and images
    const companyInfo = document.querySelector('.company-info');
    const companyPhotos = document.querySelectorAll('.company-photos img');

    companyInfo.style.opacity = '1';
    companyInfo.style.transform = 'translateY(0)';

    companyPhotos.forEach((photo) => {
      photo.style.opacity = '1';
      photo.style.transform = 'translateY(0)';
    });
  }, []);

  const translations = {
    Hindi: {
      'Welcome to RoamEd': 'रोमएड में आपका स्वागत है',
      'Learn at your own pace, anytime, anywhere.':
        'अपने खुद के गति पर पढ़ें, कभी भी, कहीं भी।',
      'Education in motion.': 'शिक्षा गतिविधि में।',
      'Get Started': 'शुरू करें',
      'About RoamEd':
        'रोमएड के बारे में',
      'At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.':
        'रोमएड में, हम उन जनजातीय बच्चों के जीवन पर सकारात्मक प्रभाव डालने के समर्पित हैं जो अपनी घुमंतु जीवनशैली के कारण विशेष चुनौतियों का सामना करते हैं। हमारा उद्देश्य एक उच्च-कक्षा की शिक्षा प्लेटफार्म प्रदान करना है जो इन युवा शिक्षार्थियों को उच्च गुणवत्ता की शिक्षा तक पहुँचाने की शक्ति प्रदान करता है, उनके भूगोलिक चलन की अनवरत स्वतंत्रता के बावजूद।',
      "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future.":
        "हमारा प्लेटफार्म लचीला और पहुँचने योग्य डिज़ाइन किया गया है, जिससे जनजाति के बच्चे बिना बाधा डाले अपनी पढ़ाई जारी रख सकते हैं। हम शिक्षा के अंतर को समापन करने और इन युवा शिक्षार्थियों को एक उज्ज्वल भविष्य के लिए सशक्त करने के प्रति प्रतिबद्ध हैं।",
      '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela':
        '“शिक्षा वह सबसे शक्तिशाली हथियार है जिसका आप दुनिया को बदलने के लिए उपयोग कर सकते हैं." - नेल्सन मंडेला',
    },
    Urdu: {
      'Welcome to RoamEd': 'روم ایڈ میں خوش آمدید',
      'Learn at your own pace, anytime, anywhere.':
        'اپنی رفتار پر کبھی بھی کہیں بھی پڑھائی کریں۔',
      'Education in motion.': 'تعلیم حرکت میں ہے۔',
      'Get Started': 'شروع کریں',
      'About RoamEd': 'روم ایڈ کے بارے میں',
      'At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.':
        'روم ایڈ پر ہم ان جنسی بچوں کی زندگیوں پر مثبت اثر ڈالنے کے مخصوص ہیں جو اپنی گشتی زندگیوں کی بنا پر انوکھی چیلنجز کا سامنا کرتے ہیں۔ ہمارا مشن یہ ہے کہ ایک بہترین تعلیمی پلیٹ فارم فراہم کریں جو ان نوجوان تعلیم یافتگی کا راستہ دکھاتا ہے، چاہے ان کی جغرافیائی موبیلٹی کچھ بھی ہو۔',
      "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future.":
        'ہمارا پلیٹ فارم لچیلے اور رسائی پذیر ہونے کا ڈیزائن کیا گیا ہے، جو جنسی بچوں کو اپنے تعلیم کو بغیر کسی رکاوٹ کے جاری رکھنے کی اجازت دیتا ہے جب بھی وہ منتقل ہوتے ہیں۔ ہم تعلیمی فاصلے کو پورا کرنے اور ان نوجوان تعلیم یافتہ کو روشن مستقبل کے لئے مضبوطی دینے کے عزمنامہ کے ساتھ ہیں۔',
      '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela':
        '“تعلیم دنیا کو تبدیل کرنے کے لئے آپ جو سب سے زیادہ طاقتور ہتھیار ہے." - نیلسن منڈیلا',
    },
    English: {
      'Welcome to RoamEd': 'Welcome to RoamEd',
      'Learn at your own pace, anytime, anywhere.':
        'Learn at your own pace, anytime, anywhere.',
      'Education in motion.': 'Education in motion.',
      'Get Started': 'Get Started',
      'About RoamEd': 'About RoamEd',
      'At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.':
        "At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.",
      "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future.":
        "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future.",
      '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela':
        '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
    },
  };

  const getNextLanguage = (currentLanguage) => {
    if (currentLanguage === 'Hindi') return 'Urdu';
    if (currentLanguage === 'Urdu') return 'English';
    return 'Hindi'; // Cycle back to Hindi if currentLanguage is English
  };

  const translateToNextLanguage = () => {
    const nextLanguage = getNextLanguage(selectedLanguage);
    setTranslatedText(translations[nextLanguage]);
    setSelectedLanguage(nextLanguage);
  };

  return (
    <>
      <div>
        <div className="carousel-container-static">
          <img
            src="https://i.ibb.co/VSCcRJ1/Orange-Animated-Online-School-Learning-Illustrated-Banner.png"
            alt="Static Image"
            className="static-image"
          />
        </div>
      </div>

      <section className="hero">
        <h1>{translatedText ? translatedText['Welcome to RoamEd'] : 'Welcome to RoamEd'}</h1>
        <p>
          {translatedText
            ? translatedText['Learn at your own pace, anytime, anywhere.']
            : 'Learn at your own pace, anytime, anywhere.'}
        </p>
        <p>{translatedText ? translatedText['Education in motion.'] : 'Education in motion.'}</p>
        <button onClick={translateToNextLanguage}>
          {selectedLanguage === 'Hindi'
            ? 'Translate to Urdu'
            : selectedLanguage === 'Urdu'
            ? 'Translate to English'
            : 'Translate to Hindi'}
        </button>
      </section>

      <section className="company-info">
        <div className="company-text">
          <h2>{translatedText ? translatedText['About RoamEd'] : 'About RoamEd'}</h2>
          <p>
            {translatedText
              ? translatedText[
                  'At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.'
                ]
              : 'At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.'}
          </p>
          <p>
            {translatedText
              ? translatedText[
                  "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future."
                ]
              : "Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future."}
          </p>
          <blockquote>
            <p>
              {translatedText
                ? translatedText[
                    '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela'
                  ]
                : '“Education is the most powerful weapon which you can use to change the world." - Nelson Mandela'}
            </p>
          </blockquote>
        </div>
        <div className="company-photos">
          <img src="https://source.unsplash.com/300x300?education" alt="Company Photo 1" />
          <img src="https://source.unsplash.com/300x300?books" alt="Company Photo 2" />
        </div>
      </section>
    </>
  );
}
