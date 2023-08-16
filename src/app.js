/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pron = ["the", "our", "my"];
  let adj = ["awesome", "amazing", "perfect", "breathtaking"];
  let noun = ["racoon", "beatles", "slide", "kettle"];
  let dot = [".com", ".org", ".net"];

  for (let pronIndex = 0; pronIndex < pron.length; pronIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (let dotIndex = 0; dotIndex < dot.length; dotIndex++) {
          console.log(
            pron[pronIndex] + adj[adjIndex] + noun[nounIndex] + dot[dotIndex]
          );
        }
      }
    }
  }
};
