import { useState } from "react";
import { Link } from "react-router-dom";
import AddressBar from "../components/AddressBar";
import Heading from "../components/Heading";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import PillButton from "../components/PillButton";
import PillButton2 from "../components/PillButton2";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <AddressBar pages={["Home Page", "Categories", "Sign Up"]} />
      <Heading
        title="Sign Up"
        content="Create Account"
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
          title="Create Password"
          placeholder="************"
          type="password"
          value={password}
          onChange={setPassword}
        />

        <span className="relative h-[2px] bg-accent">
          <span className="absolute h-[2px] bg-primary w-1/5" />
        </span>

        <section className="flex flex-col md:flex-row">
          <Checkbox title="I have read and agree to &nbsp;" />
          <Link
            to="/terms of service"
            className="cursor-pointer underline underline-offset-4 font-semibold ms-9 active:text-primary hover:text-primary md:ms-0 md:text-xl"
          >
            terms & conditions
          </Link>
        </section>

        <section className="flex flex-col gap-6 md:flex-row md:justify-between">
          <PillButton content="Create Account" className="w-full" />
          <PillButton2 content="Login" className="w-full" />
        </section>
      </section>
    </main>
  );
}

export default Signup;
