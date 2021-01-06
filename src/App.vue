<template>
  <div id="app" class>
    <div class="flex flex-col justify-between h-full">
      <div id="nav" class="p-6 flex justify-center lg:justify-start">
        <router-link tag="div" class="flex h-10" to="/">
          <img :src="require('./assets/images/Asset 1.svg')" alt />
        </router-link>
      </div>
      <div class="flex justify-center flex-col lg:p-0 p-5 h-8/12">
        <div class="xl:text-6xl lg:text-5xl text-4xl sm:text-3xl text-white font-bold slide-up">
          OUR WEBSITE IS
          <br />COMING SOON.
        </div>
        <div
          class="xl:text-2xl lg:text-1xl text-1xl text-indigo-100 z-10 cursor-pointer mb-5 slide-up-second"
        >In the mean time, here's a gift for you</div>
        <div class="h-72 lg:h-96 sm:h-80 flex justify-center relative slide-up-third w-auto">
          <a
            href="https://drive.google.com/uc?export=download&id=1-Ddba6dPpL4vd4CUpHwL1lcIG9yY3oyP"
            class="absolute h-full xl:-top-28 lg:-top-24 md:-top-20 -top-20 sm:-top-32 z-0"
          >
            <img
              class="h-80 sm:h-80 xl:h-100 lg:h-10/12 md:h-10/12"
              :src="require('./assets/images/giftBox.svg')"
              alt
            />
          </a>
        </div>
        <div class="w-full">
          <!-- <div class="flex h-12 justify-center">
            <mailchimp-subscribe
              url="https://us7.list-manage/subscribe/post-json"
              user-id="fa40008b95b554b7dee664825"
              list-id="926939037e"
              @error="onError"
              @success="onSuccess"
            >
              <template v-slot="{ subscribe, setEmail, error, success, loading }">
                <form @submit.prevent="subscribe" class="d-flex">
                  <input
                    required
                    class="px-3 py-4 lg:w-96 md:w-72 w-11/12 primary-text-dark outline-none h-full"
                    type="text"
                    placeholder="Enter Email"
                    @input="setEmail($event.target.value)"
                  />
                  <button
                    type="submit"
                    v-if="!success || !loading"
                    class="lg:text-sm text-xs lg:p-4 p-1 bg-white primary-text outline-none focus:outline-none hover:opacity-75 h-full"
                  >Notify Me!</button>
                  <div v-if="error">Something went wrong, try again</div>
                  <div v-if="success">Yay!</div>
                  <div v-if="loading">Loading…</div>
                </form>
              </template>
            </mailchimp-subscribe>
          </div>-->
          <div v-if="!isSubscribed">
            <div id="mc_embed_signup" class="flex h-12 justify-center w-full">
              <form
                @formchange="isSubscribed = true"
                action="https://xyz.us7.list-manage.com/subscribe/post?u=fa40008b95b554b7dee664825&amp;id=926939037e"
                method="post"
                name="mc-embedded-subscribe-form"
                class="validate flex"
                target="_blank"
              >
                <div class="flex flex-row w-full h-12">
                  <input
                    type="email"
                    name="EMAIL"
                    class="px-3 py-4 lg:w-96 md:w-72 w-7/12 primary-text-dark outline-none h-12 rounded-none rounded-none"
                    placeholder="email address"
                    required
                  />
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <!-- <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input
                      type="text"
                      name="b_fa40008b95b554b7dee664825_926939037e"
                      tabindex="-1"
                      value
                      class
                    />
                  </div>-->
                  <!-- <div class> -->
                  <button
                    type="submit"
                    class="lg:text-sm rounded-none rounded-none text-xs lg:p-4 p-1 my-0 bg-white primary-text outline-none focus:outline-none hover:opacity-75 h-12"
                  >Notify Me!!</button>
                  <!-- <input
                    type="submit"
                    value="Notify Me!"
                    name="subscribe"
                  />-->
                  <!-- </div> -->
                </div>
              </form>
            </div>

            <!--End mc_embed_signup-->
          </div>
        </div>
      </div>
      <div class="flex justify-between lg:flex-row flex-col p-6 items-center">
        <div class="flex">
          <a href="http://linkedin.com/company/episod-x" target="_blank">
            <img class="h-8" :src="require('./assets/images/linkedinLogo.svg')" alt />
          </a>
          <a href="https://instagram.com/episod_x?igshid=32dt2vb6vcss" target="_blank">
            <img class="mx-8 h-8" :src="require('./assets/images/instagramLogo.svg')" alt />
          </a>
          <a href="https://twitter.com/episod_x" target="_blank">
            <img class="h-8" :src="require('./assets/images/twitterLogo.svg')" alt />
          </a>
        </div>
        <div class="lg:pt-0 pt-5 primary-text-dark-text">&#169;Episod X 2020</div>
      </div>
    </div>
  </div>
</template>

<script>
import MailchimpSubscribe from "vue-mailchimp-subscribe";

export default {
  components: {
    MailchimpSubscribe
  },
  data: () => ({
    isSubscribed: false,
    errorMessage: "error"
  }),
  methods: {
    onSuccess() {
      this.isSubscribed = true;
    },
    onError() {
      this.errorMessage = "Something went wrong, try again";
    }
  }
};
</script>


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
