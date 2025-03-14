import profile from "../img/profile.jpg";

console.log(profile);

function Profile() {
  return <img src={profile} alt="Profile" style={{ width: 300 }} />;
}

export default Profile;
