<template>
    <div class="chat-container rounded-3xl h-full p-4 self-start hover:shadow-xl bg-white basis-1/4 grid-cols-1 gap-4 text-black shadow-md col-span-3 sm:col-span-3 md:col-span-3 grid flex flex-col">
      <div v-for="item in tempChatData" :key="item.Message" class="chat-message-wrapper">
        <div class="chat-message" :class="{ 'chat-message-ai': item.isAI, 'chat-message-user': !item.isAI }">
          <div v-html="convertEmojis(item.Message)"></div>
        </div>
      </div>
      <!-- Typing Indicator -->
      <div v-if="isTyping" class="typing-indicator">
        <div class="typing-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <form @submit.prevent="sendmessage" class="chat-form flex items-center mt-4">
        <input
          type="text"
          v-model="chatMessage"
          placeholder="Type a message"
          class="chat-input shadow-md p-2 rounded-xl flex-1"
        />
        <input
          type="submit"
          value="Send"
          class="chat-submit bg-green-400 text-white p-2 ml-4 hover:bg-green-500 rounded-xl"
        />
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { emojify } from 'node-emoji';
  
  export default {
    data() {
      return {
        chatMessage: '',
        tempChatData: [],
        isTyping: false,  // Add this to manage the typing indicator state
      };
    },
    methods: {
      async sendmessage() {
        if (this.chatMessage.trim() === '') return; // Prevent empty messages
  
        let userMessage = {
          isAI: false,
          Message: this.chatMessage,
        };
        this.tempChatData.push(userMessage);
        this.chatMessage = ''; // Clear the input after sending
  
        this.isTyping = true;  // Show the typing indicator
  
        try {
          const response = await axios.post('http://localhost:3000/api', {
            message: userMessage.Message  // Send the message to the backend
          });
  
          let aiMessage = {
            isAI: true,
            Message: response.data.message,
          };
          this.tempChatData.push(aiMessage);
        } catch (error) {
          console.error('Error fetching message:', error);
          let errorMessage = {
            isAI: true,
            Message: 'Error: Unable to get response from server',
          };
          this.tempChatData.push(errorMessage);
        } finally {
          this.isTyping = false;  // Hide the typing indicator
        }
      },
      convertEmojis(message) {
        return emojify(message);  // Convert emoji text to actual emojis
      },
    },
  };
  </script>
  
  <style scoped>
  /* Main container styles */
  .chat-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #f0f0f0; /* Light gray background for the chat container */
  }
  
  /* Chat message styles */
  .chat-message-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  
  .chat-message {
    max-width: 75%;
    padding: 10px 15px;
    border-radius: 20px;
    margin-bottom: 5px;
    line-height: 1.4;
    font-size: 14px;
  }
  
  .chat-message-ai {
    background-color: #34b7f1;  /* WhatsApp-like color for AI messages */
    color: #ffffff;
    align-self: flex-start;  /* Align AI messages to the left */
    margin-left: 10px;  /* Add some spacing from the left */
    margin-right: auto; /* Ensures the message aligns to the left */
  }
  
  .chat-message-user {
    background-color: #dcf8c6;  /* WhatsApp-like color for user messages */
    color: #000000;
    align-self: flex-end;  /* Align user messages to the right */
    margin-left: auto;  /* Ensures the message aligns to the right */
    margin-right: 10px; /* Add some spacing from the right */
  }
  
  /* Typing Indicator styles */
  .typing-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  
  .typing-dots {
    display: flex;
    align-items: center;
  }
  
  .dot {
    background-color: #34b7f1; /* Same color as AI message background */
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 2px;
    animation: typing 1.4s infinite;
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes typing {
    0%, 100% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
  }
  
  /* Form styles */
  .chat-form {
    display: flex;
    align-items: center;
  }
  
  .chat-input {
    background: #ffffff; /* White background for the input */
    border: 1px solid #dcdcdc; /* Light border for the input */
  }
  
  .chat-submit {
    cursor: pointer;
  }
  
  /* Responsive adjustments */
  @media (max-width: 640px) {
    .chat-message {
      max-width: 80%;
    }
  }
  </style>
  