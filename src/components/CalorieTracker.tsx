import { useMemo } from "react"
import type { Activity } from "../types"

type calorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities}: calorieTrackerProps) {
    // Contadores
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
  return (
    <>
    <h2 className="font-black text-4xl text-white text-center">Resumen de Calorías </h2>

    <div className="flex flex-col gap-5 mt-10 md:justify-between md:flex-row items-center">
    <p className="grid grid-cols-1 text-center text-white font-bold rounded-full gap-3">
        <span className="font-black text-6xl text-orange">{caloriesConsumed}</span>
        Consumidas
    </p>
    </div>
    </>
  )
}
