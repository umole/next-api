import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <div>
          <label htmlFor='email'></label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='feedback'></label>
          <textarea rows={5} id='feedback' />
        </div>
        <button>Enter</button>
      </form>
    </div>
  );
}
