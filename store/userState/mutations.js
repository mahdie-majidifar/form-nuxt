import { exit } from "process";

export default {
    USER_REG(state, info) {
        const isExist = state.users.map(user => {
            return user.phoneNumber
        }).includes(info.phoneNumber)
        if (isExist)
            this.$toast.error('این شماره تلفن قبلا استفاده شده')
        else {
            state.users.push(info)
            this.$toast.success('ثبت نام با موفقیت انجام شد')
            this.$router.push('/login')
        }
    }
}