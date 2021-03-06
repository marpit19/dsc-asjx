import styles from "./speakers.module.css";
export default function Speakers() {
  return (
    <>
      <div className={styles.background} id="speakers-section">
        <div className={styles.header}>
          <span className={styles.half_background}>Speakers</span>
        </div>
        <div className={`container-fluid ${styles.speakers}`}>
          <div className="row">
            <div
              className={`${styles.speaker_img_wrapper} col-md-6 d-flex justify-content-center p-4`}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="/images/speakers/gurupreet-singh.jpg"
                  alt="Speaker 1"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Gurupreet Singh
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Android
                    <br /> Foodpanda(APAC)
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.speaker_img_wrapper} col-md-6 d-flex justify-content-center p-4`}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="/images/speakers/himanshu-singh.jpg"
                  alt="Speaker 2"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Himanshu Singh
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Android
                    <br /> Google Developer Expert
                  </p>
                </div>
              </div>
            </div>
            {/* <div
              className={`${styles.speaker_img_wrapper} col-md-4 d-flex justify-content-center p-4`}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="/images/speakers/coming-soon.png"
                  alt="Speaker 3"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Speaker 3
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    SDE
                    <br /> Comapny
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
