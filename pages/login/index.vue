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
          <h4 class="mb-5">ورود</h4>
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
              v-model="phoneNumber"
              type="tel"
              class="input-style my-auto w-75"
            />

            <div class="w-25 d-flex d-flex justify-content-end">
              <select class="input-style text-muted">
                <option value="98">+98</option>
              </select>
              <flag />
            </div>
          </div>
          <span class="mt-3 mb-2">رمز عبور</span>
          <div
            class="
              d-flex
              align-content-center
              justify-content-between
              form-control
              border-0
            "
          >
            <input
              v-model="password"
              type="password"
              class="w-100 px-2 input-style"
            />
            <i class="my-auto fa fa-eye my-auto hover-pointer"></i>
          </div>
          <submitButton :title="'ورود'" :callBack="checkLogin" />

          <p class="w-100 text-center">
            <nuxt-link
              to="forgetPassword"
              class="color-Purple hover-pointer text-decoration-none"
              >رمزعبور خودرا فراموش کرده اید؟</nuxt-link
            >
          </p>
          <p class="w-100 text-center">
            <span>حساب کاربری ندارید؟</span>
            <nuxt-link
              to="/"
              class="color-Purple hover-pointer text-decoration-none"
              >ثبت نام کنید</nuxt-link
            >
          </p>
        </div>
      </div>
      <div class="col-lg-7 pt-3 px-2 gif-disply d-flex justify-content-center">
        <gif />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    phoneNumber: "",
    password: "",
  }),
  methods: {
    checkLogin() {
      if (this.phoneNumber.length != 0 && this.password.length != 0) {
        let model = {
          phoneNumber: this.phoneNumber,
          password: this.password,
        };
        this.$store.dispatch("userState/getUser", model);
      } else this.$toast.error("اطلاعات به درستی وارد نشده است");
    },
  },
};
</script>
