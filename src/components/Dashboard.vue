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



.card ul {
  padding: 4px;
  margin-left: 10px;
}

.card ul li {
  margin-bottom: 10px;
}

.blur-bg {
  filter: blur(5px);
  transition: filter 0.3s ease;
}
.card {
  margin: 10px;
}
</style>

<template>
  <div class="bg-amber-50">
    <Navbar />

    <main class="p-4 lg:p-5 hero h-full">
      <div class="dashboard-header mb-4">
        <h1 class="text-xl lg:text-2xl font-bold">Dashboard</h1>
      </div>

      <div class="card bg-orange-200 lg:flex lg:flex-row lg:flex-wrap justify-evenly p-4 flex lg:flex-1 flex-1 flex-col gap-4 lg:min-w-[250px] border border-gray-300 rounded-md">
        
        <!-- Total Employees -->

            <div class="rounded-lg p-4">
              <h2 class="text-lg font-semibold">Total Employees</h2>
              <p id="total-employees" class="text-5xl font-bold text-green-500">120+</p>
            </div>

        
        <!-- Departments -->
        <Dropdown>
          <template #trigger>
             <div class=" cursor-pointer rounded-lg p-4">
           
              <h2 class="text-lg font-semibold ">Departments</h2>
              <p id="departments" class="text-2xl text-green-700">8</p>
            </div>
          </template>
          <template #content>
            <ul class="p-4 space-y-2">
              <li
                v-for="(department, index) in departmentsList"
                :key="index"
                class="text-lg hover:bg-slate-300 px-3 rounded-sm cursor-pointer"
              >
                {{ department.name }}
              </li>
            </ul>
          </template>
        </Dropdown>
        
        <!-- New Employees This Month -->
        <Dropdown>
          <template #trigger>
            <div  class=" cursor-pointer rounded-lg p-4">
              <h2 class="text-lg font-semibold">New Employees This Month</h2>
              <p id="new-employees" class="text-2xl text-green-700">5</p>
            </div>
          </template>
          <template #content>
            <ul  v-for="(employee, index) in newEmployeesList"
            :key="index" class="p-4 space-y-2 m-2 ">
              <li            
              >
                <div class="text-lg font-semibold">{{ employee.name }}</div>
                <p class="text-sm  text-gray-600">{{ employee.position }}</p>
                <p class="text-sm  text-gray-500">Joined: {{ employee.date }}</p>
              </li>
            </ul>
          </template>
        </Dropdown>

        <!-- Open Positions -->
        <Dropdown>
          <template #trigger>
            <div class=" cursor-pointer rounded-lg p-4">
              <h2 class="text-lg font-semibold">Open Positions</h2>
              <p id="open-positions" class="text-2xl text-green-700">3</p>
            </div>
          </template>
          <template #content>
            <ul class="p-4 space-y-2">
              <li
                class="m-2"
                v-for="(job, index) in jobPositionsList"
                :key="index"
              >
                <a :href="job.url" target="_blank" class="text-lg text-blue-500 hover:underline">{{ job.title }}</a>
                <p class="text-sm text-gray-600">Experience: {{ job.experience }}</p>
              </li>
            </ul>
          </template>
        
        </Dropdown>

      </div>
      <RecentActivities :activities="topActivities"  />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue'
import Dropdown from './Dropdown.vue';
import RecentActivities from './RecentActivities.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Dropdown,
    RecentActivities
  },


  
  setup() {
    const allActivities = ref([
      { title: 'Gaurav was promoted to Senior Developer.', date: '2024-08-25' },
      { title: 'Himanshu joined the Marketing team.', date: '2024-08-24' },
      { title: 'Employee of the Month: Nitesh.', date: '2024-08-23' },
      { title: 'Project X launched successfully.', date: '2024-08-22' },
      { title: 'Team outing scheduled for next week.', date: '2024-08-21' },
      { title: 'New training program for employees.', date: '2024-08-20' },
      { title: 'Office renovation planned for next month.', date: '2024-08-19' },
      { title: 'Annual review meeting scheduled.', date: '2024-08-18' },
      { title: 'New employee wellness program introduced.', date: '2024-08-17' },
      { title: 'Company holiday on Friday.', date: '2024-08-16' },
      { title: 'New training program for employees.', date: '2024-08-20' },
      { title: 'Office renovation planned for next month.', date: '2024-08-19' },
      { title: 'Annual review meeting scheduled.', date: '2024-08-18' },
      { title: 'New employee wellness program introduced.', date: '2024-08-17' },
      { title: 'Company holiday on Friday.', date: '2024-08-16' }
    ])
    const jobPositionsList = [
      { title: 'Frontend Developer', url: '/jobs/frontend-developer', experience: '3-5 years' },
      { title: 'Backend Developer', url: '/jobs/backend-developer', experience: '4-6 years' },
      { title: 'UX Designer', url: '/jobs/ux-designer', experience: '2-4 years' },
      { title: 'Marketing Specialist', url: '/jobs/marketing-specialist', experience: '3+ years' }
    ]

    const newEmployeesList = [
      { name: 'John Doe', position: 'Software Engineer', date: '2024-08-01' },
      { name: 'Jane Smith', position: 'Product Manager', date: '2024-08-03' },
      { name: 'Alice Johnson', position: 'UX Designer', date: '2024-08-07' },
      { name: 'Michael Brown', position: 'Data Analyst', date: '2024-08-10' },
      { name: 'Emily Davis', position: 'HR Specialist', date: '2024-08-12' }
    ]
    const departmentsList = [
      { name: 'Engineering' },
      { name: 'Marketing' },
      { name: 'Human Resources' },
      { name: 'Finance' },
      { name: 'Sales' },
      { name: 'Customer Support' },
      { name: 'Legal' },
      { name: 'IT' }
    ]

    

    const topActivities = ref(allActivities.value.slice(0, 7))

    return { allActivities, topActivities, jobPositionsList, departmentsList, newEmployeesList }
  }
}
</script>

