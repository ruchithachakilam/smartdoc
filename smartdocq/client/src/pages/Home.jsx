
// // import React, { useContext, useEffect, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { SettingsContext } from "../context/SettingsContext";
// // import { FiUpload, FiMessageCircle, FiClock, FiMessageCircle as ChatIcon, FiX } from "react-icons/fi";

// // export default function Home() {
// //   const user = JSON.parse(localStorage.getItem("user")) || null;
// //   const { darkMode, language } = useContext(SettingsContext);
// //   const bgRef = useRef(null);
// //   const [chatOpen, setChatOpen] = useState(false); // Track if chatbot is open

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (bgRef.current) {
// //         const { width, height } = bgRef.current.getBoundingClientRect();
// //         const xPos = (e.clientX / width - 0.5) * 20;
// //         const yPos = (e.clientY / height - 0.5) * 20;
// //         bgRef.current.style.backgroundPosition = `calc(50% + ${xPos}px) calc(50% + ${yPos}px)`;
// //       }
// //     };
// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   const texts = {
// //     English: { welcome: "Welcome to SmartDocQ", tagline: "Your smart Q&A assistant for documents. Upload files, ask questions, and get instant answers.", login: "Log in", signup: "Sign up", features: [{ title: "Upload Documents", desc: "Easily upload PDFs, DOCX, and more.", icon: <FiUpload size={48} /> }, { title: "Ask Questions", desc: "Get precise answers from your files.", icon: <FiMessageCircle size={48} /> }, { title: "Instant Answers", desc: "Receive responses instantly.", icon: <FiClock size={48} /> }] },
// //     हिंदी: { /* Hindi translations */ },
// //     తెలుగు: { /* Telugu translations */ },
// //   };

// //   const t = texts[language] || texts.English;

// //   return (
// //     <div style={{ fontFamily: "Arial, sans-serif", position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
// //       {/* Animated Background */}
// //       <div
// //         ref={bgRef}
// //         style={{
// //           position: "fixed",
// //           inset: 0,
// //           background: darkMode
// //             ? "linear-gradient(135deg, #1f1c2c, #928dab, #1f1c2c)"
// //             : "linear-gradient(135deg, #B497BD 20%, #A3E0D9 60%, #FFC39E 90%)",
// //           backgroundSize: "250% 250%",
// //           animation: "gradientShift 25s ease infinite",
// //           zIndex: -1,
// //           transition: "background-position 0.4s ease",
// //         }}
// //       />
// //       <style>{`
// //         @keyframes gradientShift {
// //           0% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //           100% { background-position: 0% 50%; }
// //         }
// //       `}</style>

// //       {/* Hero Section */}
// //       <section style={{ textAlign: "center", padding: "80px 20px 40px 20px", color: "white", clipPath: "ellipse(100% 85% at 50% 0%)" }}>
// //         <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: 16 }}>{t.welcome}</h1>
// //         <p style={{ fontSize: "1.3rem", maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>{t.tagline}</p>
// //         {!user && (
// //           <div style={{ marginTop: 24 }}>
// //             <Link to="/login" style={{ ...heroBtn, background: "#fff", color: "#2575fc" }}>{t.login}</Link>
// //             <Link to="/signup" style={{ ...heroBtn, marginLeft: 16, background: "#27ae60", color: "#fff" }}>{t.signup}</Link>
// //           </div>
// //         )}
// //       </section>

// //       {/* Features Section */}
// //       <section style={{ padding: "40px 20px", maxWidth: 1200, margin: "0 auto" }}>
// //         <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 50 }}>Features</h2>
// //         <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
// //           {t.features.map((f, i) => (
// //             <div
// //               key={i}
// //               style={{
// //                 background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.85)",
// //                 backdropFilter: "blur(16px)",
// //                 borderRadius: 24,
// //                 padding: 36,
// //                 width: 280,
// //                 textAlign: "center",
// //                 boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
// //                 transition: "transform 0.3s",
// //                 cursor: "pointer",
// //               }}
// //               onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
// //               onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
// //             >
// //               <div style={{ marginBottom: 24 }}>{f.icon}</div>
// //               <h3 style={{ fontSize: 22, marginBottom: 14 }}>{f.title}</h3>
// //               <p style={{ fontSize: 15, lineHeight: 1.5 }}>{f.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Chatbot Icon */}
// //       <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
// //         {!chatOpen && (
// //           <div
// //             onClick={() => setChatOpen(true)}
// //             style={{
// //               background: "#2575fc",
// //               color: "#fff",
// //               width: 60,
// //               height: 60,
// //               borderRadius: "50%",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               cursor: "pointer",
// //               boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
// //             }}
// //           >
// //             <ChatIcon size={28} />
// //           </div>
// //         )}

// //         {chatOpen && (
// //           <div style={{ position: "relative" }}>
// //             <iframe
// //               src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/07/14/20251007140928-Q3F4O097.json"
// //               style={{
// //                 width: 400,
// //                 height: 600,
// //                 border: "none",
// //                 borderRadius: 16,
// //                 boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
// //               }}
// //               title="SmartDocQ Chatbot"
// //             />
// //             <div
// //               onClick={() => setChatOpen(false)}
// //               style={{
// //                 position: "absolute",
// //                 top: -12,
// //                 right: -12,
// //                 background: "#ff5e5e",
// //                 width: 32,
// //                 height: 32,
// //                 borderRadius: "50%",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 color: "#fff",
// //                 cursor: "pointer",
// //                 boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
// //               }}
// //             >
// //               <FiX size={18} />
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // const heroBtn = {
// //   padding: "12px 24px",
// //   borderRadius: "8px",
// //   textDecoration: "none",
// //   fontWeight: "bold",
// //   fontSize: "1rem",
// //   transition: "transform 0.2s",
// // };
// import React, { useContext, useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FiUpload,
//   FiMessageCircle,
//   FiClock,
//   FiMessageCircle as ChatIcon,
//   FiX,
// } from "react-icons/fi";
// import { SettingsContext } from "../context/SettingsContext";

// export default function Home() {
//   const user = JSON.parse(localStorage.getItem("user")) || null;
//   const { darkMode, language } = useContext(SettingsContext);
//   const [chatOpen, setChatOpen] = useState(false);
//   const bgRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (bgRef.current) {
//         const { width, height } = bgRef.current.getBoundingClientRect();
//         const xPos = (e.clientX / width - 0.5) * 20;
//         const yPos = (e.clientY / height - 0.5) * 20;
//         bgRef.current.style.backgroundPosition = `calc(50% + ${xPos}px) calc(50% + ${yPos}px)`;
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const texts = {
//     English: {
//       welcome: "Welcome to SmartDocQ",
//       tagline:
//         "Your AI-powered document Q&A dashboard. Upload, query, and discover insights instantly.",
//       login: "Log in",
//       signup: "Sign up",
//       features: [
//         {
//           title: "Upload Documents",
//           desc: "Quickly upload PDFs, Word, and text files securely.",
//           icon: <FiUpload size={48} />,
//         },
//         {
//           title: "Ask Questions",
//           desc: "Interact naturally with your documents using AI.",
//           icon: <FiMessageCircle size={48} />,
//         },
//         {
//           title: "Instant Answers",
//           desc: "Get precise, context-aware responses in seconds.",
//           icon: <FiClock size={48} />,
//         },
//       ],
//     },
//   };

//   const t = texts[language] || texts.English;

//   return (
//     <div
//       style={{
//         fontFamily: "Inter, sans-serif",
//         position: "relative",
//         minHeight: "100vh",
//         color: darkMode ? "#fff" : "#111",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Gradient Animated Background */}
//       <div
//         ref={bgRef}
//         style={{
//           position: "fixed",
//           inset: 0,
//           background: darkMode
//             ? "linear-gradient(120deg, #0f0c29, #302b63, #24243e)"
//             : "linear-gradient(135deg, #b8c6db 0%, #f5f7fa 100%)",
//           backgroundSize: "300% 300%",
//           animation: "gradientShift 25s ease infinite",
//           zIndex: -1,
//         }}
//       />
//       <style>{`
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>

//       {/* Header / Navbar */}
//       <header
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 999,
//           backdropFilter: "blur(12px)",
//           background: darkMode ? "rgba(30,30,50,0.5)" : "rgba(255,255,255,0.5)",
//           borderBottom: darkMode
//             ? "1px solid rgba(255,255,255,0.1)"
//             : "1px solid rgba(0,0,0,0.1)",
//           padding: "16px 40px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <h2 style={{ fontWeight: 700, fontSize: 24, letterSpacing: 1 }}>
//           SmartDoc<span style={{ color: "#2575fc" }}>Q</span>
//         </h2>
//         <div>
//           {!user && (
//             <>
//               <Link to="/login" style={navBtn}>
//                 {t.login}
//               </Link>
//               <Link to="/signup" style={{ ...navBtn, marginLeft: 12 }}>
//                 {t.signup}
//               </Link>
//             </>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section
//         style={{
//           textAlign: "center",
//           padding: "80px 20px 40px 20px",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "3rem",
//             fontWeight: 800,
//             marginBottom: 16,
//             background: "linear-gradient(90deg,#2575fc,#6a11cb)",
//             WebkitBackgroundClip: "text",
//             color: "transparent",
//           }}
//         >
//           {t.welcome}
//         </h1>
//         <p
//           style={{
//             fontSize: "1.2rem",
//             maxWidth: 700,
//             margin: "0 auto",
//             lineHeight: 1.6,
//             opacity: 0.9,
//           }}
//         >
//           {t.tagline}
//         </p>
//       </section>

//       {/* Feature Grid */}
//       <section
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//           gap: "30px",
//           maxWidth: "1000px",
//           margin: "60px auto",
//           padding: "0 20px",
//         }}
//       >
//         {t.features.map((f, i) => (
//           <div
//             key={i}
//             style={{
//               background: darkMode
//                 ? "rgba(255,255,255,0.08)"
//                 : "rgba(255,255,255,0.9)",
//               borderRadius: 20,
//               padding: 36,
//               textAlign: "center",
//               boxShadow: darkMode
//                 ? "0 8px 24px rgba(0,0,0,0.4)"
//                 : "0 8px 24px rgba(0,0,0,0.1)",
//               backdropFilter: "blur(16px)",
//               transition: "transform 0.3s, box-shadow 0.3s",
//               cursor: "pointer",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-10px)";
//               e.currentTarget.style.boxShadow =
//                 "0 12px 40px rgba(0,0,0,0.3)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow =
//                 "0 8px 24px rgba(0,0,0,0.15)";
//             }}
//           >
//             <div
//               style={{
//                 marginBottom: 20,
//                 color: "#2575fc",
//               }}
//             >
//               {f.icon}
//             </div>
//             <h3 style={{ fontSize: 20, fontWeight: 600 }}>{f.title}</h3>
//             <p
//               style={{
//                 fontSize: 15,
//                 opacity: 0.8,
//                 marginTop: 10,
//                 lineHeight: 1.6,
//               }}
//             >
//               {f.desc}
//             </p>
//           </div>
//         ))}
//       </section>

//       {/* Floating Chatbot */}
//       <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
//         {!chatOpen ? (
//           <div
//             onClick={() => setChatOpen(true)}
//             style={{
//               background:
//                 "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
//               color: "#fff",
//               width: 60,
//               height: 60,
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
//               animation: "pulse 2s infinite",
//             }}
//           >
//             <ChatIcon size={28} />
//           </div>
//         ) : (
//           <div style={{ position: "relative" }}>
//             <iframe
//               src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/07/14/20251007140928-Q3F4O097.json"
//               title="SmartDocQ Chatbot"
//               style={{
//                 width: 400,
//                 height: 600,
//                 border: "none",
//                 borderRadius: 16,
//                 boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
//               }}
//             />
//             <div
//               onClick={() => setChatOpen(false)}
//               style={{
//                 position: "absolute",
//                 top: -12,
//                 right: -12,
//                 background: "#ff5e5e",
//                 width: 32,
//                 height: 32,
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#fff",
//                 cursor: "pointer",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
//               }}
//             >
//               <FiX size={18} />
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.1); opacity: 0.85; }
//         }
//       `}</style>
//     </div>
//   );
// }

