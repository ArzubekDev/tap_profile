// Временно
const MOCK_USER = {
  id: 'user_12345',
  name: 'Frontend Developer',
  email: 'dev@example.com',
  isAdmin: true,
};

export async function auth() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    user: MOCK_USER,
    expires: new Date(Date.now() + 3600 * 1000).toISOString(),
  };
}
