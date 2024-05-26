import axios from 'axios';

const API_KEY = '81c7608d94mshe505327a61bdc7ap128fdcjsnd8d8d803765a'; // Get yours for free at https://judge0.com/ce or https://judge0.com/extra-ce

export const languageToId = {
  'C': 50,
  'C++': 54,
  'C#': 51,
  'Java': 62,
  'Python': 71,
  'JavaScript': 63,
};

const encode = (str) => btoa(unescape(encodeURIComponent(str || '')));
const decode = (bytes) => {
  const escaped = escape(atob(bytes || ''));
  try {
    return decodeURIComponent(escaped);
  } catch {
    return unescape(escaped);
  }
};

export const runCode = async (code, language, setOutput) => {
  setOutput('⚙️ Running...');
  console.log('⚙️ Sumbitting...');
  try {
    const response = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false',
      {
        language_id: languageToId[language],
        source_code: encode(code),
        stdin: encode(''), // Add stdin input if needed
        expected_output: null,
        redirect_stderr_to_stdout: true,
      },
      {
        headers: {
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          'x-rapidapi-key': API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log((prev) => `${prev}\n🎉 Submission created.`);
    checkSubmission(response.data.token, setOutput);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};

const checkSubmission = async (token, setOutput) => {
  console.log((prev) => `${prev}\n⏬ Checking submission status...`);
  try {
    const response = await axios.get(
      `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
      {
        headers: {
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          'x-rapidapi-key': API_KEY,
        },
      }
    );

    if ([1, 2].includes(response.data.status.id)) {
      console.log((prev) => `${prev}\nℹ️ Status: ${response.data.status.description}`);
      console.log(() => checkSubmission(token, setOutput), 1000);
    } else {
      const output = [decode(response.data.compile_output), decode(response.data.stdout)]
        .join('\n')
        .trim();
      console.log(`${response.data.status.id !== 3 ? '🔴' : '🟢'} ${response.data.status.description}`);
      setOutput(`${output}`);
    }
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};
