const About = ({ darkMode }) => {
  const colors = {
    heading: darkMode ? "#ffffff" : "#3e2f26",
    text: darkMode ? "#e5e7eb" : "#4b3a2f",

    overlayBg: darkMode
      ? "rgba(15, 23, 42, 0.85)"
      : "linear-gradient(135deg, #f8ede3, #a49d95)", // ✨ nude gradient

    buttonBg: darkMode
      ? "#1e293b"
      : "linear-gradient(135deg, #e6ccb2, #ddb892)",

    buttonText: darkMode ? "#ffffff" : "#3e2f26",

    photoBorder: darkMode ? "#334155" : "#c8ad7f",
  };

  const expertiseAreas = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Git & GitHub",
    "Netlify Deployment",
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "clamp(40px,5vw,100px) 20px",
      }}
    >
      <div
        style={{
          padding: "clamp(30px,4vw,60px)",
          borderRadius: "28px",
          background: colors.overlayBg,
          backdropFilter: "blur(16px)",
          maxWidth: "1100px",
          width: "100%",
          boxShadow: darkMode
            ? "0 25px 60px rgba(0,0,0,0.6)"
            : "0 25px 60px rgba(120, 95, 70, 0.15)",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "clamp(32px,5vw,48px)",
            fontWeight: "900",
            marginBottom: "40px",
            color: colors.heading,
          }}
        >
          About Me
        </h1>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(30px,5vw,60px)",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                width: "100%",
                aspectRatio: "1/1",
                border: `4px solid ${colors.photoBorder}`,
                borderRadius: "16px",
                background: darkMode ? "#1e293b" : "#f3e5d8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                fontWeight: "600",
                color: darkMode ? "#94a3b8" : "#7b5e57",
              }}
            >
              Your Photo Here
            </div>

            <button
              style={{
                width: "100%",
                padding: "14px 0",
                fontWeight: "700",
                border: "none",
                borderRadius: "12px",
                background: colors.buttonBg,
                color: colors.buttonText,
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(120, 95, 70, 0.2)",
              }}
            >
              Download CV
            </button>
          </div>

          {/* RIGHT */}
          <div>
            <p
              style={{
                fontSize: "clamp(15px,2vw,18px)",
                lineHeight: "1.8",
                marginBottom: "25px",
                color: colors.text,
              }}
            >
              Hi, I’m Ekta — a Full-Stack Web Developer focused on building
              clean, responsive, and user-friendly web applications.
              I enjoy turning ideas into real digital experiences.
            </p>

            <p
              style={{
                fontSize: "clamp(15px,2vw,18px)",
                lineHeight: "1.8",
                marginBottom: "35px",
                color: colors.text,
              }}
            >
              I work with HTML, CSS, and JavaScript to create strong foundations.
              Using React.js, I build dynamic interfaces, and with Node.js,
              I develop backend logic and APIs. I manage projects using GitHub
              and deploy applications with Netlify.
            </p>

            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
                color: colors.heading,
              }}
            >
              Core Skills
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "16px",
              }}
            >
              {expertiseAreas.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    textAlign: "center",
                    background: darkMode
                      ? "#1e293b"
                      : "linear-gradient(135deg, #f6e6d7, #edd5c1)", // ✨ nude gradient
                    color: darkMode ? "#ffffff" : "#4b3a2f",
                    boxShadow: darkMode
                      ? "0 6px 18px rgba(0,0,0,0.4)"
                      : "0 6px 18px rgba(120, 95, 70, 0.12)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
