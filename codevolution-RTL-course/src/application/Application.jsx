import React from "react";

function Application() {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section one</h2>
      <p>All field are mandatory</p>
      <img
        src="https://via.placeholder.com/150"
        alt="a person eating a hamburguer"
      />
      <div data-testid="custom-element">Custom HTML element</div>
      <form style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="nameInput"
            id="name"
            placeholder="Full Name"
            value="calais"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="country">Name</label>
          <select name="country" id="country">
            <option value="">Select a country</option>
            <option value="BR">Brasil</option>
            <option value="USA">Estados unidos</option>
            <option value="IN">India</option>
            <option value="CHI">China</option>
            <option value="RUS">Russia</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              role="check"
              checked
            />{" "}
            Eu li e concordo com os termos.
          </label>
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}

export default Application;
