import { getElementMapping } from "../mappings";

const standardLogin = (credentials: string) => {
  if (credentials === "standard user credentials") {
    $(getElementMapping("username")).addValue("standard_user");
    $(getElementMapping("password")).addValue("secret_sauce");
    $(getElementMapping("login button")).click();
  } else {
    throw new Error(`"${credentials}" are different to what was expected`);
  }
};
export default standardLogin;
