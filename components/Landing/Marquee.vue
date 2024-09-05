<template>
  <section class="marquee relative overflow-hidden py-[50px]" dir="ltr">
    <!-- Container for the marquee -->
    <div class="container-fluid rest">
      <div class="flex flex-wrap">
        <div class="w-full">
          <!-- Main Marquee Wrapper -->
          <div class="main-marq relative p-0">
            <!-- Sliding Container -->
            <div class="slide-har flex st1">
              <!-- First Box: Displays the list of items -->
              <div class="box non-strok">
                <!-- Iterate over each item in data array -->
                <div v-for="item in data" :key="item.id" class="item">
                  <!-- Display item title with a stroke icon -->
                  <h4 class="flex items-center uppercase text-7xl">
                    <span>{{ item.title[$i18n.locale] }}</span>
                    <span class="ml-50 stroke icon">*</span>
                  </h4>
                </div>
              </div>
              <!-- Second Box: Duplicate of the first box for continuous scrolling effect -->
              <div class="box non-strok">
                <!-- Iterate over each item in data array again -->
                <div v-for="item in data" :key="item.id" class="item">
                  <!-- Display item title with a stroke icon -->
                  <h4 class="flex items-center">
                    <span>{{ item.title[$i18n.locale] }}</span>
                    <span class="ml-50 stroke icon">*</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import the data from the JSON file
import data from '@/data/Landing/marquee.json';
</script>