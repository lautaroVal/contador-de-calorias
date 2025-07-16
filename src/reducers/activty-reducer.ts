import type { Activity } from "../types"

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activity', payload: { id: Activity['id'] } }

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']  //(lookup type) en TypeScript
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

    if (action.type === 'save-activity') {
        //Este código maneja la lógica para modificar el state
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    if (action.type === 'set-activity') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    return state
}

