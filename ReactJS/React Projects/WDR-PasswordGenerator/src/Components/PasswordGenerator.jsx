import { useCallback, useEffect, useRef, useState } from "react";
import "../Styles/PasswordGenerators.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowCharacters, setAllowCharacters] = useState(false);
  const [password, setPassword] = useState("");

const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (allowNumbers) chars += "0123456789";
    if (allowCharacters) chars += "!@#$%^&*()_+";

    let pass = "";
    for (let i = 0; i <= length; i++) {
      const randomPassword = Math.floor(Math.random() * chars.length);
      pass += chars[randomPassword];
    }
    setPassword(pass);
  }, [length, allowNumbers, allowCharacters]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = ()=>{
    passwordRef.current.select();
    navigator.clipboard.writeText(password)
  }

  return (
    <div className="pg-container">
      <h3>Password Generator</h3>

      <div className="pg-password-box">
        <input readOnly value={password} ref={passwordRef} />
        <button onClick={copyPassword}>copy</button>
      </div>

      <div className="pg-option">
        <label>Length: {length}</label>
      </div>
      <input
        type="range"
        className="pg-range"
        min={8}
        max={50}
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />

      <div className="pg-option">
        <label>
          <input
            type="checkbox"
            checked={allowNumbers}
            onChange={() => setAllowNumbers(!allowNumbers)}
          />
          Numbers
        </label>
      </div>
      <div className="pg-option">
        <label>
          <input
            type="checkbox"
            checked={allowCharacters}
            onChange={() => setAllowCharacters(!allowCharacters)}
          />
          Special Characters
        </label>
      </div>
    </div>
  );
};

export default PasswordGenerator;
