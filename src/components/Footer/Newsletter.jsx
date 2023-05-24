import React from "react";
import { useState } from "react";
import axios from "axios";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";


const Newsletter = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const phoneNumberRegex = /^\d{10}$/;

  function hasPhoneNumber(input) {
    return phoneNumberRegex.test(input);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (!hasPhoneNumber(phone)) {
        setConfirmation("Wrong phone number.");
        setLoading(false);
        return 0;
      }
      const response = await sendEmail();

      if (response.status === "success") {
        setConfirmation("Email sent successfully!");
      } else {
        setConfirmation("Email sending failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setConfirmation("An error occurred. Please try again later.");
    }

    setLoading(false);
  };


  const sendEmail = () => {
    // const params = {
    //   spreadsheetId: "YOUR_SPREADSHEET_ID",
    //   range: "Sheet1",
    //   valueInputOption: "USER_ENTERED",
    //   insertDataOption: "INSERT_ROWS",
    //   resource: {
    //     values: [[name, phone, subject, description]],
    //   },
    // };

    // gapi.client.sheets.spreadsheets.values.append(params).then(
    //   (response) => {
    //     console.log("Data stored successfully:", response.result);
    //     // Handle success case
    //   },
    //   (error) => {
    //     console.error("Error storing data:", error.result.error.message);
    //     // Handle error case
    //   }
    // );
  };

  
  // const sendEmail = () => {
  //   console.log(name);
  //   return axios.post("/api/sendfeedback", {
  //     name,
  //     phone,
  //     subject,
  //     description,
  //   });
  // };


  return (
    <div className="app__newsletter" style={{ background: "#f4e64c" }}>
      <div className="app__newsletter-heading">
        <h4 className="headtext__cormorant" style={{ color: "#4a7f9c" }}>
          Contact us{" "}
        </h4>
        <p
          className="p__opensans"
          style={{ color: "#4a7f9c", fontSize: "17px" }}
        >
          And never miss latest Updates!
        </p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="text"
          placeholder="What's your good name?"
          style={{ background: "#ffffff", color: "#000000" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          style={{ background: "#ffffff", color: "#000000" }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="What would you like to bring to our attention?"
          style={{ background: "#ffffff", color: "#000000" }}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Share details about"
          style={{ background: "#ffffff", color: "#000000" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="custom__button"
          onClick={handleSubmit}
          style={{ background: "#4a7f9c", color: "#ffffff" }}
          // disabled={loading}
        >
          {loading ? "Sending..." : "Transmit message"}
        </button>
      </div>
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
};

export default Newsletter;
