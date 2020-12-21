<template>
  <div id="app" class>
    <div class="flex flex-col justify-between h-full">
      <div id="nav" class="p-6 flex justify-center lg:justify-start">
        <router-link tag="div" class="flex h-10" to="/">
          <img :src="require('./assets/images/Asset 1.svg')" alt />
        </router-link>
      </div>
      <div class="flex justify-center flex-col lg:p-0 p-5 h-10/12">
        <div class="lg:text-6xl text-4xl text-white font-bold slide-up">
          OUR WEBSITE IS
          <br />COMING SOON.
        </div>
        <div
          class="lg:text-3xl text-2xl text-indigo-100 z-10 cursor-pointer mb-5 slide-up-second"
        >In the mean time, here's a gift for you</div>
        <div class="flex justify-center relative md:h-96 h-52 slide-up-third w-auto">
          <a
            href="https://drive.google.com/uc?export=download&id=1PU2cuDlNM_EKAHalO20VP04JPOOZyv4O"
            class="absolute lg:-top-28 md:-top-24 -top-28 z-0"
          >
            <img class :src="require('./assets/images/giftBox.svg')" alt />
          </a>
        </div>
        <div class="w-full">
          <div class="flex h-12 justify-center">
            <input
              class="px-3 py-4 lg:w-96 md:w-72 w-11/12 primary-text-dark outline-none"
              type="text"
              placeholder="Enter Email"
            />
            <button
              class="lg:text-sm text-xs lg:p-4 p-1 bg-white primary-text outline-none"
            >Notify Me!</button>
          </div>
        </div>
      </div>
      <div class="flex justify-between lg:flex-row flex-col p-6 items-center">
        <div class="flex">
          <a href="http://linkedin.com/company/episod-x" target="_blank">
            <img :src="require('./assets/images/linkedinLogo.svg')" alt />
          </a>
          <a href="https://instagram.com/episod_x?igshid=32dt2vb6vcss" target="_blank">
            <img class="mx-8" :src="require('./assets/images/instagramLogo.svg')" alt />
          </a>
          <a href="https://twitter.com/episod_x" target="_blank">
            <img :src="require('./assets/images/twitterLogo.svg')" alt />
          </a>
        </div>
        <div class="lg:pt-0 pt-5 primary-text-dark-text">&#169;Episod X 2020</div>
      </div>
      <!-- <router-view /> -->
    </div>
  </div>
</template>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;1,100;1,200;1,300&display=swap");
#app {
  font-family: Avenir, "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  background-color: #ff0087;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

@keyframes slide-up {
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  50% {
    transform: translateY(-10%);
    // opacity: 0.5;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.slide-up {
  animation: slide-up 1s ease-in;
  &-second {
    animation: slide-up 2s ease-in 0s;
  }
  &-third {
    animation: slide-up 3s ease-in-out 0s;
  }
}

a {
  transition: fill 0.3s ease-in-out;
  transform: scale(1, 1);
  &:hover {
    transform: scale(1.05, 1.05);
  }
}

.primary-text {
  color: #ff0087;
  &-dark {
    color: white;
    background: #a0005c;
  }
  &-dark-text {
    color: #a0005c;
  }
}
#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
