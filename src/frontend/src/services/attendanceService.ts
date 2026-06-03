import type {
  Attendance,
  MonthlySummary,
} from "../types/attendance";

export const getAttendanceList = (): Attendance[] => {
  return [
    {
      date: "2026/05/13",
      startTime: "09:00",
      endTime: "18:00",
      breakTime: "1:00",
      totalTime: "8:00",
      status: "勤務中",
    },
    {
      date: "2026/05/12",
      startTime: "08:55",
      endTime: "18:10",
      breakTime: "1:00",
      totalTime: "8:15",
      status: "完了",
    },
  ];
};

export const getMonthlySummary =
  (): MonthlySummary => {
    return {
      workDays: 5,
      totalHours: "40:35",
      absentDays: 1,
    };
  };