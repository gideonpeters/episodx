<template>
  <div id="app" class="flex flex-col justify-between">
    <div id="nav" class="p-6">
      <router-link to="/">
        <img :src="require('./assets/images/logo.png')" alt />
      </router-link>
    </div>
    <div class="flex justify-center flex-col relative lg:p-0 p-5">
      <div class="lg:text-6xl text-4xl text-white font-bold">
        OUR WEBSITE IS
        <br />COMING SOON
      </div>
      <div
        class="lg:text-3xl text-2xl text-white z-10 cursor-pointer"
      >In the mean time, here's a gift for you</div>
      <div class="flex justify-center lg:h-64 h-56">
        <img
          class="fixed lg:top-56 md:top-40 top-56 z-0 cursor-pointer"
          :src="require('./assets/images/gift-box.png')"
          alt
        />
      </div>
      <div class="flex justify-center lg:mt-28 md:mt-56">
        <div class="flex">
          <input
            class="px-3 py-4 lg:w-96 md:w-72 primary-text-dark"
            type="text"
            placeholder="Enter Email"
          />
          <button class="text-1xl p-4 bg-white primary-text">Notify Me!</button>
        </div>
      </div>
    </div>
    <div class="flex justify-between lg:flex-row flex-col p-6 items-center">
      <div class="flex">
        <img :src="require('./assets/images/linkedin-logo.png')" alt />
        <img class="mx-8" :src="require('./assets/images/instagram-logo.png')" alt />
        <img :src="require('./assets/images/twitter-logo.png')" alt />
      </div>
      <div class="lg:pt-0 pt-5 primary-text-dark-text">&#169;Episod X 2020</div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ff0087;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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
