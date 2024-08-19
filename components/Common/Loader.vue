<template>
  <div class="loader-wrap" dir="ltr">
    <!--
    |--------------------------------------------------------------------------
    | SVG Container
    |--------------------------------------------------------------------------
    |
    | This SVG element is used to create an animated background or loader effect.
    | The 'viewBox' and 'preserveAspectRatio' attributes ensure the SVG scales properly.
    |
    -->
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <!--
      |--------------------------------------------------------------------------
      | SVG Path
      |--------------------------------------------------------------------------
      |
      | The path element with the ID 'svg' is used for the animation. The 'd' attribute
      | defines the shape of the path. It starts with an initial shape which will be animated.
      |
      -->
      <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
    </svg>

    <!--
    |--------------------------------------------------------------------------
    | Loader Heading
    |--------------------------------------------------------------------------
    |
    | This section contains the heading for the loader. The 'load-text' class
    | is used for animation, where each letter is wrapped in a span for individual
    | animation control.
    |
    -->
    <div class="loader-wrap-heading">
      <span>
        <h2 class="load-text">
          <!--
          |--------------------------------------------------------------------------
          | Loader Text
          |--------------------------------------------------------------------------
          |
          | The text here is animated as part of the loader. Each letter is in a
          | separate span for finer control over animations, such as fading or moving
          | individual letters.
          |
          -->
          <span>6</span>
          <span>D</span>
          <span>E</span>
          <span>G</span>
          <span>R</span>
          <span>E</span>
          <span>E</span>
          <span>S</span>
        </h2>
      </span>
    </div>
  </div>
</template>

<script setup>
/*
|--------------------------------------------------------------------------
| onMounted Lifecycle Hook
|--------------------------------------------------------------------------
|
| This lifecycle hook is used to execute animations when the component is mounted.
| It utilizes GSAP (GreenSock Animation Platform) to create a timeline of animations.
|
*/
onMounted(() => {
  // Retrieve the SVG element by its ID
  const svg = document.getElementById("svg");

  // Initialize a GSAP timeline for sequencing animations
  const tl = gsap.timeline();

  // Define SVG path data for animation
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  /*
  |--------------------------------------------------------------------------
  | Animation Sequence
  |--------------------------------------------------------------------------
  |
  | 1. Fade out and move the loader text and content up
  | 2. Animate the SVG path from 'flat' to 'curve' and back to 'flat'
  | 3. Move the loader wrap out of view
  | 4. Hide the loader wrap
  | 5. Animate the header into view
  | 6. Fade in and move the header container into view
  |
  */
  tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", { delay: 1.5, y: -100, opacity: 0, });
  tl.to(svg, { duration: 0.5, attr: { d: curve }, ease: "power2.easeIn", }).to(svg, { duration: 0.5, attr: { d: flat }, ease: "power2.easeOut", });
  tl.to(".loader-wrap", { y: -1500, });
  tl.to(".loader-wrap", { zIndex: -1, display: "none", });
  tl.from("header", { y: 200 }, "-=1.5");
  tl.from("header .container", { y: 40, opacity: 0, delay: 0.3 }, "-=1.5");
});
</script>