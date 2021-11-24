export default {
    getUser({ dispatch, state }, model) {
        var userVerify
        state.users.map(user => {
            if (user.phoneNumber == model.phoneNumber && user.password == model.password) {
                dispatch('login', user)
                userVerify = true
            }
        })
        if (!userVerify) {
            this.$toast.error('اصلاعت وارد شده صحیح نیست')
        }
    },
    login(contex, user) {
        this.$router.push({
            name: "login-userName",
            params: { userName: user.fullName },
        });
    },
    // resetPasswor(contex, model) {
    //     contex.state.users.map(user=>{
    //         if(user.phoneNumber==model)
    //         this.password=user.password
    //     })
    //    this.$toast.success(` your password is : ${this.password}`)
    // }
}