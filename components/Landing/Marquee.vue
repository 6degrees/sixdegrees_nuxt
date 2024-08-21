<template>
  <section class="marquee" dir="ltr">
    <!-- Container for the marquee -->
    <div class="container-fluid rest">
      <div class="row">
        <div class="col-12">
          <!-- Main Marquee Wrapper -->
          <div class="main-marq">
            <!-- Sliding Container -->
            <div class="slide-har st1">
              <!-- First Box: Displays the list of items -->
              <div class="box non-strok">
                <!-- Iterate over each item in data array -->
                <div v-for="item in data" :key="item.id" class="item">
                  <!-- Display item title with a stroke icon -->
                  <h4 class="d-flex align-items-center">
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
                  <h4 class="d-flex align-items-center">
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