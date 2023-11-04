import { AuthContext } from "../../context/auth-context";

export default function Navigation(props) {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav>
            <ul className="flex gap-5 text-white">
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
}
