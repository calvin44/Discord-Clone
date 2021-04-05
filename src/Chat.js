import React from 'react'
import './Chat.css'
import ChatHeader from "./ChatHeader"
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'

const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large" />
                <form action="">
                    <input placeholder={`Message #TESTCHANNEL`} />
                    <button className="chat__inputButton" type="submit">Send Message</button>
                </form>

                <div className="chat___inputIcons">
                    <CardGiftcardRoundedIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
