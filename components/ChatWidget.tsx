export default function ChatWidget() {
  return (
    <div className="chat-widget" id="chat-widget">
      <button type="button" className="chat-widget__launcher" id="chat-launcher" aria-expanded="false" aria-controls="chat-panel">
        <span className="chat-widget__launcher-icon" aria-hidden="true">
          💬
        </span>
        <span className="chat-widget__launcher-text">Ask us</span>
      </button>
      <div className="chat-widget__panel" id="chat-panel" role="dialog" aria-label="ApexWash assistant" hidden>
        <div className="chat-widget__head">
          <strong>ApexWash assistant</strong>
          <button type="button" className="chat-widget__close" id="chat-close" aria-label="Close chat">
            ×
          </button>
        </div>
        <div className="chat-widget__messages" id="chat-messages" role="log" aria-live="polite" />
        <div className="chat-widget__chips" id="chat-chips">
          <button type="button" className="chat-chip" data-chat-suggest="How much does house washing cost?">
            Pricing
          </button>
          <button type="button" className="chat-chip" data-chat-suggest="What is soft wash?">
            Soft wash
          </button>
          <button type="button" className="chat-chip" data-chat-suggest="Are you insured?">
            Insurance
          </button>
          <button type="button" className="chat-chip" data-chat-suggest="How do I schedule?">
            Scheduling
          </button>
        </div>
        <form className="chat-widget__form" id="chat-form">
          <label className="visually-hidden" htmlFor="chat-input">
            Your message
          </label>
          <input type="text" id="chat-input" autoComplete="off" placeholder="Type a question…" maxLength={500} />
          <button type="submit" className="btn btn--primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
