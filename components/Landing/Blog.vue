<template>
  <section class="blog-list py-[120px] sub-bg text-dark">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center justify-end">
          <div>
            <h3 class="uppercase font-extralight  fz-50">Our Featured <span class="font-bold">Highlights</span></h3>
          </div>
          <div class="ml-auto underline">
            <a href="/blog" class="animsition-link all-more sub-title ls1">
            </a>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in data" :key="item.id" :class="`item block wow fadeInUp`"
        :data-wow-delay="`${(index * 0.2) + 0.2}s`" data-fx="3">
        <a :href="item.link" class="block__link animsition-link" :data-img="item.img"></a>
        <div class="row">
          <div class="col-lg-6 cont">
            <div class="info">
              <span class="tag">{{ item.tag }}</span>
              <span class="date">{{ item.date }}</span>
            </div>
            <h3 class="uppercase">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import HoverImgFx3 from '@/common/hoverEffect3';

import data from '@/data/Landing/blog.json';

// Call the onMounted hook
onMounted(() => {
  [...document.querySelectorAll('[data-fx="3"] > a, a[data-fx="3"]')].forEach(link => new HoverImgFx3(link));
  [...document.querySelectorAll('.block__title, .block__link, .content__text-link')].forEach((el) => {
    const imgsArr = el.dataset.img.split(',');
    for (let i = 0, len = imgsArr.length; i <= len - 1; ++i) {
      const imgel = document.createElement('img');
      imgel.style.visibility = 'hidden';
      imgel.style.width = 0;
      imgel.src = imgsArr[i];
      imgel.className = 'preload';
    }
  });
});
</script>
