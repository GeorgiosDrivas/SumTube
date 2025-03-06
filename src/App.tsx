import "./styles/main.css";

export default function App() {
  return (
    <>
      <main>
        <section>
          <h1>
            Youtube video <span>Summarizer</span>
          </h1>
        </section>
        <section id="form">
          <input type="text" placeholder="Youtube video link" />
          <button>Summarize</button>
        </section>
      </main>
    </>
  );
}
