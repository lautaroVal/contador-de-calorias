import type { Activity } from "../types"

type calorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities}: calorieTrackerProps) {
  return (
    <div>CalorieTracker</div>
  )
}
