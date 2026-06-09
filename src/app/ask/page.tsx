export default function AskPage() {
  const prompts = [
    "Help me sleep better",
    "I need more energy",
    "What supplements are right for me?",
    "Compare magnesium products",
  ];

  return (
    <main className="ask-page">
      <section className="ask-center">
        <h1 className="ask-title">How can I help with your wellbeing today?</h1>
        <p className="ask-sub">
          Get advice on supplements, ingredients,
          <br />
          and your personal wellbeing goals.
        </p>

        <div className="ask-pills">
          {prompts.map((prompt) => (
            <button key={prompt} className="ask-pill" type="button">
              {prompt}
            </button>
          ))}
        </div>
      </section>

      <section className="ask-input-wrap">
        <div className="ask-input-row">
          <button className="ask-add" type="button" aria-label="Add product">+</button>
          <input
            className="ask-input"
            type="text"
            placeholder="Use @ to add products or ask a question"
            aria-label="Ask question"
          />
          <button className="ask-send" type="button" aria-label="Send">
            ➤
          </button>
        </div>
        <p className="ask-note">
          Helix is AI-generated and may contain mistakes. This is not medical advice and should not replace professional guidance.
          <br />
          <a href="#">Read our data privacy policy.</a>
        </p>
      </section>
    </main>
  );
}
