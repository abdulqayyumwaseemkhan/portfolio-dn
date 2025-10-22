import "./Article.css";
import "./HomeArticles.css";
import { Link } from "react-router-dom";

export default function HomeArticles() {
  const blogData = [
    {
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
      title: "5 Simple Habits for a Healthier Diet",
      date_of_posting: "2025-10-22T13:00:00+05:00",
      p1: "Small, consistent habits can make a huge difference in your overall health...",
      p2: "Instead of drastic diet changes, focus on slow, sustainable improvements...",
      posted_by: "Abdul Qayyum Waseem Khan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      title: "The Power of Protein: What You Need to Know",
      date_of_posting: "2025-10-20T10:30:00+05:00",
      p1: "Protein is one of the body’s essential building blocks...",
      p2: "From lean meats and eggs to beans, lentils, and nuts...",
      posted_by: "Abdul Qayyum Waseem Khan",
    },
    // ... rest of articles
  ];

  // 🧠 Step 1: Sort articles by latest date
  const sortedArticles = blogData.sort(
    (a, b) => new Date(b.date_of_posting) - new Date(a.date_of_posting)
  );

  // 🧠 Step 2: Take the top 2
  const recentArticles = sortedArticles.slice(0, 2);

  return (
    <div className="recent-articles">
      {/* <h2>Recent Articles</h2> */}
      {recentArticles.map((curElem, index) => (
        <div className="home-card" key={index}>
          <div className="home-pic">
            <img src={curElem.image} alt={curElem.title} />
          </div>
          <div className="detail-area">
            <div className="article-head">
              <h3>{curElem.title}</h3>
              <h4>{new Date(curElem.date_of_posting).toLocaleDateString()}</h4>
            </div>
            <button>
              <Link to="/blogs" className="blog-btn">
                Read More...
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
