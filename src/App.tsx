import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <form>
      <label for="name">Name</label>
      <br />
      <input type="text" id="name" name="name" required />
      <br />
      <br />

      <label for="email">Email</label>
      <br />
      <input type="email" id="email" name="email" required />
      <br />
      <br />
      <label for="message">Message</label>
      <br />
      <textarea id="message" name="message" rows="2" required></textarea>
      <br />
      <br />
    <button type="submit">Send</button>

    </form>
    </div>
  );
};
