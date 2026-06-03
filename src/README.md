# 勤怠管理システム (Attendance Management System)

## 概要

勤怠情報の登録・管理を行うためのWebアプリケーションです。

フロントエンドには React + TypeScript + Vite を採用し、
バックエンドには Spring Boot を採用しています。

現在は以下の機能を実装しています。

* ログイン機能
* 勤怠一覧表示
* 画面遷移
* API連携基盤
* 共通コンポーネント化

今後は勤怠登録・編集・削除機能や認証機能の強化を予定しています。

---

## システム構成

### Frontend

* React
* TypeScript
* Vite
* React Router

### Backend

* Java 21
* Spring Boot
* Spring Security
* Maven

---

## ディレクトリ構成

```text
attendance-management-system_my
├─ frontend
│  ├─ src
│  └─ package.json
│
├─ backend
│  ├─ src
│  ├─ pom.xml
│  └─ mvnw
│
└─ README.md
```

---

## 起動方法

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

起動後

```text
http://localhost:8080
```

でアクセス可能です。

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

起動後

```text
http://localhost:5173
```

でアクセス可能です。

---

## 開発環境

| 項目          | バージョン |
| ----------- | ----- |
| Java        | 25.x  |
| Spring Boot | 3.x   |
| Node.js     | 22.x  |
| React       | 19.x  |
| TypeScript  | 5.x   |
| Vite        | 7.x   |

---

## 画面一覧

* ログイン画面
* 勤怠一覧画面
* 勤怠登録画面（開発予定）
* 勤怠編集画面（開発予定）

---

## 学習目的

本システムは以下の技術習得を目的として開発しています。

* ReactによるSPA開発
* TypeScriptによる型安全な開発
* Spring BootによるREST API開発
* JWT認証
* データベース連携
* フロントエンドとバックエンドの連携

---

## 今後の実装予定

* [ ] JWT認証
* [ ] 勤怠登録
* [ ] 勤怠編集
* [ ] 勤怠削除
* [ ] 月別検索
* [ ] バリデーション
* [ ] Docker対応
* [ ] CI/CD対応

---

## 作者

GitHub:
https://github.com/freekiraku-coder

作成者: Masahisa Kikuchi
