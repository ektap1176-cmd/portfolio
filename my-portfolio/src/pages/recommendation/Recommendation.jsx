const Recommendation = () => {
  return (
    <section className="recommend-section retro-surface">
      <span className="recommend-shape recommend-shape-circle" aria-hidden="true" />
      <span className="recommend-shape recommend-shape-square" aria-hidden="true" />

      <div className="recommend-header">
        <span className="recommend-kicker">//</span>
        <h2 className="recommend-title">RECOMMENDATION</h2>
        <span className="recommend-dot" aria-hidden="true" />
      </div>

      <p className="recommend-soon">(Coming soon)</p>

      <article className="recommend-card panel">
        <div className="recommend-avatar" aria-hidden="true">DB</div>
        <h3 className="recommend-name">LAKSH YADAV</h3>
        <p className="recommend-role">A IMAGINE DESIGNER AT MIND</p>
        <p className="recommend-quote">
          Not only did they deliver a stunning website, but their attention to UI/UX details
          truly enhanced the user experience. Highly recommend!
        </p>
      </article>
    </section>
  );
};

export default Recommendation;

