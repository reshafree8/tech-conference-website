<script lang="ts">
  let filterDate: string = "all"; // Selected filter value

  function handleFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    filterDate = target.value;
  }

  let schedule = [
    { date: "June 15, 2025", time: "10:00 AM", topic: "AI in the Future", speaker: "Dr. Jane Doe" },
    { date: "June 15, 2025", time: "11:30 AM", topic: "Cybersecurity Trends", speaker: "Emily Johnson" },
    { date: "June 15, 2025", time: "1:00 PM", topic: "Data Science in Business", speaker: "Michael Brown" },
    { date: "June 15, 2025", time: "2:30 PM", topic: "Future of Blockchain", speaker: "David Kim" },
    { date: "June 15, 2025", time: "4:00 PM", topic: "Women in Tech", speaker: "Sophia Lee" },
    { date: "June 16, 2025", time: "9:00 AM", topic: "Cloud Computing", speaker: "John Smith" },
    { date: "June 16, 2025", time: "10:30 AM", topic: "Machine Learning Breakthroughs", speaker: "Dr. Jane Doe" },
    { date: "June 16, 2025", time: "12:00 PM", topic: "Quantum Computing", speaker: "Dr. Alan Roberts" },
    { date: "June 16, 2025", time: "2:00 PM", topic: "Ethical AI Development", speaker: "Emily Johnson" },
    { date: "June 16, 2025", time: "3:30 PM", topic: "Startup Success Stories", speaker: "John Smith" },
    { date: "June 17, 2025", time: "9:30 AM", topic: "The Future of Web 3.0", speaker: "Mark Taylor" },
    { date: "June 17, 2025", time: "11:00 AM", topic: "Cybersecurity in Finance", speaker: "Anna Williams" }
  ];
</script>

<section class="schedule">
  <h2>📅 Conference Schedule</h2>

  <!-- Filter Dropdown -->
  <div class="filters">
    <label for="filter-date">Filter by Date:</label>
    <select id="filter-date" on:change={handleFilterChange}>
      <option value="all">All Dates</option>
      <option value="June 15, 2025">June 15, 2025</option>
      <option value="June 16, 2025">June 16, 2025</option>
      <option value="June 17, 2025">June 17, 2025</option>
    </select>
  </div>

  <!-- Conference Schedule Table -->
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Topic</th>
          <th>Speaker</th>
        </tr>
      </thead>
      <tbody>
        {#each schedule as session (session.topic)}
          {#if filterDate === "all" || session.date === filterDate}
            <tr>
              <td>{session.date}</td>
              <td>{session.time}</td>
              <td>{session.topic}</td>
              <td>{session.speaker}</td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
</section>


<style>
 
 


  /* Overall Section Styling */
  .schedule {
    text-align: center;
    padding: 3rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 98%;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 50px;
  }

  /* Extra space before footer */
  .schedule::after {
    content: "";
    display: block;
    height: 6rem; /* Increased spacing */
  }

  /* Filter Dropdown Styling */
  .filters {
    margin-bottom: 2rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  label {
    font-size: 1.2rem;
    font-weight: bold;
  }

  select {
    padding: 10px 15px;
    font-size: 1rem;
    border: 2px solid #007bff;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
  }

  select:hover {
    background-color: #007bff;
    color: white;
  }

  /* Table Styling */
  .table-container {
    width: 100%;
    overflow-x: auto;
    padding: 0 1rem;
  }

  table {
    width: 100vw; /* Full width of viewport */
    max-width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    margin: auto;
  }

  th, td {
    padding: 1.2rem;
    text-align: left;
  }

  th {
    background-color: #007bff;
    color: white;
    font-size: 1.2rem;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #e9ecef;
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.3s ease;
  }
</style>
