import "../styling/intro.css";

export default function Introduction() {
  const text = ["Hi", "I'm Nate", "Welcome to my portfolio"];
  let counter = 0;

  setInterval(change, 3000);

  function change() {
    document.getElementById("fadeEl").setAttribute("class", "text-fade");

    setTimeout(() => {
      document.getElementById("fadeEl").innerHTML = text[counter];
      document.getElementById("fadeEl").setAttribute("class", "text-show");
    }, 1000);

    counter++;

    if (counter >= text.length) {
      counter = 0;
    }
  }

  return (
    <div>
      <span id="fadeEl" className="text-show">
        Hi
      </span>
    </div>
  );
}
