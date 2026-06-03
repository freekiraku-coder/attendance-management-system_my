export interface Attendance {
  date: string;
  startTime: string;
  endTime: string;
  breakTime: string;
  totalTime: string;
  status: string;
}

export interface MonthlySummary {
  workDays: number;
  totalHours: string;
  absentDays: number;
}