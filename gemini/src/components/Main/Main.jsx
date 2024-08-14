import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import Card from "./Card";
import { Context } from "../../context/Context";

const Main = () => {
  // Destructure context values
  const { onSent, setInput, recentPrompt, resultData, input, showResult, loading } =
    useContext(Context);
  const [isVisible, setIsVisible] = useState(false);

  // Handle input changes and update visibility
  const handleInputChange = (e) => {
    setInput(e.target.value); // Only update the input state
    setIsVisible(!!e.target.value); // Show the send button if input is not empty
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span className="gradient-text">Hello, Vats</span>
              </p>
              <p>
                <span className="greet-text">How can I help you today?</span>
              </p>
            </div>
            <div className="cards">
              <Card
                title="A key that unlocks nothing. Why?"
                icon={assets.compass_icon}
                onClick={() => {
                  console.log("Card clicked!"); // Debugging line
                  onSent("A key that unlocks nothing. Why?");
                }}
              />
              <Card
                title="Explain the virtual DOM in one sentence."
                icon={assets.bulb_icon}
                onClick={() => {
                  console.log("Card clicked!"); // Debugging line
                  onSent("Explain the virtual DOM in one sentence.");
                }}
              />
              <Card
                title="What if Napoleon won at Waterloo?"
                icon={assets.message_icon}
                onClick={() => {
                  console.log("Card clicked!"); // Debugging line
                  onSent("What if Napoleon won at Waterloo?");
                }}
              />
              <Card
                title="Describe an invention that could change daily life in the next 50 years."
                icon={assets.code_icon}
                onClick={() => {
                  console.log("Card clicked!"); // Debugging line
                  onSent("Describe an invention that could change daily life in the next 50 years.");
                }}
              />
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="disclaimer">
        <div className="main-bottom">
          <div className="searchbar">
            <input
              type="text"
              className="text-input"
              placeholder="Enter a prompt here"
              onChange={handleInputChange} // Updates input and visibility
              value={input}
              onFocus={() => {
                document.getElementsByClassName(
                  "searchbar"
                )[0].style.backgroundColor = "rgba(52, 55, 56, 0.816)";
              }}
              onBlur={() => {
                document.getElementsByClassName(
                  "searchbar"
                )[0].style.backgroundColor = "#232526";
              }}
            />
            <div className="icons">
              <div className="gallery">
                <img src={assets.gallery_icon} alt="" />
              </div>
              <div className="mic">
                <img src={assets.mic_icon} alt="" />
              </div>
              {isVisible && (
                <div className="send">
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    alt="Send Icon"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses.{" "}
          <a href="https://support.google.com/gemini/answer/13594961?visit_id=638592548660279389-74096135&p=privacy_notice&rd=1#privacy_notice">
            Your privacy and Gemini Apps
          </a>
        </p>
      </div>
    </div>
  );
};

export default Main;
