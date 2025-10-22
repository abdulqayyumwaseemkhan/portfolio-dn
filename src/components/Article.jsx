import "./Article.css";
// import blogData from "../api/blogData.json";

export default function Article() {
  const blogData = [
    {
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
      title: "5 Simple Habits for a Healthier Diet",
      date_of_posting: "2025-10-22T13:00:00+05:00",
      p1: "Small, consistent habits can make a huge difference in your overall health. Start by choosing whole, unprocessed foods, increasing your intake of vegetables, and drinking more water throughout the day. Controlling portion sizes and planning your meals in advance helps you stay mindful and reduces impulsive eating decisions.",
      p2: "Instead of drastic diet changes, focus on slow, sustainable improvements. Swap sugary drinks for water, include fruits in your snacks, and balance your plate with protein, carbs, and healthy fats. Over time, these small steps build a foundation for a healthier lifestyle.",
      posted_by: "Amna Khan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      title: "The Power of Protein: What You Need to Know",
      date_of_posting: "2025-10-20T10:30:00+05:00",
      p1: "Protein is one of the body’s essential building blocks. It helps repair tissues, supports metabolism, and plays a major role in muscle development. Including adequate protein in every meal helps you stay full longer and maintain a healthy weight.",
      p2: "From lean meats and eggs to beans, lentils, and nuts, there are plenty of healthy sources to choose from. Aim to include a variety of proteins in your diet, and balance them with fiber-rich vegetables and whole grains for complete nutrition.",
      posted_by: "Amna Khan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      title: "Hydration Matters: Why Water is Essential",
      date_of_posting: "2025-10-18T09:15:00+05:00",
      p1: "Water is essential for almost every function in the human body — from digestion and temperature control to nutrient absorption and joint lubrication. Dehydration can lead to fatigue, headaches, and poor concentration, making it vital to stay hydrated throughout the day.",
      p2: "Experts recommend drinking at least 8 glasses of water daily, but needs may vary depending on climate and activity level. Incorporate hydrating foods like cucumbers, oranges, and soups, and keep a reusable water bottle with you to encourage regular intake.",
      posted_by: "Amna Khan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1200&auto=format&fit=crop",
      title: "Balanced Breakfasts to Start Your Day Right",
      date_of_posting: "2025-10-15T08:45:00+05:00",
      p1: "Breakfast is the fuel that kick-starts your metabolism and sets your energy levels for the day. A balanced breakfast should include complex carbohydrates for energy, lean protein for strength, and fiber to support digestion. Avoid skipping breakfast, as it can lead to overeating later in the day.",
      p2: "Try simple ideas like oatmeal topped with fruit and nuts, whole-grain toast with eggs, or yogurt mixed with seeds and honey. These options provide the nutrients your body needs while keeping you full until lunchtime.",
      posted_by: "Amna Khan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
      title: "Smart Snacking: Stay Energized All Day",
      date_of_posting: "2025-10-10T14:00:00+05:00",
      p1: "Snacking can be a healthy part of your diet when done right. The key is choosing nutrient-dense foods that provide lasting energy instead of empty calories. Combine protein, fiber, and healthy fats to stay full and avoid sugar spikes that lead to fatigue.",
      p2: "Good snack options include fruits with peanut butter, mixed nuts, roasted chickpeas, or yogurt with honey. Keeping healthy snacks nearby helps you make better choices when hunger strikes between meals.",
      posted_by: "Amna Khan",
    },
  ];

  return (
    <div className="all-cards">
      {blogData.map((curElem, index) => {
        return (
          <div className="blog-card" key={index}>
            <div className="article-pic">
              <img src={curElem.image} alt="" />
            </div>
            <div className="desc-area">
              <div className="article-heading">
                <h3>{curElem.title}</h3>
                <h4>
                  {new Date(curElem.date_of_posting).toLocaleDateString()}
                </h4>
              </div>
              <h4>Description:</h4>
              <p>{curElem.p1}</p>
              <p>{curElem.p2}</p>
              <h4>Posted by: {curElem.posted_by} </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
