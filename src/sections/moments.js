import React from "react";
import styles from "@styles/moments.module.css";

function Moments({
  momentsSectionRef,
  timeLineTitleRef,
  timelineLineRef,
  timelineContainerRef,
}) {
  // Sample milestone data (replace with actual content)
  const milestones = [
    {
      year: 2015,
      title: "IEDC Inception",
      description:
        "The Innovation and Entrepreneurship Development Centre was established to foster innovation and entrepreneurial culture among students.",
    },
    {
      year: 2016,
      title: "First Startup Bootcamp",
      description:
        "Launched our first bootcamp to guide aspiring entrepreneurs through the basics of startup development and funding.",
    },
    {
      year: 2017,
      title: "Innovation Lab Launch",
      description:
        "Opened a dedicated innovation lab to provide students with resources and equipment for prototype development.",
    },
    {
      year: 2018,
      title: "First Incubator Launched",
      description:
        "Established our first incubation center to nurture early-stage startups and provide mentorship.",
    },
    {
      year: 2019,
      title: "National Recognition",
      description:
        "Received national recognition for outstanding contribution to entrepreneurship development in educational institutions.",
    },
    {
      year: 2020,
      title: "Virtual Hackathon Series",
      description:
        "Adapted to the pandemic with successful virtual hackathons reaching participants nationwide.",
    },
    {
      year: 2021,
      title: "Industry Partnership Program",
      description:
        "Initiated partnerships with leading industries to provide real-world problem statements and mentorship.",
    },
    {
      year: 2022,
      title: "Startup Success Milestone",
      description:
        "Our incubated startups collectively raised over $2 million in funding across various sectors.",
    },
    {
      year: 2023,
      title: "Global Innovation Exchange",
      description:
        "Established international collaborations with universities and innovation hubs worldwide.",
    },
    {
      year: 2024,
      title: "Expansion Initiative",
      description:
        "Expanded facilities to accommodate growing demand, including specialized labs for emerging technologies.",
    },
    {
      year: 2025,
      title: "Celebrating A Decade of Innovation",
      description:
        "Marking 10 years of fostering innovation, with 100+ startups launched and a thriving entrepreneurial ecosystem.",
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
              key={milestone.year}
              className={styles.timelineItem}
              ref={timelineContainerRef}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.card}>
                {milestone.year === 2025 && (
                  <span className={styles.anniversary}>
                    10 Year Anniversary
                  </span>
                )}
                <div className={styles.year}>{milestone.year}</div>
                <h3 className={styles.title}>{milestone.title}</h3>
                <p className={styles.description}>{milestone.description}</p>
                <div className={styles.cardImage}>
                  {/* Placeholder for image */}
                  {/* <img src={`/images/milestones/${milestone.year}.jpg`} alt={milestone.title} /> */}
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
