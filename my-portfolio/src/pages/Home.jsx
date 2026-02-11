const Home = ({ darkMode }) => {
  const colors = {
    heading: darkMode ? "#ffffff" : "#0f172a",
    subtext: darkMode ? "#e5e7eb" : "#1e40af",
    badgeText: darkMode ? "#ffffff" : "#0f172a",
    badgeBg: darkMode
      ? "rgba(0,0,0,0.55)"
      : "rgba(255,255,255,0.75)",
    buttonBg: darkMode ? "#facc15" : "#111827",
    buttonText: darkMode ? "#111827" : "#ffffff",
    overlayBg: darkMode
      ? "rgba(15, 23, 42, 0.85)"
      : "linear-gradient(135deg, #f8ede3, #a49d95)",
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(20px,5vw,60px)",
        boxSizing: "border-box",
        overflowX: "hidden", // 🔥 prevents horizontal scroll
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          border: "2px solid rgba(0,0,0,0.15)",
          borderRadius: "24px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
          padding: "clamp(30px,5vw,60px)",
          position: "relative",
          boxSizing: "border-box", // 🔥 prevents overflow from padding
        }}
      >
        {/* Overlay (now safe & contained) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: colors.overlayBg,
            borderRadius: "24px",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
          }}
        >
          {/* Profile */}
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              margin: "0 auto 22px",
              border: "3px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              boxShadow: "0 0 35px rgba(255,255,255,0.4)",
            }}
          >
            👨‍💻
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(32px,5vw,48px)",
              fontWeight: "900",
              marginBottom: "12px",
              color: colors.heading,
              textShadow: darkMode
                ? "0 0 22px rgba(255,255,255,0.6)"
                : "none",
              wordBreak: "break-word", // 🔥 prevents overflow
            }}
          >
            EKTA POONIA
          </h1>

          {/* Role */}
          <p
            style={{
              fontSize: "clamp(16px,2vw,18px)",
              marginBottom: "20px",
              color: colors.subtext,
            }}
          >
            Full-Stack Web Developer
          </p>

          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              padding: "10px 22px",
              borderRadius: "999px",
              background: colors.badgeBg,
              fontWeight: "600",
              marginBottom: "30px",
              color: colors.badgeText,
              maxWidth: "100%",
            }}
          >
            Crafting Code & Experiences
          </div>

          {/* Socials */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              marginBottom: "32px",
              fontSize: "22px",
              color: colors.heading,
              flexWrap: "wrap", // 🔥 prevents overflow on mobile
            }}
          >
            <span>💼</span>
            <span>🐦</span>
            <span>🎨</span>
            <span>💻</span>
          </div>

          {/* Button */}
          <button
            style={{
              padding: "15px 44px",
              fontSize: "16px",
              fontWeight: "800",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
              boxShadow: "0 12px 35px rgba(250,204,21,0.45)",
              maxWidth: "100%",
            }}
          >
            LET’S TALK
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
