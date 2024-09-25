import { useState } from "react";
import Heading from "../components/Heading";
import TextField from "./TextField";
import SelectField from "./SelectField/SelectField";
import PillButton from "./PillButton";

function ReachUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  return (
    <section className="flex flex-col gap-14 md:gap-16 xl:flex-row xl:gap-0 xl:justify-between xl:mx-[5.25rem]">
      <Heading
        title="Reach Out to Us"
        content="Please fill out the contact form"
        className="md:w-3/5 xl:w-1/2"
      />

      <section className="flex flex-col gap-10 md:gap-12 xl:w-[31rem]">
        <TextField
          title="Full Name"
          placeholder="Full Name"
          type="text"
          value={name}
          onChange={setName}
        />

        <TextField
          title="Email Address"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
        />

        <SelectField
          title="Subject"
          items={[]}
          value={selectedSubject}
          onChange={setSelectedSubject}
        />

        <section>
          <p className="mb-4">Message</p>
          <textarea
            name="message"
            placeholder="Message"
            className="text-xl font-semibold placeholder:font-normal rounded-xl border-2 border-accent focus:border-primary py-4 px-6 w-full h-[7.5rem] md:h-[10.5rem]"
          ></textarea>
        </section>

        <PillButton content="Send" className="w-fit" />
      </section>
    </section>
  );
}

export default ReachUs;
