import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { randomQuote } from "../store/quoteSlice.js";
import { useEffect, useRef } from "react";

export const QuoteBox = () => {
  const quote = useSelector(
    (state) => state.quotes.quotes[state.quotes.currentQuoteIndex],
  );
  const dispatch = useDispatch();

  const mounted = useRef(false);

  useEffect(() => {
    // update DOM elements that are present in index.html
    const body = document.body;
    const quoteBox = document.querySelector("#quote-box");
    const textEl = document.querySelector("#quote-box #text h2");
    const authorEl = document.querySelector("#quote-box #author p");
    const tweetLink = document.querySelector("#tweet-quote");
    const newQuoteBtn = document.querySelector("#new-quote");

    if (body) {
      body.style.backgroundColor = quote.color;
      body.style.transition = "background-color 0.5s ease-in";
    }
    if (quoteBox) {
      quoteBox.style.color = quote.color;
      quoteBox.style.transition = "color 0.5s ease-in";
    }
    if (textEl) {
      textEl.innerHTML = `<i class=\"fa fa-quote-left\"></i> ${quote.text}`;
    }
    if (authorEl) {
      authorEl.textContent = `- ${quote.author}`;
    }
    if (tweetLink) {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
      tweetLink.setAttribute("href", url);
    }
    if (newQuoteBtn) {
      newQuoteBtn.style.backgroundColor = quote.color;
      newQuoteBtn.style.transition = "background-color 0.5s ease-in";
      // attach click handler once
      if (!mounted.current) {
        newQuoteBtn.addEventListener("click", () => dispatch(randomQuote()));
        newQuoteBtn.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            dispatch(randomQuote());
          }
        });
      }
    }
    // mark listeners attached
    if (!mounted.current) mounted.current = true;
  }, [quote, dispatch]);
};

export default QuoteBox;
