import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();
  const StickyNav = () => {
    useEffect(() => {
      const handlescroll = () => {
        const nav = document.querySelector("nav");
        if (document.documentElement.scrollTop > 20) {
          nav.classList.add("sticky");
        } else {
          nav.classList.remove("sticky");
        }
      };
      window.addEventListener("scroll", handlescroll);
      return () => {
        window.removeEventListener("scroll", handlescroll);
      };
    }, []);

    return <nav>navigation</nav>;
  };
  return (
    <div className="">
      <div className="home">
        <section className="mainsec">
          <h1>
          "Current Solutions for Your Electric Bills: Fast, Secure, and User-Friendly."
          </h1>
          <br></br>
          <br></br><br></br>

          <br></br>
          <br></br>

          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          

          <br></br>
          <br></br>


          <br></br>
          <br></br>


          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          

        </section>
        <section className="buttonwala">
        <button onClick={() => navigate("/login")} className="loginbtn">
            LOGIN
          </button>
          </section>
      </div>


    </div>
  );
};
