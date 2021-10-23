import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Input";

export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const history = useHistory();

  const submitMsg = () => {
    console.log(email);
    console.log(msg);
    history.push("/students");
  };

  return (
    <>
      <div className="container">
        <h1>Contact Us</h1>
        <div className="card p-3 mt-4 col-8" style={{ height: "30vh" }}>
          <Input
            label="Email"
            palceholder="Enter Your Email"
            value={email}
            setValue={setEmail}
          />
          <Input
            label="Message"
            palceholder="Enter Your Message"
            value={msg}
            setValue={setMsg}
          />
          <button className="btn btn-primary" onClick={submitMsg}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
