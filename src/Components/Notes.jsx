import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { GiCrossedSwords } from "react-icons/gi";
export default function Notes() {
  const [notes, setnotes] = useState([]);
  const [search, setsearch] = useState(false);
  const [tosearch, settosearch] = useState("");
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("Notes"));
    if (savedNotes) {
      setnotes(savedNotes);
    }
  }, []);
  const togglesearch = () => {
    setsearch(!search);
    settosearch("");
  };
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(tosearch.toLowerCase())
  );
  const removeNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setnotes(updatedNotes);
    localStorage.setItem("Notes", JSON.stringify(updatedNotes));
  };
  return (
    <>
      <div className=" p-4 flex relative flex-col bg-gray-900  w-full h-[100vh] m-auto">
        <Toaster />
        <div className="flex justify-between">
          <motion.input
            type="text"
            value={tosearch}
            className="bg-gray-700 relative left-[22%] rounded-[20px] p-1 "
            placeholder="Search notes"
            onChange={(e) => {
              settosearch(e.target.value);
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: search ? 1 : 0,
              x: search ? 0 : 0,
              width: search ? "50%" : 0,
            }}
          ></motion.input>
          {!search && (
            <h1 className="text-4xl text-white font-serif font-bold">Notes</h1>
          )}
          <div className="rounded-lg p-[6px] items-center  bg-gray-400 border-2 ">
            {search ? (
              <GiCrossedSwords
                className="text-3xl cursor-pointer text-red-500 "
                onClick={togglesearch}
              />
            ) : (
              <GrSearch
                className="text-3xl cursor-pointer  "
                onClick={togglesearch}
              />
            )}
          </div>
        </div>
        <div className=" p-1   text-4xl text-white-500 self-end absolute bottom-[20%] border-2 bg-gray-500 rounded-lg hover:bg-gray-600">
          <NavLink to="/add">
            <GrFormAdd />
          </NavLink>
        </div>
        <div className="flex gap-2 my-4  flex-wrap">
          {filteredNotes &&
            filteredNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{
                  y: "100px",
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5 * index,
                  duration: 0.75,
                }}
                className="p-2 pr-[40px] relative w-[300px] rounded-lg bg-gray-600 flex flex-col justify-between"
              >
                <b
                  className=" bg-red-500 hover:bg-red-600 cursor-pointer w-fit rounded-sm  pr-1 pl-1 absolute right-0 top-0"
                  onClick={() => {
                    removeNote(index);
                  }}
                >
                  X
                </b>
                <b className="text-3xl  text-white font-medium">
                  {" "}
                  {note.title}
                </b>
                <p className="text-md mt-3 text-gray-300">{note.description}</p>
                <p className="text-sm text-green-400 self-end ">{note.info}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}
