import React from "react";

const Team = () => {
  const position = "-0.375rem";

  return (
    <section
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 300,
        fontStyle: "normal",
        textAlign: "center",
        width: "calc(min(90rem, 90%))",
        margin: "0 auto",
        paddingBlock: "min(20vh, 6rem)",
      }}
    >
      <span style={{ letterSpacing: "0.035rem" }}>meet our</span>
      <h2
        style={{
          fontSize: "clamp(3.5rem, 3rem + 1.6vw, 5rem)",
          marginTop: "-0.625rem",
          color: "#fff",
        }}
      >
        Team
      </h2>
      <p
        style={{
          lineHeight: "1.6",
          color: "#a3a3a3",
          maxWidth: "50rem",
          margin: "0 auto",
          fontSize: "clamp(0.9rem, 0.825rem + 0.3vw, 1.2rem)",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
        praesentium veritatis voluptatibus ut consequuntur quas consequatur
        omnis id rem obcaecati.
      </p>
      <span
        className="bg-watermark"
        style={{
          color: "#1f1f1f",
          fontSize: "clamp(6rem, 1.3333rem + 14.9333vw, 20rem)",
          fontWeight: 800,
          position: "absolute",
          zIndex: -1,
          left: "50%",
          transform: "translateX(-50%) translateY(-15%)",
          userSelect: "none",
          letterSpacing: "0.5rem",
        }}
      >
        team
      </span>
      <div
        className="cards"
        style={{
          marginTop: "7rem",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(12rem, 100%), 1fr))",
          gap: "2rem",
        }}
      >
        <div
          className="card"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Franklin Carlson"
            style={{ maxWidth: "100%", display: "block" }}
          />
          <div
            className="card-content"
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 99,
              left: 0,
              color: "#fff",
              width: "100%",
              padding: "1.875rem 1.25rem",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                textTransform: "capitalize",
                fontSize: "clamp(1rem, 0.9167rem + 0.2667vw, 1.25rem)",
                fontWeight: 400,
                color: "#f6f6f6",
              }}
            >
              franklin carlson
            </h3>
            <p
              style={{
                fontSize: "clamp(0.85rem, 0.75rem + 0.32vw, 1.15rem)",
                letterSpacing: "0.12rem",
                fontWeight: 300,
                maxWidth: "100%",
              }}
            >
              UX Designer
            </p>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                marginTop: "1.25rem",
              }}
            >
              <li>
                <a href="#">
                  <i
                    className="fa-brands fa-x-twitter"
                    style={{
                      color: "#fff",
                      fontSize: "clamp(0.9rem, 0.825rem + 0.3vw, 1.2rem)",
                    }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{
                      color: "#fff",
                      fontSize: "clamp(0.9rem, 0.825rem + 0.3vw, 1.2rem)",
                    }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              position: "absolute",
              content: '""',
              width: "5rem",
              height: "6.25rem",
              zIndex: 0,
              transition: "0.3s ease-in-out",
              background: "linear-gradient(to left, #ff9472, #f2709c)",
              top: position,
              left: position,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              content: '""',
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom, hsl(210deg 2.99% 26.27% / 20%), hsl(0deg 0% 3.14% / 90%))",
            }}
          ></div>
        </div>
        {/* Repeat the same structure for other team members */}
      </div>
    </section>
  );
};

export default Team;
