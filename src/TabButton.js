function TabButton({ type, message, setTab, tab }) {
  const active = tab === type;

  return (
    <button
      className={`tabButton ${active ? "tabButtonActive" : ""}`}
      onClick={() => setTab(type)}
    >
      {message}

      <div className={`tabLine ${active ? "tabLineActive" : ""}`}></div>
    </button>
  );
}

export default TabButton;