import "./Home.css";

function Home() {
    return (
        <section className="home">
            <span className="home__eyebrow">Learning Lab</span>
            <h1 className="home__title">Welcome to React Hooks Playground</h1>
            <p className="home__text">
                Pick a hook from the sidebar, study the example card, then fill in
                the practice card yourself.
            </p>

            <div className="home__tips">
                <article className="home__tip">
                    <h3>1. Read the example</h3>
                    <p>Blue cards show a working, simple demo of the hook.</p>
                </article>
                <article className="home__tip">
                    <h3>2. Try it yourself</h3>
                    <p>Purple dashed cards are blank for your own practice code.</p>
                </article>
                <article className="home__tip">
                    <h3>3. Keep it simple</h3>
                    <p>Focus on one idea at a time — that is how hooks stick.</p>
                </article>
            </div>
        </section>
    );
}

export default Home;
