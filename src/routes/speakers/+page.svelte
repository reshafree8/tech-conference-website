<script>
  let speakers = [
    { name: "Dr. Jane Doe", title: "AI Researcher", image: "/speakers/speaker1.jpg", bio: "Pioneer in deep learning and AI ethics, driving innovation in responsible AI. Author of multiple research papers on neural networks and ethical AI deployment.", main: true },
    { name: "John Smith", title: "CEO, TechCorp", image: "/speakers/speaker2.jpg", bio: "Visionary tech leader shaping the future of cloud computing and digital transformation. Led multimillion-dollar projects optimizing enterprise AI solutions.", main: true },
    { name: "Emily Johnson", title: "Cybersecurity Analyst", image: "/speakers/speaker3.jpg", bio: "Cybersecurity expert specializing in ethical hacking, risk assessment, and forensic analysis. Works with global firms to enhance digital security infrastructure." },
    { name: "Michael Brown", title: "Data Scientist", image: "/speakers/speaker4.jpg", bio: "Big data specialist leveraging AI-driven analytics to uncover trends and predictive insights. Passionate about AI ethics and automation in decision-making." },
    { name: "Sophia Lee", title: "Software Engineer", image: "/speakers/speaker5.jpg", bio: "Full-stack developer and DevOps engineer, designing scalable web applications and optimizing cloud infrastructure. Advocate for women in tech." },
    { name: "David Kim", title: "Blockchain Expert", image: "/speakers/speaker6.jpg", bio: "Blockchain researcher focused on decentralized finance (DeFi) and smart contracts. Works on enterprise blockchain adoption and security innovations." },
    { name: "Carlos Rivera", title: "Cloud Architect", image: "/speakers/speaker7.jpg", bio: "Cloud solutions expert helping enterprises migrate to scalable, secure, and cost-efficient cloud environments. Speaker at global tech summits." },
    { name: "Aisha Patel", title: "Machine Learning Engineer", image: "/speakers/speaker8.jpg", bio: "ML researcher designing innovative AI solutions for automation and predictive modeling. Leads AI-driven projects in healthcare and finance." },
    { name: "Ryan Wong", title: "IoT Specialist", image: "/speakers/speaker9.jpg", bio: "Internet of Things (IoT) expert working on smart city development, embedded systems, and AI-driven automation for connected devices." }
  ];
  let filter = "all";
</script>

<section class="speakers">
  <h2>🌟 Our Featured Speakers 🌟</h2>
  <div class="filters">
    <button on:click={() => filter = "all"} class:selected={filter === "all"}>All Speakers</button>
    <button on:click={() => filter = "main"} class:selected={filter === "main"}>Today's Speakers</button>
  </div>
  <div class="grid">
    {#each speakers as speaker}
      <div class="speaker-card {filter === 'main' && speaker.main ? 'highlight' : ''}">
        <img src={speaker.image} alt={speaker.name}>
        <h3>{speaker.name}</h3>
        <p class="title">{speaker.title}</p>
        <p class="bio">{speaker.bio}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .speakers h2 {
    text-align: center;
    font-size: 2.2rem;
    color: #222;
    margin-bottom: 30px;
    margin-top: 50px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 25px;
  }
  .speaker-card {
    padding: 25px;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .speaker-card:hover {
    transform: translateY(-6px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  }
  .speaker-card img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #007bff;
  }
  .title {
    font-weight: bold;
    color: #007bff;
    margin-top: 8px;
    font-size: 1.2rem;
  }
  .bio {
    font-size: 1rem;
    color: #444;
    margin-top: 10px;
    line-height: 1.5;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .highlight {
    border: 9px solid #00cdff;
  }
  .filters {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }
  .filters button {
    padding: 12px 18px;
    margin: 0 12px;
    border: none;
    cursor: pointer;
    background: #ddd;
    border-radius: 25px;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  .filters button:hover {
    background: #ccc;
    transform: scale(1.05);
  }
  .filters button.selected {
    background: #007bff;
    color: white;
  }
  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
  @media (max-width: 480px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
    .speaker-card img {
      width: 140px;
      height: 140px;
    }
    .filters {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>