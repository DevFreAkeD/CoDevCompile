import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const EditorComponent = () => {
  const [code, setCode] = useState('// Type your code here');
  const [output, setOutput] = useState('// Output will appear here');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row h-full">
        {/* Code Section */}
        <div className="flex-1 bg-gray-800 text-white p-0 border-r border-gray-800">
          <div className="bg-gray-900 text-white flex items-center p-3">
            <div className="mr-4">Code</div>
            <div className="flex-1"></div>
          </div>
          <Editor
            height="93%" // Set the height of the code editor
            defaultLanguage="cpp" // Set the default language for syntax highlighting
            value={code}
            theme="vs-dark" // Set the theme for the code editor
            onChange={handleEditorChange}
          />
        </div>

        {/* Output Section */}
        <div className="flex-1 bg-gray-800 text-white p-0">
          <div className="bg-gray-900 text-white flex items-center p-3">
            <div className="mr-4">Output</div>
            <div className="flex-1"></div>
          </div>
          <Editor
            height="93%" // Set the height of the code editor
            value={output}
            theme="vs-dark" // Use the same theme as the code editor
            options={{ readOnly: false }} // Make the output editor read-write
          />
        </div>
      </div>
    </div>
  );
};

export default EditorComponent;
