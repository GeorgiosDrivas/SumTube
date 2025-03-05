import "./styles/main.css";

export default function App() {
  return (
    <>
      <main>
        <section>
          <h1>
            Youtube video <span>Summarizer</span>
          </h1>
          <p>
            SumTube summarizes YouTube videos by generating concise text
            summaries using AI. <br />
            Simply paste a video link and get a quick, readable summary!
          </p>
        </section>
        <section id="form">
          <input type="text" placeholder="Youtube video link" />
          <button>Summarize video</button>
        </section>
      </main>
    </>
  );
}
