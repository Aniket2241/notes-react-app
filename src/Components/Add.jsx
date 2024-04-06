import React, { useRef } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { GiSaveArrow } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Add() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  function save() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const notes = JSON.parse(localStorage.getItem("Notes")) || [];
    const currentDate = new Date();

    const options = { hour: "numeric", minute: "numeric", hour12: true };
    const time12hr = currentDate.toLocaleTimeString("en-US", options);

    const info = `${currentDate.toLocaleDateString()} ${time12hr}`;
    notes.push({ title, description, info });
    localStorage.setItem("Notes", JSON.stringify(notes));

    setTimeout(() => {
      toast.success("Note Added");
    }, 300);
  }

  return (
    <>
      <div className="p-4 flex relative flex-col bg-gray-900 w-full h-[100vh] m-auto">
        <div className="flex justify-between">
          <NavLink to="/">
            {" "}
            <IoArrowBackOutline className="text-4xl text-green-400 font-serif font-bold" />
          </NavLink>
          <NavLink to="/">
            {" "}
            <div
              className="rounded-lg pt-2 pb-2 flex items-center gap-2 bg-gray-600 pr-3 pl-1 border-2 cursor-pointer hover:bg-gray-500"
              onClick={save}
            >
              {" "}
              <GiSaveArrow className="text-xl text-white " />
              <h1 className="font-medium font-sans">Save</h1>
            </div>
          </NavLink>
        </div>
        <br />

        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 100, textAlign: "center" }}
          transition={{
            delay: 1,
            duration: 5,
            type: "spring",
            stiffness: "550",
          }}
          className="text-4xl font-medium  font-serif text-yellow-200"
        >
          Add Note
        </motion.h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "tween",
          }}
          className="relative  top-[10vh]"
        >
          <input
            type="text"
            placeholder="Title"
            ref={titleRef}
            className="placeholder:text-yellow-100 text-green-200 font-serif focus:outline-none p-3 w-full text-4xl bg-inherit"
          />
          <hr className="my-3" />
          <input
            type="text"
            placeholder="Add details or description here.."
            ref={descriptionRef}
            className="placeholder:text-yellow-100 font-serif  focus:outline-none p-3 w-full text-4xl bg-inherit"
          />
        </motion.div>
      </div>
    </>
  );
}
