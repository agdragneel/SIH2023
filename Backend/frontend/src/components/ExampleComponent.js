import React from 'react';
import { useTranslation } from 'react-i18next';



function ExampleComponent(){
    const {t}= useTranslation();
    i18n.changeLanguage("fr");



    return(
        <div>
            <h1>{t("welcome")}</h1>
            <button>{t("buttonText")}</button>
        </div>
    );
}
export default ExampleComponent;