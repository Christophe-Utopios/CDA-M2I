import LoginForm from "./components/LoginForm";

function App() {

  const logUserInfos = (infos: {username: string, password: string}) => {
    console.log(infos);
  }

  return (
    <>
      <LoginForm logInfos={logUserInfos} />
    </>
  )
}

export default App
