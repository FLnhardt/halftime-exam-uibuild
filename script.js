document.querySelector("#root").insertAdjacentHTML("beforeend", `
    <form>
      <h1>Visszajelzés</h1>

      <input type="text" placeholder="Tárgy">

      <textarea placeholder="Megjegyzés"></textarea>

      <button>Mentés</button>

      <div>
        <input type="checkbox">
        <p>Elolvastam és elfogadom az <u>Adatkezelési Tájékoztatót.</u></p>

        <input type="checkbox">
        <p>Szeretnék hírlevelet kapni</p>
      </div>
    </form>

`)