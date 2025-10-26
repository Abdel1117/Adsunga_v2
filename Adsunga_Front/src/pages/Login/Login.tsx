import React, { useState } from "react";
import { useNavigate } from "react-router";

interface credentialInterface {
  email: string;
  password: string;
}

export const Login = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    // Here you would typically handle the login logic, e.g., sending a request to your backend
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form after submission
    event.currentTarget.reset();

    try {
      setIsLoading(true);
      // Simulate a login request
      const data: credentialInterface = {
        email: email,
        password: password,
      };
      const response = await fetch(`${API_URL}/api/login/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const donne = await response.json();
      // Handle successful login (e.g., store token, redirect user)
      console.log("Login successful:", donne);
      // You might want to store the token in sessionStorage or context
      sessionStorage.setItem("token", donne.token);
      // Redirect to a protected route or homepage
      navigate("/"); // Assuming you have a navigate function from react-router
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., show a notification or alert)
      alert("Login failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="container lg:max-w-4xl xl:max-w-10/12 mx-auto overflow-hidden">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Adunsga Logo"
            src="../../src/assets/icons/drone-noir.png"
            className="mx-auto h-15 w-auto"
          />
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Connexion à votre compte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Adresse e-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
