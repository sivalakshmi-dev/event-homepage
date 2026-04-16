export default function Gallery() {
    const images = ["/images/p1.jpg", "/images/p2.jpg", "/images/p3.jpg", "/images/p4.jpg"];

    return (
        <section id="gallery" style={{ padding: "60px 0", overflow: "hidden" }}>
            <h2>Moments of Joy</h2>
            <div className="marquee">
                <div className="marquee-content">
                    {[...images, ...images].map((img, index) => (
                        <img key={index} src={img} alt={`event-${index}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}