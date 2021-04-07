import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from "./ChatHeader"
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { selectUser } from './features/userSlice'
import db from './firebase'
import firebase from 'firebase'

const Chat = () => {
    const channelId = useSelector(selectChannelId)
    const user = useSelector(selectUser)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if(channelId){
            db.collection('channels')
            .doc(channelId)
            .collection("messages")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => 
                setMessages(snapshot.docs.map(doc => doc.data())))
        }
    }, [channelId])

    const sendMessage = e => {
        e.preventDefault()

        db.collection('channels').doc(channelId).collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                messages: input,
                user: user,
            })

        setInput('')
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {
                    messages.map(message => (
                        <Message 
                            timestamp={message.timestamp}
                            message={message.messages}
                            user={message.user}/>
                    ))
                }
            </div>

            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large" />
                <form action="">
                    <input 
                        disabled = {!channelId}
                        placeholder={`Message #${channelName}`}  
                        value={input} 
                        onChange={e => setInput(e.target.value)} />
                    <button 
                        className="chat__inputButton" 
                        type="submit"
                        disabled={!channelId}
                        onClick={sendMessage}
                        >Send Message</button>
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
