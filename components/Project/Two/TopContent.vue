<template>
  <section class="py-10 pt-20 border-b border-[rgba(255,255,255,0.2)]">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="lg:w-5/12">
          <!-- Title with translation key -->
          <h2 class="mb-50 text-4xl" v-html="$t('components.project2.section.challenge.title')"></h2>
        </div>
        <div class="lg:w-7/12">
          <div class="">
            <!-- Goal with translation key -->
            <h5 class="mb-[30px] font-normal leading-[40px] text-2xl">{{ $t('components.project2.section.challenge.goal') }}</h5>
            <!-- Description with translation key -->
            <p class="text-slate-400 text-lg md:text-xl">{{ $t('components.project2.section.challenge.description') }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

/*
|--------------------------------------------------------------------------
| Accordion Data
|--------------------------------------------------------------------------
|
| The `accordionData` ref holds an array of objects, each representing
| a section of the accordion. Each object includes a title, content,
| and delay for animation purposes.
|
*/


/*
|--------------------------------------------------------------------------
| openAccordion Function
|--------------------------------------------------------------------------
|
| The `openAccordion` function is triggered when an accordion item is clicked.
| It first closes all accordion items by removing the 'active' class and
| hiding the content, then it activates the clicked item by adding the
| 'active' class and showing its content.
|
*/
function openAccordion(event) {
  // Close all accordion items
  document.querySelectorAll('.accordion .item').forEach(el => {
    el.classList.remove('active');
    el.querySelector('.accordion-info').style.display = 'none';
  });

  // Open the clicked accordion item
  event.currentTarget.classList.add('active');
  event.currentTarget.querySelector('.accordion-info').style.display = 'block';
}
</script>