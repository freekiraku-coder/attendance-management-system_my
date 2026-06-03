import { getAttendanceList,getMonthlySummary } from "../services/attendanceService";
import "../styles/attendance.css";
import Header from "../components/common/Header";

export default function AttendancePage() {

  const attendanceList =
    getAttendanceList();

  const summary =
    getMonthlySummary();

  return (
  <>
    <Header />

      <div className="attendance-page">

        <div className="attendance-card">

          <h1>勤怠一覧</h1>

          <div className="month-selector">

            <label htmlFor="targetMonth">
              対象月
            </label>

            <input
              id="targetMonth"
              type="month"
            />

          </div>

          <table className="attendance-table">

            <thead>
              <tr>
                <th>日付</th>
                <th>出勤時刻</th>
                <th>退勤時刻</th>
                <th>休憩時間</th>
                <th>合計時間</th>
                <th>ステータス</th>
              </tr>
            </thead>

            <tbody>
              {attendanceList.map((item) => (
                <tr key={item.date}>
                  <td>{item.date}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>{item.breakTime}</td>
                  <td>{item.totalTime}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        <div className="summary-card">

          <h2>今月の集計</h2>

          <div className="summary-grid">

            <div className="summary-item">
              <span>出勤日数</span>
              <strong>{summary.workDays}日</strong>
            </div>

            <div className="summary-item">
              <span>総労働時間</span>
              <strong>{summary.totalHours}</strong>
            </div>

            <div className="summary-item">
              <span>欠勤日数</span>
              <strong>{summary.absentDays}日</strong>
            </div>

          </div>

        </div>

      </div>
    </>
  ); 
}