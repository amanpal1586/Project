import  { useState } from "react";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        
        {isSignIn ? <SignInForm /> : <SignUpForm />}
        
        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="mt-4 text-blue-600 hover:underline text-sm text-center w-full"
        >
          {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
        </button>
      </div>
    </div>
  );
}

function SignInForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
  );
}

function SignUpForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Full Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Sign Up
      </button>
    </form>
  );
}

export default Login;
