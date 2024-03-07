import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";
import client from "../contentfulClient";
import github from "../../public/github-mark.png";
import linkedin from "../../public/LI-In-Bug.png";
import githubWhite from "../../public/github-mark-white.png";
import { Link } from 'react-router-dom';
import {Button,Label,Select,Textarea,TextInput} from "flowbite-react";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
      const [resume, setResume] = useState(null);
      const [message, setMessage] = useState({
        from_name: "",
        reply_to: "",
        interested_in: "",
        message: "",
        to_name: "Miguel Borges",
      
      });
       const form = useRef();

      useEffect(() => {
        client.getEntry("21zCepn2tjATuOEhueihGV").then((response) => {
          console.log(response.fields);
          setResume(response.fields);
        });
      }, []);

      const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);
        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            {
              publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
          )
          .then(
            () => {
              console.log("SUCCESS!");
              alert("Message sent successfully!");
              window.location.reload();
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
        //window.open(`mailto:${resume.email}?subject=${message.interestedIn}&body=${message.message}`)
        
      };

      const handleValidation = () => {
        if (
          message.from_name === "" ||
          message.reply_to === "" ||
          message.interested_in === "" ||
          message.message === ""
        ) {
          return true;
        } else {
          return false;
        }
      };
    
  return (
    <div>
      <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        Let's get in touch
      </h1>
      <div className="flex flex-col mb-4 md:flex-row">
        <form ref={form} className="flex w-4/5 md:w-1/2 flex-col mx-auto gap-4">
          <Label className="mb-4 slideInLeft">
            <span className="text-gray-900 dark:text-white">Name</span>
            <TextInput
              name="from_name"
              placeholder="Name"
              className="mt-4"
              onChange={handleChange}
            />
          </Label>
          <Label className="mb-4 slideInLeft">
            <span className="text-gray-900 dark:text-white">Email</span>
            <TextInput
              name="reply_to"
              placeholder="Email"
              className="mt-4"
              onChange={handleChange}
            />
          </Label>
          <Label className="mb-4 slideInLeft">
            <span className="text-gray-900 dark:text-white">
              You are interested in
            </span>
            <Select
              name="interested_in"
              className="mt-4"
              onChange={handleChange}
            >
              <option value={""}>Choose a field</option>
              <option value={"Frontend development"}>
                Frontend development
              </option>
              <option value={"Backend development"}>Backend development</option>
              <option value={"Fullstack web development"}>
                Fullstack web development
              </option>
              <option value={"Game development"}>Game development</option>
              <option value={"Mobile development"}>Mobile development</option>
              <option value={"Other"}>Other</option>
            </Select>
          </Label>
          <Label className="mb-4 slideInLeft">
            <span className="text-gray-900 dark:text-white">Message</span>
            <Textarea
              name="message"
              placeholder="Message"
              className="mt-4"
              rows={4}
              onChange={handleChange}
            />
          </Label>
          <input type="hidden" name="to_name" value="Miguel Borges" />
          <Button
          type='submit'
            className="w-1/2 mx-auto slideInLeft"
            disabled={handleValidation()}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </form>
        <div className=" mx-auto flex flex-col justify-center p-8 fadeIn">
          {" "}
          {resume && documentToReactComponents(resume.contact)}
          {resume && (
            <div className="flex justify-evenly mb-8">
              <Link to={resume.githubLink} target="_blank">
                <img
                  className="w-16 dark:bg-white rounded-full "
                  src={github}
                  alt="github logo"
                />
              </Link>
              <Link to={resume.linkedinLink} target="_blank">
                <img className="w-20" src={linkedin} alt="linkedin logo" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contacts