<script>
    import Countdown from '$lib/components/Countdown.svelte';
</script>

<div class="container">
    <main class="content">
        <!-- Hero Section -->
        <div class="hero">
            <div class="overlay">
                <h1>🚀 Tech Conference 2025</h1>
                <p>The biggest gathering of tech enthusiasts and innovators</p>
                <a href="/register" class="btn btn-primary">Register Now</a>
            </div>
        </div>

        <Countdown />

        <!-- Keynote Speakers -->
        <section id="speakers" class="keynote section">
            <h2>🎤 Keynote Speakers</h2>
            <div class="grid">
                <div class="speaker">
                    <img src="/speakers/speaker1.jpg" alt="Dr. Jane Doe">
                    <h3>Dr. Jane Doe</h3>
                    <p>AI Researcher, OpenAI</p>
                    <h4>Talk Title: "The Future of AI"</h4>
                    <p>Dr. Jane Doe will be exploring the latest advancements in AI research and the transformative impact AI will have on industries like healthcare, finance, and education.</p>
                </div>
                <div class="speaker">
                    <img src="/speakers/speaker2.jpg" alt="John Smith">
                    <h3>John Smith</h3>
                    <p>CEO, TechCorp</p>
                    <h4>Talk Title: "Innovations in Tech for the Next Decade"</h4>
                    <p>John Smith will discuss emerging trends in technology, from quantum computing to sustainable tech innovations, and how they will shape our future.</p>
                </div>
            </div>
        </section>
        
       
        <!-- Call-to-Action -->
<section id="register" class="cta">
    <h2>🚀 Join the Future of Tech</h2>
    <p>Don’t miss out on this groundbreaking event!</p>
    <a href="/register" class="btn btn-primary">Reserve Your Spot</a>
</section>

    </main>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Main Content */
    .content {
        max-width: 1400px; /* Expanded width */
        width: 100%;
        padding: 3rem;
    }

    /* Hero Section - Increased Size */
    .hero {
        height: 600px; /* Increased height */
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        width: 100%;
    }

    /* Frosted Glass Effect */
    .overlay {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        padding: 9rem;
        border-radius: 15px;
        color: #333;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .hero h1 {
        font-size: 4rem; /* Bigger title */
        font-weight: bold;
    }

    .hero p {
        font-size: 1.5rem;
    }

    .btn-primary {
        display: inline-block;
        padding: 1.2rem 2.5rem;
        background: #00cdff;
        color: white;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
    }

    .btn-primary:hover {
        background: #0056b3;
        transform: scale(1.05);
    }

    /* Sections with Shadow */
    .section {
        
        padding: 5rem;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        margin: 3rem 0;
    }

    
    /* Keynote Speakers */
.keynote {
    text-align: center;
}

#speakers h2{
padding: 40px;
}

.grid {
    display: flex;
    gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;
}

.speaker {
    padding: 2rem;
    border-radius: 10px;
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex: 1;  /* Ensures equal space distribution */
    max-width: 500px;  /* Limits max width for each speaker card */
    transition: transform 0.3s ease, background 0.3s ease;
   
}

.speaker:hover {
   
    color: black;
    transform: scale(1.05);
}

.speaker img {
    width: 150px; /* Adjust size for better balance */
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}

.speaker h3 {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: bold;
}

.speaker p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
}

.speaker h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.speaker p:last-child {
    font-size: 1rem;
    color: #333;
}


    /* Event Highlights
    .highlights {
        text-align: center;
    }

    .highlight {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 320px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    /* Hover Effect for Highlights */
    /* .highlight:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        background: #007bff;
        color: white;
    } */ 

   /* Call-to-Action */
/* Call-to-Action */
.cta {
    background: rgba(255, 255, 255, 0.8);
   
    color: black;
    text-align: center;
    padding: 4rem 2rem;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.cta h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.cta p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.cta .btn-primary {
    background: #00cdff;
    padding: 1.5rem 3rem;
    border-radius: 50px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    position: relative;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.cta .btn-primary:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Increased shadow intensity */
}







    /* Responsive */
    @media (max-width: 768px) {
        .hero {
            height: 350px;
        }

        .hero h1 {
            font-size: 2.5rem;
        }

        .grid {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
