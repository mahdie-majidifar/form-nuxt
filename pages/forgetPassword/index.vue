<template>
  <div class="main-a w-100 d-flex justify-content-center px-2">
    <div
      class="col-12 col-sm-10 col-md-12 col-lg-9 p-4 d-flex main-card my-5 rtl"
    >
      <div class="col-12 col-md-7 col-lg-5 pt-3 pb-5">
        <div class="w-100 d-flex justify-content-between">
          <i class="fa fa-arrow-right hover-pointer"></i>
          <span>logo.</span>
        </div>
        <div class="d-flex flex-column w-100 text-right my-5">
          <h4 class="mb-5">بازیابی رمزعبور</h4>
          <span class="mb-2 mt-3">شماره تلفن</span>
          <div
            class="
              w-100
              px-2
              d-flex
              align-content-center
              justify-content-between
              form-control
              p-0
              border-0
            "
          >
            <input
              v-model="phone"
              type="tel"
              class="input-style my-auto w-75"
            />

            <div class="w-25 d-flex d-flex justify-content-end">
              <select class="input-style text-muted">
                <option value="98">+98</option>
              </select>
              <img
                class="my-auto mr-1 flag-icon"
                src="~/assets/img/flag-button-round-250.png"
                alt=""
              />
            </div>
          </div>
          <submit-button :title="'بازیابی رمزعبور'" :callBack="resetPass" />
          <p v-if="password.length != 0" class="w-100 text-center">
            <nuxt-link class="text-decoration-none" to="/login"
              >بازگشت به ورود</nuxt-link
            >
          </p>
        </div>
      </div>
      <div class="col-lg-7 pt-3 px-2 gif-disply d-flex justify-content-center">
        <img
          class="w-100 gif border-radius"
          src="~/assets/img/ezgif-com-gif-maker.gif"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    phone: "",
    password: "",
  }),
  methods: {
    resetPass() {
      if (this.phone.length != 0) {
        this.password = this.$store.state.userState.users.find(
          (user) => user.phoneNumber == this.phone
        ).password;
      }
      if (this.password.length != 0) {
        this.$toast.success(` your password is : ${this.password}`);
      } else this.$toast.error("شماره اشتباه است");
    },
  },
};
</script>
