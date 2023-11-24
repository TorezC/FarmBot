import React, { useState } from "react";

const Password = () => {
  const [passwordVisibility, setPasswordVisibility] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState("fal fa-eye icon");

  const handleVisibility = () => {
    if (passwordIcon === "fal fa-eye icon") {
      setPasswordIcon("fal fa-eye-slash icon");
      setPasswordVisibility("text");
    } else if (passwordIcon === "fal fa-eye-slash icon") {
      setPasswordIcon("fal fa-eye icon");
      setPasswordVisibility("password");
    }
  };
  return (
    <div className="password">
      <input
        className="input-holder"
        type={passwordVisibility}
        placeholder="******"
        id="password"
      />
      <i onClick={handleVisibility} class={passwordIcon}></i>
    </div>
  );
};

export default Password;
