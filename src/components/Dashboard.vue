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
  <div class="bg-white">
    <Navbar />

    <main class="p-4 lg:p-5 hero h-full">
      <div class="dashboard-header mb-4">
        <h1 class="text-xl lg:text-2xl font-bold">Dashboard</h1>
      </div>

      <div
        class="card lg:flex lg:flex-row lg:flex-wrap justify-evenly p-4 flex lg:flex-1 flex-1 flex-col gap-4 lg:min-w-[250px] border border-gray-300 rounded-md"
      >
        <div
          class="bg-[#ececec] rounded-lg p-4"
        >
          <h2 class="text-lg font-semibold">Total Employees</h2>
          <p id="total-employees" class="text-2xl">120</p>
        </div>
        <div
          class="hover:bg-[#c9ffa6] cursor-pointer bg-[#ececec] rounded-lg p-4"
          @click="openPopup('Departments', departmentsList, 'departments')"
        >
          <h2 class="text-lg font-semibold">Departments</h2>
          <p id="departments" class="text-2xl">8</p>
        </div>
        <div
          class="hover:bg-[#c9ffa6] cursor-pointer bg-[#ececec] rounded-lg p-4"
          @click="openPopup('New Employees This Month', newEmployeesList, 'employees')"
        >
          <h2 class="text-lg font-semibold">New Employees This Month</h2>
          <p id="new-employees" class="text-2xl">5</p>
        </div>
        <div
          class="hover:bg-[#c9ffa6] cursor-pointer bg-[#ececec] rounded-lg p-4"
          @click="openPopup('Open Positions', jobPositionsList, 'positions')"
        >
          <h2 class="text-lg font-semibold">Open Positions</h2>
          <p id="open-positions" class="text-2xl">3</p>
        </div>
        <PopupModal
          :visible="isPopupVisible"
          :title="popupTitle"
          :content="popupContent"
          :type="popupType"
          @close="closePopup"
        />
      </div>

      <div
        class="card relative h-[250px] overflow-y-auto overflow-x-hidden bg-[#f4f4f4] border border-gray-300 rounded-lg flex-1 min-w-[250px]"
      >
        <h2 class="text-lg font-semibold sticky bg-inherit top-0 p-3 z-10">Recent Activities</h2>
        <table class="table-auto w-full ml-3">
          <tbody>
            <tr class="hover:bg-slate-300" v-for="(activity, index) in topActivities" :key="index">
              <td class="py-2 px-1">{{ activity.title }}</td>
              <td class="py-2 px-1 font-semibold">{{ activity.date }}</td>
            </tr>
          </tbody>
        </table>
        <button
          v-if="allActivities.length > 5"
          @click="goToRecentActivities"
          class="px-4 pb-4 text-blue-500 underline"
        >
          View All
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import PopupModal from './PopupModal.vue'
import { ref } from 'vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    PopupModal
  },
  data() {
    return {
      isPopupVisible: false,
      popupTitle: '',
      popupContent: [],
      popupType: ''
    }
  },
  methods: {
    openPopup(title, content, type) {
      this.popupTitle = title
      this.popupContent = content
      this.popupType = type
      this.isPopupVisible = true
    },
    closePopup() {
      this.isPopupVisible = false
    }
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
