import ForecastCard from "./ForecastCard.vue";

export default {
  component: ForecastCard,
  title: "Forecast Card",
  tags: ['autodocs', 'weather', 'card']
}

export const DayWeek = {
  args: {
    isHourMode: false,
    value: {
      date: "2024-11-26",
      name_state: "Солнечно",
      probability: 10,
      temperature: -22,
      icon: "sunny.png",
      hours: [
        { date: "2023-10-01T08:00:00", name_state: "Солнечно", probability: 5, temperature: 20, icon: "sunny.png" },
        { date: "2023-10-01T12:00:00", name_state: "Солнечно", probability: 5, temperature: 22, icon: "sunny.png" },
        { date: "2023-10-01T16:00:00", name_state: "Солнечно", probability: 10, temperature: 21, icon: "sunny.png" },
        { date: "2023-10-01T20:00:00", name_state: "Солнечно", probability: 15, temperature: 19, icon: "sunny.png" },
      ]
    }
  }
}

export const HourDay = {
  args: {
    isHourMode: true,
    value:
      { date: "2023-10-01T08:00:00", name_state: "Солнечно", probability: 5, temperature: 20, icon: "sunny.png" }
  }
}
