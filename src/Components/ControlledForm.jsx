import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  function checkValidation(inputs) {
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (name.length < 2) {
      setErrorMessage((prev)=> ({
        ...prev,
        name: "Name must be atleast 2 characters."
      }))
      setError(true);
      return;
    } else {
      setError(false)
    }

    if (!email.includes("@")) {
      setErrorMessage((prev)=> ({
        ...prev,
        email: "Invalid email."
      }))
      setError(true);
      return;
    } else {
      setError(false)
    }

    if (password.length < 2) {
      setErrorMessage((prev)=> ({
        ...prev,
        password: "Password must be atleast 2 characters."
      }))
      setError(true);
      return;
    } else {
      setError(false)
    }

    
    if (name && email && password) {
      console.log({
        Name: name,
        Email: email,
        Password: password,
      });

      alert("Account Created!");
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold text-slate-500 text-center">Create Account</h1>
      <p className="text-muted-foreground text-center">Fill in the details to create your account.</p>
      
      <label className="font-semibold text-muted-foreground">Full Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        placeholder="Enter your name..."
        onChange={(e) => setName(e.target.value)}
        className="border border-slate-500 px-2 py-2 rounded-lg"
      />
      {error && <p className="text-red-700 font-semibold">{errorMessage.name}</p>}

      <label className="font-semibold text-muted-foreground">Email:</label>
      <input
        name="email"
        type="email"
        value={email}
        placeholder="Enter your email..."
        onChange={(e) => setEmail(e.target.value)}
        className="border border-slate-500 px-2 py-2 rounded-lg"
      />
      {error && <p className="text-red-700 font-semibold">{errorMessage.email}</p>}

      <label className="font-semibold text-muted-foreground">Password:</label>
      <input
        name="password"
        type="password"
        value={password}
        placeholder="Enter your password..."
        onChange={(e) => setPassword(e.target.value)}
        className="border border-slate-500 px-2 py-2 rounded-lg"
      />
      {error && <p className="text-red-700 font-semibold">{errorMessage.password}</p>}

      <button disabled={error} className="bg-slate-500 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-bold text-lg transition-colors duration-200">
        SUBMIT
      </button>
    </form>
  );
};
