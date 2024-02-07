const { authOptions } = require('@/app/api/auth/[...nextauth]/route');
const { getServerSession } = require('next-auth');
const { redirect } = require('next/navigation');

const loginIsRequiredServer = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return redirect('/login');
};

export { loginIsRequiredServer };
