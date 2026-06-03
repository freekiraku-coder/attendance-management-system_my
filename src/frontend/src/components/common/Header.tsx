import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <span>勤怠管理システム</span>
      </div>

      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        戻る
      </button>
    </header>
  );
}