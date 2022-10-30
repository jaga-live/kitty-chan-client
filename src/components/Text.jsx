import axios from "axios";
import { useState } from "react";

///Config
const HEROKU_URL = "https://kitty-chan-discord.herokuapp.com";
const GAMERS_HUB_GENERAL_ID = "928902191983517717";

//Test
// const HEROKU_URL = "http://localhost:5000";
// const GAMERS_HUB_GENERAL_ID = "1031566031388409859";

const Text = () => {
    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        sendMessage(text)
        setText("")
    }

    const sendMessage = async (message) => {
        await axios
          .post(
            `${HEROKU_URL}/client/text`,
            {
                message,
                channelId: GAMERS_HUB_GENERAL_ID,
              },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .catch((err) => {
            console.log(err);
          });
        
    }

  return (
    <div className="text-container">
      <form>
        <textarea type="textarea" value={text} onChange={handleTextChange} className='input-box'></textarea>
        <button onClick={handleSubmit} className='send-button'>Send</button>
      </form>
    </div>
  );
};

export default Text;
