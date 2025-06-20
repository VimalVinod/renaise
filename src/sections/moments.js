import React from "react";
import styles from "@styles/moments.module.css";
import Image from "next/image";

function Moments({
  momentsSectionRef,
  timeLineTitleRef,
  timelineLineRef,
  timelineContainerRef,
}) {
  // Sample milestone data (replace with actual content)
  const milestones = [
    {
      id: 1,
      year: 2015,
      image: "/stuff/milestones/iedc_inception.jpeg",
      title: "IEDC Inception",
      description:
        "The Innovation and Entrepreneurship Development Centre was established to foster innovation and entrepreneurial culture among students.",
    },
    {
      id: 2,
      year: 2020,
      image: "/stuff/milestones/digi_kerala.jpg",
      title: "Launch of Women Entrepreneurship Cell (WE-Cell)",
      description:
        "A women-led initiative to empower and support aspiring women entrepreneurs at IEDC Bootcamp CEC. WE-Cell aims to provide a platform for innovation, learning, and leadership in a time when women are reshaping the entrepreneurial landscape across India.",
    },
    {
      id: 3,
      year: 2020,
      title: "FABXL 3.0",
      image: "/stuff/milestones/fabxl.jpg",
      description:
        "The most spectacular event of the year, FABXL 3.0 invites participants to embrace the era of technology by learning rapid prototyping.",
    },
    {
      id: 4,
      year: 2022,
      image: "/stuff/milestones/award_2022.jpg",
      title:
        "Award for Top Performing IEDC in South Region & Alappuzha District (IPL)",
      description:
        "Recognized as the top-performing Innovation and Entrepreneurship Development Centre in both the South Region and Alappuzha District by the Innovation Premier League (IPL).",
    },
    {
      id: 5,
      year: 2024,
      image: "/stuff/milestones/exodia_24.jpg",
      title: "Exodia 2024",
      description:
        "An All-Kerala technical gala hosted by IEDC, featuring cutting-edge technologies like Generative AI, Augmented Reality, and Game Development, showcasing innovation and tech-driven creativity.",
    },
    {
      id: 6,
      year: 2025,
      image: "/stuff/milestones/exodia_25.jpg",
      title: "Exodia 2025",
      description:
        "A chance to explore cutting-edge domains like Cyber Security, Chatbot Mastery, and Robotics with IoT, empowering students with future-ready tech skills.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.momentsSection} ref={momentsSectionRef}>
        <h2 ref={timeLineTitleRef}>Milestones – 10 Years of IEDC</h2>

        <div className={styles.timelineContainer} ref={timelineContainerRef}>
          {/* Timeline line as a div for easier height manipulation */}
          <div className={styles.timelineLine} ref={timelineLineRef}></div>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={styles.timelineItem}
              ref={timelineContainerRef}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.card}>
                <div className={styles.year}>{milestone.year}</div>
                <h3 className={styles.title}>{milestone.title}</h3>
                <p className={styles.description}>{milestone.description}</p>
                <div className={styles.cardImage}>
                  {/* Placeholder for image */}
                  {/* <img src={`/images/milestones/${milestone.year}.jpg`} alt={milestone.title} /> */}
                  {milestone.image && (
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      width={300}
                      height={300}
                      className={styles.image}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Moments;
