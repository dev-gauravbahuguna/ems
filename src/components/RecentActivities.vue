<template>
    <div class="card relative h-[250px]  overflow-y-auto overflow-x-hidden bg-[#f4f4f4] border border-gray-300 rounded-lg flex-1 min-w-[250px]">
      <div class="flex gap-2 items-center sticky top-0 z-10 bg-inherit">
        <span class="text-lg font-semibold  bg-inherit  ml-3 py-3 ">Recent Activities</span>
        <span>
          <img
            class="w-5 h-5 hover:w-6 hover:h-6 cursor-pointer"
            @click="addActivity"
            src="/add.png"
          />
        </span>
      </div>
  
      <table class="table-auto w-full ml-3">
        <tbody>
          <tr
            v-for="(activity, index) in activities"
            :key="index"
            class="hover:bg-slate-300"
          >
            <td class="py-2 px-1">
              <template v-if="activity.editing">
                <input
                  v-model="activity.title"
                  type="text"
                  placeholder="Enter activity title"
                  class="border border-gray-300 rounded px-2 py-1"
                />
              </template>
              <template v-else>
                {{ activity.title }}
              </template>
            </td>
            <td class="py-2 px-1 font-semibold">
              <template v-if="activity.editing">
                <input
                  v-model="activity.date"
                  type="date"
                  class="border border-gray-300 rounded px-2 py-1"
                />
              </template>
              <template v-else>
                {{ activity.date }}
              </template>
            </td>
            <td><img v-if="this.activities[index].editing == false" class="w-5 h-5 cursor-pointer" src="/pencil.png"  @click="editActivity(index)"></img></td>       
            <td v-if="activity.editing" class="py-2 px-1">
              <button
                @click="submitActivity(index)"
                class="text-white bg-green-500 hover:bg-green-600 rounded px-2 py-1 mr-2"
              >
                Submit
              </button>
              <button
                @click="discardActivity(index)"
                class="text-white bg-red-500 hover:bg-red-600 rounded px-2 py-1"
              >
                Discard
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        v-if="activities.length > 5"
        @click="goToRecentActivities"
        class="px-4 pb-4 text-blue-500 underline"
      >
        View All
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecentActivities',
    props: ['activities'],
  
    methods: {
      addActivity() {
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        this.activities.unshift({
          title: '',
          date: currentDate,  // Set default date to today
          editing: true, // Indicates that the row is in editing mode
        });
      },
      submitActivity(index) {
        if (this.activities[index].title.trim() === '') {
          alert('Activity title cannot be empty.');
          return;
        }
        this.activities[index].editing = false;
      },

      editActivity(index){
        console.log("hi click",index)
        this.activities[index].editing = true;
      },


      discardActivity(index) {
        this.activities.splice(index, 1);
      },
      goToRecentActivities() {
        this.$emit('view-all');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  