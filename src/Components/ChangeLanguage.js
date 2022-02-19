import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/actions/language";

export default function ChangeLanguage() {
  const language = useSelector((state) => state.langugae.lang);
  const dispatch = useDispatch();

  const changeLanguage = () => {
    // CALL SET LANGUAGE ACTION
    dispatch(setLanguage(language === "ar" ? "en" : "ar"));
    // alternate syntax
    // dispatch({
    //   type : "SET_LANGUAGE",
    //   payload : language === "ar" ? "en" : "ar"
    // });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => changeLanguage()}>
        {language}
      </button>
    </div>
  );
}
