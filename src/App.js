import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
import CreateNote from "./CreateNote"
import Note from "./Note";



const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addEvent = (note) => {
    // alert("Submit")
    setAddItem((prevData) => {
      return [...prevData, note];
    });

  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, index) => {
        return index !== id;

      }));

  }


  return (
    <>
      <Header />
      <CreateNote passNote={addEvent} />
      {/* <Note /> */}
      {   addItem.map((val, index) => {
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      })}
      <Footer />
    </>
  )
}


export default App;