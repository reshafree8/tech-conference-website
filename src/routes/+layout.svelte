
<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import "$lib/styles/global.css";

    // Correct Bootstrap import
    import "bootstrap/dist/css/bootstrap.css";
</script>

<Navbar />
<slot />
<Footer />
