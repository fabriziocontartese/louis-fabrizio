function AboutPage() {
  return (
    <>
      <div id="about-hero">
        <div id="about-hero-text">
          <h1>Experience RecipeX</h1>
          <p>All your recipes in one place.</p>
        </div>
        <div id="about-hero-image"></div>
      </div>

      <div id="about-team">
        <div className="about-team-profile">
          <h3>Louis,<br />Co-CTO</h3>
          <div id="about-team-profile-louis"></div>
        </div>
        <div className="about-team-profile">
          <h3>Fabrizio,<br />Co-CTO</h3>
          <div id="about-team-profile-fabrizio"></div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
