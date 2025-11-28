import { useEffect, useState } from "react";

export default function BackToTop() {
  // at first it is false so not visible
  const [visible, setVisible] = useState(false);

  // When the user scrolls down the page set visible true it becomes visible
  useEffect(() => {
    const handleScroll = () => {
      // if the user scrolled more than 300px ==show button
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

// scroll the page back to the top in a smooth way when we click the button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",    
        bottom: "20px",       
        right: "20px",            
        padding: "15px 20px",
        backgroundColor: "yellow",
        color: "black",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: visible ? "block" : "none", 
        zIndex: 9999,           
      }}
    >
      ↑
    </button>
  );
}