// const navBtn = {
//   textDecoration: "none",
//   padding: "10px 20px",
//   borderRadius: "8px",
//   fontWeight: "600",
//   color: "#fff",
//   background: "linear-gradient(90deg,#2575fc,#6a11cb)",
//   transition: "transform 0.2s ease",
// };
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileQuestion,
  MessageSquare,
  Star,
  LogIn,
  UserPlus,
  Info,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

export default function Home() {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="home-page">
      {/* 🌟 Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title">✨ Welcome to SmartDocQ</h1>
        <p className="subtitle">
          An intelligent platform to upload, ask, and extract insights from your
          documents.
        </p>

        <motion.div
          className="button-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <button className="btn primary" onClick={() => navigate("/chatbot")}>
            🤖 ChatBot
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate("/feedback")}
          >
            <MessageSquare className="icon" /> Give Feedback
          </button>
        </motion.div>
      </motion.section>

      {/* 🚀 Features Section */}
      <motion.section
        className="features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>🚀 Explore SmartDocQ Features</h2>
        <div className="feature-grid">
          {[
            {
              icon: <FileQuestion size={40} />,
              title: "Upload & Query",
              desc: "Upload documents and get instant AI-powered answers.",
              route: "/upload",
            },
            {
              icon: <MessageSquare size={40} />,
              title: "Feedback & Reviews",
              desc: "Share your thoughts and see what others think about SmartDocQ.",
              route: "/reviews",
            },
            {
              icon: <UserPlus size={40} />,
              title: "Signup & Personalization",
              desc: "Create an account to store your history and enhance AI interactions.",
              route: "/signup",
            },
            {
              icon: <LogIn size={40} />,
              title: "Secure Login",
              desc: "Access your saved questions and files securely anytime, anywhere.",
              route: "/login",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                feature.action ? feature.action() : navigate(feature.route)
              }
            >
              <div className="icon-wrap">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ℹ️ About Section */}
      <motion.section
        className="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="about-card">
          <h2>
            <Info className="inline-icon" /> About SmartDocQ
          </h2>
          <p>
            SmartDocQ is an AI-driven platform designed to help users query,
            analyze, and extract information from documents like PDFs and Word
            files. With personalized login, feedback management, and cloud
            integration, it offers a complete document intelligence experience.
          </p>
        </div>
      </motion.section>

      {/* ⭐ Reviews Section */}
      <motion.section
        className="reviews"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>
          <Star className="inline-icon" /> What Our Users Say
        </h2>
        <div className="review-grid">
          {[
            {
              name: "Komal",
              feedback:
                "SmartDocQ made file-based queries so easy! Absolutely love it 💜",
              rating: 5,
            },
            {
              name: "Rahul",
              feedback:
                "Intuitive interface and quick responses. Highly recommended!",
              rating: 4,
            },
            {
              name: "Sneha",
              feedback:
                "Perfect tool for students and professionals. Great experience!",
              rating: 5,
            },
          ].map((r, idx) => (
            <motion.div
              key={idx}
              className="review-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <p className="feedback">“{r.feedback}”</p>
              <p className="name">— {r.name}</p>
              <div className="stars">{"⭐".repeat(r.rating)}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 📧 Footer Section */}
      <footer className="footer">
        <Mail size={18} /> Contact:{" "}
        <a href="mailto:support@smartdocq.com">support@smartdocq.com</a>
        <p>© {new Date().getFullYear()} SmartDocQ. All Rights Reserved.</p>
      </footer>

      {/* 💬 Chatbot Section */}
      {chatOpen && (
        <div className="chatbot-wrapper">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/07/14/20251007140928-Q3F4O097.json"
            title="SmartDocQ Chatbot"
            className="chatbot-iframe"
          />
          <div className="chat-close" onClick={() => setChatOpen(false)}>
            <FiX size={20} />
          </div>
        </div>
      )}

      {/* 🎨 Styling */}
      <style>{`
        body {
          background: radial-gradient(circle at top left, #1e0033, #0f001a);
          color: #f2f2f2;
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
        }
        .home-page { text-align: center; overflow-x: hidden; }

        /* Hero */
        .hero { padding: 6rem 2rem 4rem; background: linear-gradient(135deg, #3b0066, #150033); color: #fff; }
        .title { font-size: 3rem; margin-bottom: 1rem; text-shadow: 0 0 15px #a970ff; }
        .subtitle { font-size: 1.2rem; max-width: 700px; margin: 0 auto 2rem; color: #d0bdf4; }
        .button-group { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
        .btn { padding: 12px 20px; border: none; border-radius: 14px; cursor: pointer; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease; }
        .btn.primary { background: linear-gradient(135deg, #8b5cf6, #7e22ce); color: white; box-shadow: 0 6px 18px rgba(139, 92, 246, 0.4); }
        .btn.secondary { background: linear-gradient(135deg, #9333ea, #581c87); color: white; box-shadow: 0 6px 18px rgba(147, 51, 234, 0.4); }
        .btn:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(139, 92, 246, 0.6); }

        /* Features */
        .features { padding: 4rem 2rem; background: #0f001a; }
        .features h2 { font-size: 2rem; margin-bottom: 2rem; color: #dcb5ff; }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .feature-card { background: #1e0033; padding: 1.5rem; border-radius: 16px; cursor: pointer; box-shadow: 0 10px 25px rgba(0,0,0,0.3); transition: all 0.3s ease; }
        .feature-card h3 { color: #c084fc; } .feature-card p { color: #ccc; }

        /* About */
        .about { padding: 4rem 2rem; display: flex; justify-content: center; }
        .about-card { background: rgba(30, 0, 51, 0.8); padding: 2rem; border-radius: 16px; max-width: 700px; color: #f0e6ff; text-align: center; box-shadow: 0 10px 25px rgba(100, 50, 200, 0.5); }
        .about-card h2 { color: #d9b8ff; margin-bottom: 1rem; }
        .about-card p { font-size: 1.1rem; line-height: 1.6; }

        /* Reviews */
        .reviews { padding: 4rem 2rem; background: #1a002b; }
        .review-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem; }
        .review-card { background: #2e005a; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 25px rgba(0,0,0,0.3); }
        .feedback { font-style: italic; color: #e0c3fc; }
        .name { font-weight: 700; color: #c084fc; }
        .stars { color: #FFD700; margin-top: 0.5rem; }

        /* Footer */
        .footer { padding: 1.5rem; background: #0a0014; color: #b5a0e0; font-size: 0.9rem; }
        .footer a { color: #dcb5ff; text-decoration: none; }

        /* Chatbot */
        .chatbot-wrapper { position: fixed; bottom: 20px; right: 20px; z-index: 1000; }
        .chatbot-iframe { width: 400px; height: 600px; border: none; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .chat-close { position: absolute; top: -12px; right: -12px; background: #ff5e5e; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
      `}</style>
    </div>
  );
}
