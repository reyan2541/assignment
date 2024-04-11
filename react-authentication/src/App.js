import React, { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's just set loggedIn to true
    setLoggedIn(true);
    setUsername('JohnDoe');
    setEmail('johndoe@example.com');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setEmail('');
  };

  const handleProfileUpdate = (newUsername, newEmail) => {
    // Perform profile update logic here
    setUsername(newUsername);
    setEmail(newEmail);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">My App</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!loggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <Profile
            username={username}
            email={email}
            onUpdate={handleProfileUpdate}
            onLogout={handleLogout}
          />
        )}
      </main>
    </div>
  );
}

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login/authentication logic here
    onLogin();
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

function Profile({ username, email, onUpdate, onLogout }) {
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform profile update logic here
    onUpdate(newUsername, newEmail);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block font-bold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
        >
          Update Profile
        </button>
        <button
          type="button"
          onClick={onLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </form>
    </div>
  );
}

export default App;