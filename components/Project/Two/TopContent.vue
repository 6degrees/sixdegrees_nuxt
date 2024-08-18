<template>
  <section class="section-padding bord-thin-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <!-- Title with translation key -->
          <h2 class="mb-50" v-html="$t('components.project2.section.challenge.title')"></h2>
        </div>
        <div class="col-lg-7">
          <div class="text">
            <!-- Goal with translation key -->
            <h5 class="mb-30 fw-400 line-height-40">{{ $t('components.project2.section.challenge.goal') }}</h5>
            <!-- Description with translation key -->
            <p class="fz-18">{{ $t('components.project2.section.challenge.description') }}</p>
          </div>
          <div class="accordion bord mt-100">
            <div v-for="(item, index) in accordionData" :key="index" class="item mb-20 wow fadeInUp"
                 :data-wow-delay="item.delay" @click="openAccordion">
              <div class="title">
                <!-- Accordion title with translation key -->
                <h4 class="fw-300">{{ item.title[$i18n.locale] }}</h4>
                <span class="ico"></span>
              </div>
              <div class="accordion-info">
                <!-- Accordion content with translation key -->
                <p>{{ item.content[$i18n.locale] }}</p>
              </div>
            </div>
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
const accordionData = ref([
  {
    title: {
      en: 'The Power of Influencer Marketing',
      ar: 'قوة التسويق عبر المؤثرين'
    },
    content: {
      en: 'Taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.',
      ar: 'استحوذت على روحي بالكامل، مثل هذه الصباحات الربيعية الحلوة التي أستمتع بها بكامل روحي.'
    },
    delay: '.1s'
  },
  {
    title: {
      en: 'Unique and Influential Design',
      ar: 'تصميم فريد ومؤثر'
    },
    content: {
      en: 'Taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.',
      ar: 'استحوذت على روحي بالكامل، مثل هذه الصباحات الربيعية الحلوة التي أستمتع بها بكامل روحي.'
    },
    delay: '.3s'
  },
  {
    title: {
      en: 'We Build and Activate Brands',
      ar: 'نحن نبني وننشط العلامات التجارية'
    },
    content: {
      en: 'Taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.',
      ar: 'استحوذت على روحي بالكامل، مثل هذه الصباحات الربيعية الحلوة التي أستمتع بها بكامل روحي.'
    },
    delay: '.5s'
  },
  {
    title: {
      en: 'Unique and Influential Design',
      ar: 'تصميم فريد ومؤثر'
    },
    content: {
      en: 'Taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.',
      ar: 'استحوذت على روحي بالكامل، مثل هذه الصباحات الربيعية الحلوة التي أستمتع بها بكامل روحي.'
    },
    delay: '.7s'
  }
]);

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