import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get("/api/message");
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Failed to load");
      }
    }

    load();
  }, []);

  return <p data-testid="msg">{message}</p>;
}

export default FetchMessage;

