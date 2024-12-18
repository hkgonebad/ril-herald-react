import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FamilyDayVideo from "./FamilyDayVideo";

const Featured = () => {
  const imgPath = "img/articles/";
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      disable: "phone", // Disable on mobile devices
      duration: 600, // Animation duration
      offset: 120, // Trigger point (distance from element)
      easing: "ease-in-out", // Smooth animation
    });

    // Clean up AOS on component unmount
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const articles = [
    {
      id: 2,
      imgSrc: "1.jpg",
      date: "RIL 47th AGM | August 2024",
      title: "Reliance is becoming a deep-tech and advanced manufacturing company to propel growth for a Viksit Bharat",
      quote:
        "This philosophy of doing business with a broader and noble purpose is instilled in all of us by our Founder Chairman, Shri Dhirubhai Ambani.",
      author: "Mukesh D. Ambani, Chairman and Managing Director, RIL",
      hasQuote: true,
      special: false,
    },
    {
      id: 3,
      imgSrc: "2.jpg",
      date: "NVIDIA AI Summit | October 2024",
      title: "“India will be one of the biggest intelligence markets”",
      author: "Mukesh D. Ambani, Chairman and Managing Director, RIL",
      hasQuote: false,
      special: true,
    },
    {
      id: 4,
      imgSrc: "3.jpg",
      date: "",
      title: "“RIL CMD Mukesh D. Ambani is#1 CEO in India#2 Globally”",
      author: "Brand Finance | February 2024",
      hasQuote: false,
      special: false,
    },
    {
      id: 5,
      imgSrc: "4.jpg",
      date: "Paris Olympics 2024 | July 2024",
      title: "“India House will reflect the strides India has made in the Olympic movement”",
      author: "Nita M. Ambani, Reliance Foundation Founder-Chairperson",
      hasQuote: false,
      special: false,
    },
    {
      id: 6,
      imgSrc: "5.jpg",
      date: "IBLA Awards | December 2024",
      title: "I firmly believe that this century belongs to India. More importantly, it belongs to women.",
      author: "Nita M. Ambani awarded for ‘Outstanding Contribution to Brand India’",
      hasQuote: false,
      special: false,
    },
    {
      id: 7,
      imgSrc: "6.jpg",
      date: "RF United in Triumph | September 2024",
      title: "For the first time, 140 Olympic and Paralympic athletes have come together on the same platform",
      author: "Nita M Ambani at United in Triumph ",
      hasQuote: false,
      special: false,
    },
    {
      id: 8,
      imgSrc: "7.jpg",
      date: "ICT Day 2024 | April 2024",
      title: "“For India to shine, more and more girls must take up STEM”",
      author: "Isha M. Ambani, Director, RIL",
      hasQuote: false,
      special: false,
    },
    {
      id: 9,
      imgSrc: "8.jpg",
      date: "Fortune 100 MPW Asia | October 2024",
      title: "Isha M. Ambani recognized among Fortune 100 Most Powerful Women Asia for 2024",
      // author: "Nita M. Ambani awarded for ‘Outstanding Contribution to Brand India’",
      hasQuote: false,
      special: false,
    },
    {
      id: 10,
      imgSrc: "9.jpg",
      date: "NVIDIA AI Summit 2024 | October 2024",
      title: "India Mobile Congress 2024 | October 2024",
      author: "Anant M. Ambani, Chairman, Reliance Jio",
      hasQuote: false,
      special: false,
    },
    {
      id: 11,
      imgSrc: "10.jpg",
      // date: "ICT Day 2024 | April 2024",
      title:
        "We hope Vantara becomes a beacon of hope globally and can showcase how a forward-thinking institution can help global biodiversity conservation initiatives.",
      author: "Anant M. Ambani, Director, RIL and Reliance Foundation Boards",
      hasQuote: false,
      special: true,
    },
    {
      id: 12,
      imgSrc: "11.jpg",
      // date: "India Mobile Congress 2024 | October 2024",
      title: "Anant M. Ambani inaugurates Jio-bp's 500th charging station with bp CEO Murray Auchincloss",
      // author: "Anant M. Ambani, Chairman, Reliance Jio",
      hasQuote: false,
      special: false,
    },
  ];

  return (
    <section className="featured block pb-0" id="featured">
      <div className="container">
        <div className="secHeading">
          <h3>Leadership Highlights</h3>
        </div>

        {/* Family Day Video */}
        <FamilyDayVideo />

        {/* Leadership Insights */}
        <div className="row">
          {articles.map((article, index) => (
            <div
              className={`col-lg-${article.special ? 8 : index === 0 ? 12 : 4} col-md-${index === 0 ? 12 : 6}`}
              key={article.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`article ${index === 0 ? "highlightArticle" : ""} ${article.hasQuote ? "hasQuote" : ""}`}>
                <Link to={`article/${article.id}`} className="aWrap">
                  <div className="aImg special">
                    <img src={`${imgPath}${article.imgSrc}`} alt="" />
                  </div>
                  <div className="aContent">
                    <small>{article.date}</small>
                    <h4>{article.title}</h4>
                    <span>{article.author}</span>
                  </div>
                </Link>
                {article.hasQuote && (
                  <div className="aQuote">
                    <h5>{article.quote}</h5>
                    <span>{article.author}</span>
                    <button href="#!" className="btn btn-rounded">
                      <i className="fa fa-play"></i> Rewatch the RIL 47th AGM
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
