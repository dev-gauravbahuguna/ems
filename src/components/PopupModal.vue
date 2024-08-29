<template>
   <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-50  flex z-20 items-center justify-center"
    @click.self="close"
  >
    <div class="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      
      <!-- Job Positions Section -->
      <div v-if="type === 'positions'" class="space-y-4">
        <ul class="space-y-2">
          <li
            v-for="(job, index) in content"
            :key="index"
            class="flex justify-between items-center p-2 border-b"
          >
            <div>
              <a
                :href="job.url"
                target="_blank"
                class="text-lg text-blue-500 hover:underline"
              >
                {{ job.title }}
              </a>
              <p class="text-sm text-gray-600">Experience: {{ job.experience }}</p>
            </div>
          </li>
        </ul>
        <button
          @click="viewMorePositions"
          class="w-full py-2 mt-4 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          View More
        </button>
      </div>

      <!-- New Employees Section -->
      <div v-else-if="type === 'employees'" class="space-y-4">
        <ul class="space-y-2">
          <li
            v-for="(employee, index) in content"
            :key="index"
            class="p-2 border-b"
          >
            <div class="text-lg font-semibold">{{ employee.name }}</div>
            <p class="text-sm text-gray-600">{{ employee.position }}</p>
            <p class="text-sm text-gray-500">Joined: {{ employee.date }}</p>
          </li>
        </ul>
      </div>

      <!-- Departments Section -->
      <div v-else-if="type === 'departments'" class="space-y-4">
        <ul class="space-y-2">
          <li
            v-for="(department, index) in content"
            :key="index"
            class="flex justify-between items-center p-2 border-b"
          >
            <div class="text-lg font-semibold">{{ department.name }}</div>
            <button
              @click.prevent="exploreDepartment(department)"
              class="text-blue-500 underline hover:text-blue-600"
            >
              Explore
            </button>
          </li>
        </ul>
      </div>

      <!-- Default Section (Total Employees) -->
      <button
        @click="close"
        class="w-full py-2 mt-4 text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    viewMorePositions() {
      console.log("view more positions")
    },
    exploreDepartment(department) {
      console.log(`Exploring department: ${department.name}`)
     
    }
  }
}
</script>
