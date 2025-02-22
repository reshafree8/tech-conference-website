<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
  
    let darkMode = writable(false);
    let menuOpen = writable(false);
  
    onMount(() => {
        const savedMode = localStorage.getItem("darkMode");
        const isDark = savedMode ? JSON.parse(savedMode) : false;
        darkMode.set(isDark);
  
        if (isDark) {
            document.documentElement.classList.add("dark-mode");
        }
    });
  
    function toggleDarkMode() {
        darkMode.update((mode) => {
            const newMode = !mode;
            localStorage.setItem("darkMode", JSON.stringify(newMode));
  
            if (newMode) {
                document.documentElement.classList.add("dark-mode");
            } else {
                document.documentElement.classList.remove("dark-mode");
            }
  
            return newMode;
        });
    }
  
    function toggleMenu() {
        menuOpen.update(open => !open);
    }
  </script>
  
  <!-- Navbar -->
  <nav class="navbar">
    <div class="logo">
        <a href="/">🚀 TechConf</a>
    </div>
  
    <!-- Desktop Menu -->
    <ul class="nav-links">
        <li><a href="/speakers">Speakers</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  
    <!-- Dark Mode & Mobile Menu -->
    <div class="nav-icons">
        <button on:click={toggleDarkMode} class="theme-toggle">
            {$darkMode ? '🌙' : '☀️'}
        </button>
        
        <!-- Hamburger Icon (Only visible on mobile) -->
        <button on:click={toggleMenu} class="hamburger">
            ☰
        </button>
    </div>
  
    <!-- Mobile Dropdown Menu -->
    {#if $menuOpen}
        <ul class="mobile-menu">
            <li><a href="/speakers" on:click={toggleMenu}>Speakers</a></li>
            <li><a href="/schedule" on:click={toggleMenu}>Schedule</a></li>
            <li><a href="/about" on:click={toggleMenu}>About</a></li>
            <li><a href="/sponsors" on:click={toggleMenu}>Sponsors</a></li>
            <li><a href="/contact" on:click={toggleMenu}>Contact</a></li>
        </ul>
    {/if}
  </nav>
  
  <!-- Styles -->
  <style>
    :global(.dark-mode) {
        background-color: #121212;
        color: #ffffff;
    }
  
    :global(.dark-mode .navbar) {
        background: linear-gradient(90deg, #333, #444);
        border-bottom: 2px solid #666;
    }
  
    :global(.dark-mode .nav-links a),
    :global(.dark-mode .mobile-menu a) {
        color: #ffffff;
    }
  
    /* Navbar */
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: linear-gradient(to bottom, #ffffff, #dbefff);
        color: white;
        position: relative;
        z-index: 100;
    }
  
    .logo a {
        font-size: 2rem;
        font-weight: bold;
        color: linear-gradient(to right, #ffcc00, #ff9900);
        text-decoration: none;
    }
  
    .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
    }
  
    .nav-links a {
        text-decoration: none;
        color: #0056b3;
        font-size: 1.4rem;
        font-weight: 600;
        transition: 0.3s ease-in-out;
        padding: 10px 15px;
        border-radius: 8px;
    }
  
    .nav-links a:hover {
        color: #222;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
  
    .nav-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
  
    /* Dark Mode & Hamburger */
    .theme-toggle {
        border: none;
        background: transparent;
        font-size: 2rem;
        cursor: pointer;
        color: #0056b3;
    }
  
    .hamburger {
        display: none;
        border: none;
        background: transparent;
        font-size: 2rem;
        cursor: pointer;
        color: #0056b3;
    }
  
    /* Mobile Dropdown Menu */
    .mobile-menu {
        position: absolute;
        top: 100%;
        right: 0;
        width: 250px;
        background: white;
        list-style: none;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        animation: dropDown 0.3s ease-in-out;
    }
  
    .mobile-menu a {
        text-decoration: none;
        color: #0056b3;
        font-size: 1rem;
        font-weight: 600;
        padding: 10px 15px;
        border-radius: 5px;
        transition: 0.3s;
    }
  
    .mobile-menu a:hover {
        color: #005f7f;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.05);
    }
  
    /* Responsive */
    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
  
        .hamburger {
            display: block;
        }
    }
  
    @keyframes dropDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
  </style>
  