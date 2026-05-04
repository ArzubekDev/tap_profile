
// Временно
let mockDatabase = {
  users: [
    { id: "user_12345", phoneNumber: "+996 555 123 456" }
  ],
  posts: []
};

export const db = {
  user: {
    update: async ({ where, data }: { where: { id: string }, data: { phoneNumber: string } }) => {
      console.log(`База: Пользователь ${where.id}, номер: ${data.phoneNumber}`);
      
      const userIndex = mockDatabase.users.findIndex(u => u.id === where.id);
      if (userIndex !== -1) {
        mockDatabase.users[userIndex].phoneNumber = data.phoneNumber;
      }
      
      await new Promise((resolve) => setTimeout(resolve, 500)); 
      return mockDatabase.users[userIndex];
    }
  },
  post: {
    findUnique: async ({ where }: { where: { id: string } }) => {
      return { id: where.id, authorId: "user_12345", title: "Тест пост" };
    }
  }
};