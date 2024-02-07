import { createAction } from "../../utils/reducer/reducer.utils"
import { USER_ACTIONS } from "./user.types"

export const setCurrentUser = (user) =>{
    return createAction(USER_ACTIONS.SET_CURRENT_USER, user)
}