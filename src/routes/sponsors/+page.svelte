<script>
  let sponsors = [
      { name: "Gold Sponsor", img: "/sponsors/gold.png", link: "https://www.goldsponsor.com" },
      { name: "Silver Sponsor", img: "/sponsors/silver.png", link: "https://www.silversponsor.com" }
  ];
</script>

<style>
  
  .sponsor-page {
    text-align: center;
    min-height: 100vh; /* Ensure full-page background */
}
  /* Header Section */
  .sponsor-header {
      color: white;
      padding: 50px 20px;
      border-radius: 10px;
      max-width: 900px;
      margin: 30px auto;
  }

  .sponsor-header h2 {
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
  }

  .sponsor-header p {
      font-size: 1.2rem;
      margin-top: 10px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
  }

  /* Sponsor Box */
  .sponsor-container {
      background: white;
      padding: 40px;
      max-width: 900px;
      margin: 30px auto;
      border-radius: 15px;
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }

  .sponsor-grid {
      display: flex;
      justify-content: center;
      gap: 50px;
      margin-top: 20px;
  }

  .sponsor-card {
      text-align: center;
      padding: 20px;
      border: 3px solid #ddd;
      border-radius: 10px;
      transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  .sponsor-card a {
      display: block;
      text-decoration: none;
      color: inherit;
  }

  .sponsor-card:hover {
      transform: scale(1.1);
      border-color: #0056b3;
      background-color: #e3f2fd;
  }

  .sponsor-card img {
      width: 250px;
      height: 250px;
      object-fit: contain;
      margin-bottom: 10px;
  }

  .sponsor-card h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #C2185B;
  }

  /* Support Section */
  .support-text {
      padding: 30px;
      max-width: 900px;
      margin: 20px auto;
      border-radius: 15px;
  }

  .support-text p {
      font-size: 1.5rem;
      color: #0056b3;
      line-height: 1.6;
  }
</style>


<div class="sponsor-page">
<div class="sponsor-header">
  <h2><i class="fa-solid fa-heart"></i> Special Thanks to Our Sponsors</h2>
  <p>We truly appreciate the support and generosity of our sponsors, helping us create an amazing experience for all attendees.</p>
</div>

<div class="sponsor-container">
  <div class="sponsor-grid">
      {#each sponsors as sponsor}
          <div class="sponsor-card">
              <a href={sponsor.link} target="_blank">
                  <img src={sponsor.img} alt={sponsor.name}>
                  <h3>{sponsor.name}</h3>
              </a>
          </div>
      {/each}
  </div>
</div>

<div class="support-text">
  <p>TechConf 2025 is proud to have the support of our esteemed sponsors who believe in fostering innovation and empowering tech communities. Their contributions help us bring together developers, entrepreneurs, and industry leaders to explore groundbreaking ideas and create the future of technology.</p>
</div>
</div>


