import * as Auth from './auth'
import * as Model from './model'


export default {
    signUp: Auth.signUp,
    signIn: Auth.singIn,
    getUserData: Model.getUserData,
    updateUserInfo: Model.updateUserInfo
}