export default function Splash() {
  return (
    <div id="page-splash" className="page-splash" aria-busy="true" aria-live="polite">
      <div className="page-splash__inner">
        <div className="page-splash__logo" aria-hidden="true">
          Apex<span>Wash</span>
        </div>
        <p className="page-splash__tagline">Professional exterior cleaning</p>
        <div
          className="page-splash__bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
          id="splash-progress"
        >
          <div className="page-splash__bar-fill" />
        </div>
      </div>
    </div>
  );
}
