import React from "react";
import { useTranslation } from "react-i18next";
import './LanguageSwitcher.css'

const LanguageSwitcher = () =>  {

  const { i18n } = useTranslation();
  return (
    <div className="select">
      <select
        value={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        }
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}
export { LanguageSwitcher };