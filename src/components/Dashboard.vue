

<style scoped>
.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

.user-menu a {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
}

.dashboard-header h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.card h2 {
  font-size: 22px;
  margin-bottom: 10px;
}

.card p {
  font-size: 18px;
  font-weight: bold;
}

.card ul {
  list-style-type: none;
  padding: 0;
}

.card ul li {
  margin-bottom: 10px;
}

.blur-bg {
  filter: blur(5px);
  transition: filter 0.3s ease;
}
</style>

<template>
  <div class="bg-white">
    <Navbar />

   

    <main class="p-4 lg:p-5 hero">
      <div class="dashboard-header mb-4">
        <h1 class="text-xl lg:text-2xl font-bold">Dashboard</h1>
      </div>

      <div class="lg:flex lg:flex-row lg:flex-wrap flex flex-col gap-4">
        <div class="card bg-[#f4f4f4] border border-gray-300 rounded-lg p-4 flex-1 min-w-[250px]">
          <h2 class="text-lg font-semibold">Total Employees</h2>
          <p id="total-employees" class="text-2xl">120</p>
        </div>
        <div class="card bg-[#f4f4f4] border border-gray-300 rounded-lg p-4 flex-1 min-w-[250px]">
          <h2 class="text-lg font-semibold">Departments</h2>
          <p id="departments" class="text-2xl">8</p>
        </div>
        <div class="card bg-[#f4f4f4] border border-gray-300 rounded-lg p-4 flex-1 min-w-[250px]">
          <h2 class="text-lg font-semibold">Recent Activities</h2>
          <ul id="recent-activities" class="list-disc pl-5">
            <li>Gaurav was promoted to Senior Developer.</li>
            <li>Himanshu joined the Marketing team.</li>
            <li>Employee of the Month: Nitesh.</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Dashboard',
  components: {
    Navbar
  }
}
</script>
