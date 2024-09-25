import { useState } from "react";
import AddressBar from "../components/AddressBar";
import Heading from "../components/Heading";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import PillButton from "../components/PillButton";
import PillButton2 from "../components/PillButton2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <AddressBar pages={["Home Page", "Categories", "Login"]} />
      <Heading
        title="Login"
        content="Login to Your Account"
        className="mb-14 md:mb-16 xl:mb-[4.5rem]"
      />

      <section className="flex flex-col gap-10 md:gap-12 lg:w-[31rem] lg:mx-auto">
        <TextField
          title="Email Address"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
        />

        <TextField
          title="Password"
          placeholder="************"
          type="password"
          value={password}
          onChange={setPassword}
        />

        <Checkbox title="Remember me" initState={false} />

        <section>
          <PillButton content="Login" className="w-full mb-6" />
          <section className="flex flex-col gap-6 items-center md:flex-row md:gap-0">
            <PillButton2 content="Create Account" className="w-full md:w-1/2" />
            <p className="underline underline-offset-4 cursor-pointer mx-auto active:text-primary hover:text-primary md:text-xl">
              Forgot Password?
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Login;
