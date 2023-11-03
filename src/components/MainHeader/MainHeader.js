import Navigation from "./Navigation";

export default function MainHeader(props) {
  return (
    <header className=" bg-red-300">
      <div className="max-w-5xl mx-auto p-5 flex gap-11 items-center">
        <h1 className="font-bold text-3xl text-white">A Typical Page</h1>
        <Navigation
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
        />
      </div>
    </header>
  );
}
