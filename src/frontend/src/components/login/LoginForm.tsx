import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function LoginForm() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      // APIの呼び出し
      const response = await fetch(
        "http://localhost:8080/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (response.ok) {
        navigate("/attendance");
      } else {
        alert("ログイン失敗");
      }

    } catch (error) {

      console.error(error);
      alert("通信エラー");

    }
  };

  return (
    <Card>

      <h1>勤怠管理システム</h1>

      <Input
        type="text"
        placeholder="ユーザー名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleLogin}>
        ログイン
      </Button>

    </Card>
  );
}