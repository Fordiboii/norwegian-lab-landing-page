import { createContext } from "react";
import { LANGUAGES } from "../utils/languages";

const defaultContextValue = { language: LANGUAGES.NO, setLanguage: () => {} } as unknown as { language: string, setLanguage: React.Dispatch<React.SetStateAction<string>> };

export const LanguageContext = createContext(defaultContextValue);
