import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  if (!session) {
    return <LoginPage />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={handleLogout}>Logout!</button>
      </div>
    </>
  );
}

function LoginPage() {
  const supabase = useSupabaseClient();

  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={loginWithGoogle}>Google Login</button>
      </div>
    </>
  );
}
