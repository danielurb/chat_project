// dom queries
const chatList = document.querySelector('.chat-list');

// class instancess
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');

// get chats and render
chatroom.getChats(data => chatUI.render(data));
