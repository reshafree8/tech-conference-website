<script lang="ts">
  import { onDestroy } from "svelte";

  export let timeRemaining: number = 86400; // 1 day in seconds

  function formatTime(seconds: number) {
      return {
          days: Math.floor(seconds / 86400),
          hours: Math.floor((seconds % 86400) / 3600),
          minutes: Math.floor((seconds % 3600) / 60),
          secs: seconds % 60
      };
  }

  let time = formatTime(timeRemaining);

  const interval = setInterval(() => {
      if (timeRemaining > 0) {
          timeRemaining--;
          time = formatTime(timeRemaining);
      } else {
          clearInterval(interval);
      }
  }, 1000);

  onDestroy(() => clearInterval(interval)); // Cleanup on component destroy
</script>

<!-- Countdown Display -->
<div class="countdown">
  <h2>⏳ Countdown to Event</h2>
  <p>{time.days}d : {time.hours}h : {time.minutes}m : {time.secs}s</p>
</div>

<style>
  .countdown {
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      color: #ff9800;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1.5rem;
  }

  .countdown p {
      font-size: 2rem;
      font-weight: bold;
      letter-spacing: 2px;
  }

  /* ✅ Mobile Responsive Design */
  @media (max-width: 768px) {
      .countdown { font-size: 1.2rem; padding: 0.8rem; }
      .countdown p { font-size: 1.5rem; letter-spacing: 1px; }
  }

  @media (max-width: 480px) {
      .countdown { font-size: 1rem; padding: 0.6rem; }
      .countdown p { font-size: 1.2rem; }
  }
</style>
