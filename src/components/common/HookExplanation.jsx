import "./HookExplanation.css";

function HookExplanation({ name, info }) {
    if (!info) return null;

    return (
        <section className="hook-explain">
            <header className="hook-explain__header">
                <h2 className="hook-explain__title">Learn {name}</h2>
                <p className="hook-explain__subtitle">
                    Simple explanation, when to use it, and a tiny code example.
                </p>
            </header>

            <div className="hook-explain__grid">
                <article className="hook-explain__card">
                    <h3>What is it?</h3>
                    <p>{info.purpose}</p>
                </article>

                <article className="hook-explain__card">
                    <h3>Why use it?</h3>
                    <p>{info.whyUse}</p>
                </article>
            </div>

            <article className="hook-explain__card hook-explain__card--wide">
                <h3>How it works</h3>
                <ol className="hook-explain__list">
                    {info.howItWorks.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
            </article>

            {info.tips?.length > 0 && (
                <article className="hook-explain__card hook-explain__card--wide">
                    <h3>Helpful tips</h3>
                    <ul className="hook-explain__list hook-explain__list--bullets">
                        {info.tips.map((tip) => (
                            <li key={tip}>{tip}</li>
                        ))}
                    </ul>
                </article>
            )}

            <article className="hook-explain__card hook-explain__card--code">
                <div className="hook-explain__code-top">
                    <h3>Example code</h3>
                    <span className="hook-explain__lang">JSX</span>
                </div>
                <pre className="hook-explain__pre">
                    <code>{info.example}</code>
                </pre>
            </article>
        </section>
    );
}

export default HookExplanation;
