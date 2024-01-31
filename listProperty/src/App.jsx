import ProfileCard from "./ProfileCard.jsx";
import Button from "./Button.jsx";

function App() {
  return (
    <>
      <ProfileCard
        name="akbar"
        hobi="hobi saya adalah melakukan pemrograman"
        isLogin={true}
      />
      <ProfileCard
        name="akmal"
        hobi="hobi saya adalah melakukan pemrograman"
        isLogin={true}
      />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <Button />
      <Button text="login" />
    </>
  );
}

export default App;
