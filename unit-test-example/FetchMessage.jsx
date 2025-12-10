import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        // simple GET request
        const res = await axios.get("/api/message");
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Failed to load message");
      }
    }

    fetchData();
  }, []);

  return <p data-testid="msg">{message}</p>;
}

export default FetchMessage;
