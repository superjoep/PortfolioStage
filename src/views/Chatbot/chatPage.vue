<template>
<div class="rounded-3xl h-full p-8 self-start  hover:shadow-xl bg-white basis-1/4 grid-cols-1 gap-4 text-black shadow-md col-span-3 sm:col-span-3 md:col-span-3 grid flex flex-col">
    <div v-for="item in tempChatData" :key="tempChatData.Message">
        <div class="grid-cols-1 rounded-xl col-start-1 text-white p-2 bg-blue-500" v-if="item.isAI != false">AI: {{ item.Message }}</div>
        <div class="rounded-xl grid w-20 justify-items-end text-white p-2 bg-blue-400" v-if="item.isAI != true">
            <div class="grid-cols-1 col-start-1">
            {{ item.Message }}
            </div>
        </div>
    </div>
    <form v-on:submit.prevent="sendmessage">
    <input type="text" v-model="chatMessage" class="shadow-md p-2 h-full rounded-xl">
    <input  type="submit" value="Send" class="bg-green-400 text-white p-2 ml-4 hover:bg-green-500 rounded-xl"></input>
    </form>
</div>  
</template>
<script>
 
const tempChatData = [
    {
    isAI: true,
    Message: "Hello"
    },
    {
    isAI: false,
    Message: "Hi"
    },
    {
    isAI: false,
    Message: "how r u?"
    },
    {
    isAI: true,
    Message: "good wbu?"
    },

]

export default {
    data() {
        return {
            tempChatData,
        };
    },
    methods: {
        sendmessage() {
            let message = {
                isAI: false,
                Message: this.chatMessage
            }
            this.tempChatData.push(message)
      }
        
    
}}

</script>