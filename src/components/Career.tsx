import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Role 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Company A (Noida, India)</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built automated reporting in Excel and Power BI; wrote complex SQL
              for cleaning and transformation; delivered weekly KPIs, cohort and
              funnel analyses for stakeholders.
            </p>
          </div>

          {/* Role 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Analyst</h4>
                <h5>Company B</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led analytics for operations; created a Power BI semantic model over
              SQL views; reduced ad‑hoc reporting time by 60%; implemented A/B test
              evaluation workflows with Python.
            </p>
          </div>

          {/* Role 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              End‑to‑end BI delivery: data ingestion (SQL/Python), metric
              definitions, DAX modeling, and executive dashboards in Power BI
              across revenue, churn, and marketing analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;