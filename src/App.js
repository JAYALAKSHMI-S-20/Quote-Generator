import "./styles.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <main>
      <marquee behaviour="scroll"><h1>Quote Generator</h1></marquee>
      <section>
        
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i><br></br>
        <div id="butt">
        <a id="tweetquote"className="button" href={`https://twitter.com/intent/tweet`} title="Tweet this quote!" target="_blank">
        <img border="0"  src="https://tse1.mm.bing.net/th?id=OIP.qi_uU8xeLMrNmXg_mXaKNQHaHa&pid=Api&P=0" width={33}></img></a>
        <a id="tweetquote"className="button" href={`https://tumblr.com/intent/tweet`} title="Post this quote on tumblr" target="_blank">
        <img border="0"  src="https://tse3.mm.bing.net/th?id=OIP.9GD7GXhQiH8ZM5YTCu6rqgHaEK&pid=Api&P=0" width={55}></img></a>
        <button onClick={getNewQuote}>New Quote</button>
        </div>
      </section>
    </main>
  );
}
