import { useRef } from "react";

export default function Home() {

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  async function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const feedbackInput = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, feedback: feedbackInput };

    try {
      console.log('Here!');
      const response = await fetch('/api/hello', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={submitFormHandler} action="#">
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Feedback</label>
          <textarea rows={5} id='feedback' ref={feedbackInputRef}/>
        </div>
        <button>Enter</button>
      </form>
    </div>
  );
}
