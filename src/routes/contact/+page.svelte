<script>
  import { onMount, onDestroy } from "svelte";

  onMount(() => {
      document.body.style.setProperty("font-family", "Arial, sans-serif");
      document.body.style.setProperty("background", "#e3f2fd");
      document.body.style.setProperty("margin", "0");
      document.body.style.setProperty("padding", "0");
  });

  onDestroy(() => {
      document.body.style.removeProperty("font-family");
      document.body.style.removeProperty("background");
      document.body.style.removeProperty("margin");
      document.body.style.removeProperty("padding");
  });
</script>

<style>
  .contact-container {
      max-width: 1000px;
      margin: 50px auto;
      padding: 30px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
  }

  .contact-form, .contact-options {
      flex: 1;
      min-width: 350px;
  }

  .contact-form h2 {
      font-size: 2rem;
      color: #0056b3;
  }

  .contact-form input, .contact-form select, .contact-form textarea {
      width: 100%;
      padding: 12px;
      margin: 8px 0;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      transition: 0.3s;
  }

  .contact-form input:hover, .contact-form select:hover, .contact-form textarea:hover {
      background: #f0faff;
      border-color: #007bff;
  }

  .contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
      border-color: #0056b3;
      box-shadow: 0 0 5px rgba(0, 86, 179, 0.5);
  }

  .contact-form button {
      width: 100%;
      background: linear-gradient(to right, #0056b3, #00cdff);
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      padding: 12px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
  }

  .contact-form button:hover {
      background: linear-gradient(to right, #0046a3, #00a3e5);
  }

  .contact-box {
      background: #f4f9ff;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 15px;
  }

  .contact-box h3 {
      color: #0056b3;
      font-size: 1.4rem;
  }

  .contact-box a, .contact-box button {
      display: block;
      text-align: center;
      margin-top: 10px;
  }

  .contact-box button {
      background: #0056b3;
      color: white;
      padding: 10px;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
  }

  .contact-box button:hover {
      background: #003d82;
  }

  @media (max-width: 768px) {
      .contact-container {
          flex-direction: column;
          align-items: center;
      }
  }
</style>

<div class="contact-container">
  <div class="contact-form">
      <h2>Request a Call</h2>
      <p>Give us some info so the right person can get back to you.</p>
      <input type="text" placeholder="First Name" required>
      <input type="text" placeholder="Last Name" required>
      <input type="text" placeholder="Job Title">
      <input type="email" placeholder="Email" required>
      <input type="tel" placeholder="Phone">
      <select>
          <option>Country/Region</option>
          <option>United States</option>
          <option>India</option>
          <option>United Kingdom</option>
          <option>Australia</option>
      </select>
      <select>
          <option>Product Interest</option>
          <option>AI Solutions</option>
          <option>Cloud Computing</option>
          <option>Data Analytics</option>
          <option>Web Development</option>
      </select>
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Contact Me</button>
  </div>

  <div class="contact-options">
      <div class="contact-box">
          <h3>Give us a call</h3>
          <p><strong>0-808-212-</strong></p>
          <a href="#a">Find your local office</a>
          <a href="#b">Get billing and tech support</a>
          <a href="#c">Manage billing, licenses & renewals</a>
      </div>
      <div class="contact-box">
          <h3>💬 Chat with us</h3>
          <p>Get product info, login help, and live chat with an agent.</p>
          <button>Let's Chat</button>
      </div>
      <div class="contact-box">
          <h3>Leave us some feedback</h3>
          <p>Good or bad, we love to hear it all.</p>
          <button>Send Feedback</button>
      </div>
  </div>
</div>