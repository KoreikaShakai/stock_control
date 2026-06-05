import { useState } from "react";
import "../App.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// Firebase SDKをインポート
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router";

// Firebaseプロジェクトの設定オブジェクト
// これらの値はあなたのFirebaseコンソールから取得できます
const firebaseConfig = {
  apiKey: "AIzaSyBVV0FcvRBaeWvtlVxo_XJsE-t5L-3tFBA",
  authDomain: "stock-control-52980.firebaseapp.com",
  databaseURL: "https://stock-control-52980-default-rtdb.firebaseio.com",
  projectId: "stock-control-52980",
  storageBucket: "stock-control-52980.firebasestorage.app",
  messagingSenderId: "44175559023",
  appId: "1:44175559023:web:4b19fb49efcf961a08409a",
  measurementId: "G-CBM11736CC",
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);

// これでFirebaseサービスを使用する準備ができました
console.log("Firebaseアプリケーションが初期化されました:", app);

// Firebase Authenticationサービスをインポート
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// 先ほど初期化したFirebaseアプリのインスタンスを使用
// const app = initializeApp(firebaseConfig); の 'app' を参照
// もしくは、デフォルトアプリの場合は引数なしでgetAuth()を呼び出すことも可能
const auth = getAuth(app); // または getAuth(); (デフォルトアプリの場合)

// これで 'auth' オブジェクトを使って認証機能を利用できます
console.log("Firebase Authサービスが取得されました:", auth);

export function Login() {
  const navigate = useNavigate();
  // 認証する利用者IDの入力の値を管理するstate
  const [certId, setCertId] = useState("");
  // 認証するパスワード利用者IDの入力の値を管理するstate
  const [certPw, setCertPw] = useState("");

  // 認証ボタンが押された時の処理関数
  const handleSetupSubmit = (e) => {
    e.preventDefault();
    if (certId === null || certId === "") {
      alert("入力要件が合致していません。");
    } else {
      console.log(" id=" + certId + " pw=" + certPw);
      console.log("ここにFirebaseへの利用者認証を行うロジックを入れる");

      signInWithEmailAndPassword(auth, certId, certPw)
        .then((userCredential) => {
          // ログインが成功した場合
          const user = userCredential.user;
          console.log("ログイン成功:", user);
          localStorage.setItem("user_id", user.uid);
          navigate("/main");
        })
        .catch((error) => {
          // エラーが発生した場合
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("ログインエラー:", errorCode, errorMessage);
          // エラーコードに基づいてエラーハンドリングを行う
        });
    }
  };

  // 認証する利用者IDの入力の値を管理するstate
  const [newCertId, setNewCertId] = useState("");
  // 認証するパスワード利用者IDの入力の値を管理するstate
  const [newCertPw, setNewCertPw] = useState("");

  // 認証ボタンが押された時の処理関数
  const newHandleSetupSubmit = (e) => {
    e.preventDefault();
    if (newCertId === null || newCertId === "") {
      alert("入力要件が合致していません。");
    } else {
      console.log(" id=" + newCertId + " pw=" + newCertPw);
      console.log("ここにFirebaseへの利用者登録を行うロジックを入れる");

      createUserWithEmailAndPassword(auth, newCertId, newCertPw)
        .then((userCredential) => {
          // 登録が成功した場合
          const user = userCredential.user;
          console.log("新規利用者ID登録成功:", user);
          localStorage.setItem("user_id", user.uid);
        })
        .catch((error) => {
          // 登録が失敗した場合
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("パスワードが規約外で登録できません");
          } else {
            alert("エラーにより登録できません：" + errorMessage);
          }
          console.log("エラー内容：" + error);
        });
    }
  };

  return (
    <>
      <section id="center">
        <p>【　利用者ID「認証」　】</p>
        <div className="app-container">
          {/* 利用者ID入力フォーム */}
          <form onSubmit={handleSetupSubmit}>
            <p>利用者IDを入力してください（メールアドレス）</p>
            <input
              aria-invalid="false"
              className="cert-con"
              type="text"
              data-testid="…"
              placeholder="Email"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
            />
            {/* パスワード入力フォーム */}
            <p>パスワードを入力してください（英数字８桁以上）</p>
            <input
              type="password"
              placeholder=""
              value={certPw}
              onChange={(e) => setCertPw(e.target.value)}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              認証
            </Button>
          </form>
        </div>

        <p></p>
        <p>🔽初めての方🔽　【　新規登録　】</p>
        <div className="app-container">
          {/* 利用者ID入力フォーム */}
          <form onSubmit={newHandleSetupSubmit}>
            <p>利用者IDを入力してください（メールアドレス）</p>
            <input
              aria-invalid="false"
              className="cert-con"
              type="text"
              data-testid="…"
              placeholder="Email"
              value={newCertId}
              onChange={(e) => setNewCertId(e.target.value)}
            />
            {/* パスワード入力フォーム */}
            <p>パスワードを入力してください（英数字８桁以上）</p>
            <input
              type="password"
              placeholder=""
              value={newCertPw}
              onChange={(e) => setNewCertPw(e.target.value)}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              新規登録
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
