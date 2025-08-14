import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const stats = [
    { number: "10K+", label: "Companies", id: 1 },
    { number: "314", label: "Templates", id: 2 },
    { number: "12M+", label: "Queries", id: 3 },
  ];
  const [isDesktop, setIsDesktop] = useState(innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsDesktop(innerWidth >= 768);
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  });
  return (
    <main className="flex items-center justify-center min-h-screen w-screen p-5">
      <div className="card sm:max-w-5xl flex max-sm:flex-col-reverse shadow-lg rounded-lg overflow-hidden">
        <div className="text sm:p-10 p-8 sm:w-1/2 max-sm:text-center my-auto">
          <h2 className="font-[Inter] font-bold text-4xl">
            Get <span>insights</span> that help your business grow.
          </h2>
          <p className="mt-5 mb-10 font-[Lexend_Deca]">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="stats flex justify-between items-center font-[Inter]">
            {stats.map((stat) => (
              <div key={stat.id} className="stat">
                <h2 className="text-xl font-bold">{stat.number}</h2>
                <p className="font-normal">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image-container sm:w-1/2 w-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-50">
          <img
            src={
              isDesktop
                ? "/images/image-header-desktop.jpg"
                : "/images/image-header-mobile.jpg"
            }
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
export default App;
