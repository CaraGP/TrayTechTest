import { getElementMapping } from "../mappings";

const standardLogin = (credentials: string) => {
  if (credentials === "Standard User credentials") {
    $(getElementMapping("Username")).addValue("standard_user");
    $(getElementMapping("Password")).addValue("secret_sauce");
    $(getElementMapping("Login button")).click();
  } else {
    throw new Error(
      `"${credentials}" are different to what was expected, or I don't have those ones setup`
    );
  }
};
export default standardLogin;
