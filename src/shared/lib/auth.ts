// Временно
let mockDatabase = {
  users: [
    { 
      id: "user_12345", 
      phoneNumber: "+996 555 123 456", 
      name: "User123", 
      surname: "user_user" 
    }
  ],
  posts: []
};

export const db = {
  user: {
    update: async ({ where, data }: { 
      where: { id: string }, 
      data: Partial<{ phoneNumber: string, name: string, surname: string }> 
    }) => {
      console.log(`[DB Mock] Обновление пользователя ${where.id}:`, data);
      
      const userIndex = mockDatabase.users.findIndex(u => u.id === where.id);
      
      if (userIndex !== -1) {
        mockDatabase.users[userIndex] = {
          ...mockDatabase.users[userIndex],
          ...data
        };
      } else {
        throw new Error("User not found in mock DB");
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