<template>
  <div class="slider pb-[250px]">
    <div class="slide-track">
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  align-items: center;
  justify-content: center;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

.slider {
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
}
.slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slide {
  height: 100px;
  width: 250px;
}
</style>
