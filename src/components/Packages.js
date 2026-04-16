export default function Packages() {
    return (
        <section style={{ backgroundColor: '#f9f9f9' }} id="packages">
            <h2>Our Packages</h2>
            <div className="cards">
                <div className="card-item">
                    <h3 style={{ color: '#666' }}>BASIC</h3>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>₹4,999</h2>
                    <p>Standard Decoration</p>
                    <p>1 Hour Magic Show</p>
                    <p>Basic Sound System</p>
                </div>
                <div className="card-item" style={{ border: '2px solid var(--primary)' }}>
                    <h3 style={{ color: 'var(--primary)' }}>STANDARD</h3>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>₹9,999</h2>
                    <p>Themed Decoration</p>
                    <p>Premium Magic Show</p>
                    <p>Anchor / Host</p>
                </div>
                <div className="card-item">
                    <h3 style={{ color: '#666' }}>PREMIUM</h3>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>₹14,999</h2>
                    <p>Grand Theme Setup</p>
                    <p>Grand Magic Illusion</p>
                    <p>Professional Photography</p>
                </div>
            </div>
        </section>
    );
}