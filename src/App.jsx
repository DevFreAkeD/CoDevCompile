import { useState, useEffect, useRef } from 'react';
import Sidebar from './componenets/Sidebar'
import Header from './componenets/Header'
import EditorComponent from './componenets/EditorComponent'
import "./index.css"


const App = () => {
  const runCodeRef = useRef(null);
  const [language, setLanguage] = useState('C');
  const [filename, setFilename] = useState('main.c');
  const [codeTemplate, setCodeTemplate] = useState(`#include <stdio.h>
  
int main() {
    printf("Hello, world!\\n");
    return 0;
}`);
  
  const handleRun = () => {
    if (runCodeRef.current) {
      runCodeRef.current();
    }
  };
  const handleLanguageChange = (language, filename, template) => {
    console.log(`Language changed to: ${language}`);
    setLanguage(language);
    setFilename(filename);
    setCodeTemplate(template);
  };
  

  return (
    <div className="flex flex-col h-screen">
      <Header onRun={handleRun} />
      <div className="flex flex-grow">
        <Sidebar  onLanguageChange={handleLanguageChange} />
        <main className="flex-grow">
          <EditorComponent onRun={(run) => (runCodeRef.current = run)} 
          language={language}
          setLanguage={setLanguage}
          filename={filename}
          codeTemplate={codeTemplate}
          />
        </main>
      </div>
    </div>
  )
}

export default App
