import { useState } from "react";
import OpenAI from "openai";

const ChatbotText = () => {
    const [message, setMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [chats, setChats] = useState<{ role: string, content: string }[]>([])

    const chat = async (e, message) => {
        e.preventDefault()

        if (!message) return
        setIsTyping(true)

        let msgs = chats
        msgs.push({
            role: "user",
            content: message
        })

    }
    return (
        <>
        <h1>Textual version</h1>
        <form action="" onSubmit={(e) => chat(e, message)}>
            <input type="text"
            name="message"
            value={message}
            placeholder="Scrivi qui"
            onChange={(e) => setMessage(e.target.value)} />
        </form>
        </>
    )
}

export default ChatbotText;