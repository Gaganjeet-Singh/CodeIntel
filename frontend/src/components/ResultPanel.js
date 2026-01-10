export default function ResultPanel({ result }) {
  return (
    <section className="results">
      <div className="results-header">
        <h2>Your Results</h2>
        <span>Reviewed just now</span>
      </div>

      {!result && <p className="muted">No review yet</p>}

      {result && (
        <>
          

          <div className="card danger">
            <h4>Issues Found</h4>
            <ul>
              {result.issues.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>

          <div className="card success">
            <h4>Recommendations</h4>
            <ul>
              {result.suggestions.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
