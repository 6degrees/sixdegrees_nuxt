<template>
  <!-- Start Blogs Section -->
  <section class="blog-list py-[120px] sub-bg text-dark">
    <!-- Container for the blog list section -->
    <div class="container">
      <!-- Section Header -->
      <div class="sec-head mb-80">
        <div class="flex items-center justify-end">
          <!-- Title Section -->
          <div>
            <h3 class="uppercase font-extralight text-5xl fz-50">{{ $t('components.landing.blogs.section.title') }} <span class="font-bold">{{ $t('components.landing.blogs.section.subtitle') }}</span></h3>
          </div>
          <!-- Link to All Blogs -->
          <div class="ml-auto underline">
            <a href="/blog" class="animsition-link all-more sub-title tracking-wide"></a>
          </div>
        </div>
      </div>
      <!-- Loop through blog items -->
      <div v-for="(item, index) in data" :key="item.id" :class="`item block wow fadeInUp`" :data-wow-delay="`${(index * 0.2) + 0.2}s`" data-fx="3">
        <!-- Link Wrapper -->
        <a :href="item.link" class="block__link animsition-link" :data-img="item.img"></a>
        <!-- Row for Blog Content -->
        <div class="flex flex-wrap">
          <div class="lg:w-1/2 ">
            <!-- Blog Info (Tag and Date) -->
            <div class="text-[13px] uppercase tracking-[1px] mb-[30px]">
              <span class="px-[20px] py-[7px] border border-[rgba(0,0,0,0.2)] rounded-[30px] mr-1.5 rtl:mr-0 rtl:ml-1.5">{{ item.tag[$i18n.locale] }}</span>
              <span class="opacity-80">{{ item.date[$i18n.locale] }}</span>
            </div>
            <!-- Blog Title -->
            <h3 class="uppercase text-3xl">{{ item.title[$i18n.locale] }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Blogs Section -->
</template>

<script setup>
import HoverImgFx3 from 'assets/js/hoverEffect3';
import data from '@/data/Landing/blog.json';

/*
|--------------------------------------------------------------------------
| On Component Mount
|--------------------------------------------------------------------------
|
| This code runs after the component has been mounted. It initializes the
| hover effect and preloads images based on data attributes.
|
| @function onMounted - Lifecycle hook that runs when the component is mounted
| @function document.querySelectorAll - Selects elements with specific attributes or classes
| @class HoverImgFx3 - Class for handling hover effects
| @function new HoverImgFx3 - Initializes the hover effect for the selected elements
| @function el.dataset.img.split - Splits the data-img attribute into an array of image URLs
| @function document.createElement - Creates new image elements for preloading
| @property {string} imgel.src - Sets the source of the image to preload
| @property {string} imgel.className - Adds a class to the image element for styling
|
*/
onMounted(() => {
  // Initialize hover effects on elements with the specified data attribute
  [...document.querySelectorAll('[data-fx="3"] > a, a[data-fx="3"]')].forEach(link => new HoverImgFx3(link));

  // Preload images for elements with the specified classes
  [...document.querySelectorAll('.block__title, .block__link, .content__text-link')].forEach((el) => {
    const imgsArr = el.dataset.img.split(','); // Split the data-img attribute into an array of image URLs
    for (let i = 0, len = imgsArr.length; i <= len - 1; ++i) {
      const imgel = document.createElement('img'); // Create a new image element
      imgel.style.visibility = 'hidden'; // Hide the image element to avoid display issues
      imgel.style.width = 0; // Set the width to 0 to prevent layout shifts
      imgel.src = imgsArr[i]; // Set the source of the image
      imgel.className = 'preload'; // Add a class for possible styling or identification
    }
  });
});
</script>
