export default function Services() {
    const services = [
        { name: "Birthday Parties", icon: "🎂", desc: "Magical birthday setups for kids." },
        { name: "Magic Shows", icon: "🎩", desc: "Professional illusionists & mentalists." },
        { name: "Kitty Parties", icon: "👭", desc: "Elegant gatherings with fun themes." },
        { name: "Theme Decoration", icon: "🎈", desc: "Premium balloon & floral decor." }
    ];

    return (
        <section id="services">
            <h2>Our Services</h2>
            <div className="cards">
                {services.map((item, index) => (
                    <div className="card-item" key={index}>
                        <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.icon}</div>
                        <h3>{item.name}</h3>
                        <p style={{ color: '#666' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}