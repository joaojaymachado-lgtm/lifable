/** Fixed page chrome shared by every page: gradient sky, grain,
 *  custom cursor, reading-progress bar, and the easter-egg toast. */
export function Chrome() {
  return (
    <>
      <div id="bgGradient" />
      <div className="grain" />
      <div className="cursor" />
      <div className="cursor-ring" />
      <div className="progress" />
    </>
  );
}

export function EggToast() {
  return (
    <div className="egg">
      <span className="dot" />
      <span id="eggText" />
    </div>
  );
}
