export default function ResultPanel({result}) {
    if(!result) return <section className = "results">No review yet</section>
    return (
        <section className="results">
            <h3>Code Summary</h3>
            <p>{result.summary}</p>

            <h4>Issues</h4>
            <ul>
                {result.issues.map((i,idx) => (
                    <li key = {idx}>{i}</li>
                ))}
            </ul>

            <h4>Recommendations</h4>
            <ul>
                {result.suggestions.map((s,idx) => (
                    <li key = {idx}>{s}</li>
                ))}
            </ul>

            <h4>Score : {result.score}</h4>
        </section>
    )
} 