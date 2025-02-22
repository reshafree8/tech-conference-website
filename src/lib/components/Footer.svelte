<script>
    import { Github, Twitter, Linkedin } from 'lucide-svelte';

    let year = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="footer-content">
        <a href="/" class="footer-logo">🚀 TechConf</a>
        
        <ul class="footer-links">
            <li><a href="/privacy">Privacy Policy </a></li>
            <li><a href="/terms">Terms of Service </a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
        </ul>

        <div class="social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                <Twitter size={24} color="white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                <Linkedin size={24} color="white" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on GitHub">
                <Github size={24} color="white" />
            </a>
        </div>
    </div>

    <div class="footer-bottom">
        <p>© {year} TechConf. All rights reserved.</p>
    </div>
</footer>

<style>
    .footer {
        background: linear-gradient(90deg, #333, #555);
        color: white;
        padding: 1.5rem;
        text-align: center;
        font-size: 1.2rem;
        border-top: 2px solid #777;
        margin-top: auto;
        width: 100%;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .footer-logo {
        font-size: 2rem;
        font-weight: bold;
        color: white;
        text-decoration: none;
    }

    .footer-links {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        padding: 0;
    }

    .footer-links a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        transition: 0.3s;
    }

    .footer-links a:hover {
       color: blanchedalmond;
       text-decoration: underline;
    }

    .social-media {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .social-media a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transition: 0.3s;
    }

    .social-media a:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

    .footer-bottom {
        margin-top: 1rem;
        font-size: 1rem;
    }

    /* ✅ Mobile Responsive Design */
    @media (max-width: 768px) {
        .footer {
            padding: 1rem;
            font-size: 1rem;
        }

        .footer-links {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .social-media a {
            width: 35px;
            height: 35px;
        }
    }

    @media (max-width: 480px) {
        .footer {
            font-size: 0.9rem;
        }

        .social-media a {
            width: 30px;
            height: 30px;
        }
    }
</style>
