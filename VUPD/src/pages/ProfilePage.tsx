import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <span>
          You can use the <strong>ID Token</strong> to get the profile
          information of an authenticated user.
        </span>
        <span>
          <strong>Only authenticated users can access this page.</strong>
        </span>
        <div>
          <img src={user.picture} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <h3>Raw User Profile</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
