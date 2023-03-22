import "../Styles/DarkMode.css";

function DarkMode() {
  return (
    <>
      <input type="checkbox" id="darkModeToggle"></input>
      <label class="toggle-label" for="darkModeToggle">
        <div class="toggle-background"></div>
        <div class="toggle-thumb"></div>
      </label>
    </>
  );
}

export default DarkMode;
