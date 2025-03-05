import "./styles/main.css";

export default function App() {
  return (
    <>
      <main>
        <section>
          <h1>SumTube - Youtube video Summarizer</h1>
          <p>
            SumTube summarizes YouTube videos by generating concise text
            summaries using AI. <br />
            Simply paste a video link and get a quick, readable summary!
          </p>
        </section>
        <section id="form">
          <label htmlFor="input">Youtube video link</label>
          <input type="text" id="input" />
          <button>Summarize video</button>
        </section>
      </main>
    </>
  );
}
