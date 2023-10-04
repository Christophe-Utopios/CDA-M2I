import LoginForm from "./components/LoginForm";

function App() {

  const logUserInfos = (infos) => {
    console.log(infos);
  }

  return (
    <>
      <LoginForm logInfos={logUserInfos} />
    </>
  )
}

export default App
