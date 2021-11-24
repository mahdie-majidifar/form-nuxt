<template>
  <div class="main-a w-100 d-flex justify-content-center px-2">
    <div
      class="col-12 col-sm-10 col-md-12 col-lg-9 p-4 d-flex main-card my-5 rtl"
    >
      <div class="col-12 col-lg-5 col-md-5 pt-3 m-auto">
        <div class="w-100 d-flex justify-content-between">
          <i class="fa fa-arrow-right hover-pointer"></i>
          <span>logo.</span>
        </div>
        <div class="d-flex flex-column w-100 text-right my-3">
          <h4 class="mb-4">ثبت نام کنید</h4>
          <span class="mb-2">نام و نام خانوادگی</span>
          <input
            v-model="fullName"
            type="text"
            class="form-control border-0 mb-3"
          />
          <span class="mb-2">شماره تلفن</span>
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
            <i class="my-auto far fa-eye my-auto"></i>
          </div>
          <submitButton :title="'ثبت نام کنید'" :callBack="register" />
          <p class="w-100 text-center">
            <span>قبلا ثبت نام کرده اید؟</span>
            <nuxt-link
              to="/login"
              class="text-decoration-none color-Purple hover-pointer"
            >
              وارد شوید
            </nuxt-link>
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
  data() {
    return {
      fullName: "",
      phoneNumber: "",
      password: "",
    };
  },
  methods: {
    register() {
      if (
        this.fullName.length != 0 &&
        this.phoneNumber.length != 0 &&
        this.password.length != 0
      ) {
        let model = {
          fullName: this.fullName,
          phoneNumber: this.phoneNumber,
          password: this.password,
        };
        this.$store.commit("userState/USER_REG", model);
      }
    },
  },
};
</script>
<style scoped>
</style>
