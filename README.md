# NAUTILUS
A virtual conscience ; more like Gideon by dr. Harrison Wells  or J.A.R.V.I.S from Iron Man for MCU fans
<h1>🧠 Project101 — Nautilus</h1>

<p><strong>Nautilus</strong> is my virtual conscience — a calm, intelligent, voice-driven AI assistant designed to reflect my personality, knowledge, goals, and projects. She introduces me, represents my portfolio, and interacts with people through a fully voiced, 3D interface.</p>

<blockquote>
  “Hi, I’m Nautilus, the artificial conscience of Engineer Bradley Maina. How can I help you today?”
</blockquote>

<hr/>

<h2>🌟 Vision</h2>

<p>Nautilus is inspired by AI companions like <em>Gideon</em> from <strong>The Flash</strong> — but made fully open-source and free, combining cutting-edge AI, voice synthesis, and web technology. She will:</p>

<ul>
  <li>Introduce me and my work</li>
  <li>Know my current interests and ideas</li>
  <li>Speak using a cloned voice I provide</li>
  <li>Interact using 3D animations or visuals</li>
  <li>Be accessible online via a shareable link</li>
  <li>Run on free and open-source AI tools</li>
</ul>

<hr/>

<h2>🛠️ Tech Stack</h2>

<table>
  <thead>
    <tr>
      <th>Purpose</th>
      <th>Tool</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Voice Output</td>
      <td>
        <a href="https://github.com/rhasspy/piper">Piper</a>, 
        <a href="https://github.com/myshell-ai/OpenVoice">OpenVoice</a>, 
        Coqui
      </td>
    </tr>
    <tr>
      <td>Voice Input (STT)</td>
      <td>
        <a href="https://github.com/openai/whisper">Whisper</a>, Vosk
      </td>
    </tr>
    <tr>
      <td>Avatar & Visual UI</td>
      <td>
        <a href="https://readyplayer.me/">ReadyPlayerMe</a>, Rendered 3D image
      </td>
    </tr>
    <tr>
      <td>Memory Storage</td>
      <td>JSON / SQLite / ChromaDB (Vector DB)</td>
    </tr>
    <tr>
      <td>AI Brain</td>
      <td>Local LLM (e.g., Mistral, Phi via Ollama)</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Python (Flask or FastAPI)</td>
    </tr>
    <tr>
      <td>Frontend</td>
      <td>HTML, CSS, JavaScript</td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>GitHub Pages, Railway, or Render</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>📁 Project Structure</h2>

<pre>
project101/
├── assets/               # Audio files, voice samples, etc.
├── avatar/               # 3D image or renders
├── templates/            # HTML templates
├── static/               # JS, CSS, and other frontend assets
├── app.py                # Flask or FastAPI backend
├── memory.json           # Stored facts, personal data
├── requirements.txt      # Python dependencies
├── README.md
└── .gitignore
</pre>

<hr/>

<h2>🧠 Development Roadmap</h2>

<table>
  <thead>
    <tr>
      <th>Stage</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>✅ Stage 1</td>
      <td>Play recorded voice intro with a static 3D avatar image</td>
    </tr>
    <tr>
      <td>⏳ Stage 2</td>
      <td>Add background animation + intro voice trigger</td>
    </tr>
    <tr>
      <td>⏳ Stage 3</td>
      <td>Store and respond to personal memory</td>
    </tr>
    <tr>
      <td>⏳ Stage 4</td>
      <td>Add voice input via Whisper</td>
    </tr>
    <tr>
      <td>⏳ Stage 5</td>
      <td>Connect to a local LLM</td>
    </tr>
    <tr>
      <td>⏳ Stage 6</td>
      <td>Enable two-way voice conversations</td>
    </tr>
    <tr>
      <td>⏳ Stage 7</td>
      <td>Host online as an interactive AI portfolio assistant</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>🔐 Notes</h2>

<ul>
  <li>This project is currently <strong>private</strong> for development and learning purposes.</li>
  <li>Memory data and personal details are <strong>not shared publicly</strong>.</li>
  <li>Lip sync is simulated using a recorded voice and static 3D avatar to reduce complexity.</li>
</ul>

<hr/>

<h2>👤 Created by</h2>

<p><strong>Bradley Maina</strong><br/>
Software Engineering Student · Raspberry Pi Tinkerer · AI Explorer</p>

<blockquote>If you’re curious about Nautilus, reach out or watch this space.</blockquote>

<hr/>

<h2>📜 License</h2>

<p><strong>MIT (To be confirmed)</strong> – This project is personal; feel free to fork inspiration, but not identity.</p>
