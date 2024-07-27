import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="bg-[#f7f4ed]">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__h1">
              Human <br />
              stories & ideas
            </h1>
            <h2 className="header__h2">
              A place to read, write, and deepen your understanding
            </h2>
            <div>
              <Link to="/blogs">
                <button className="header__btn">Start reading</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}