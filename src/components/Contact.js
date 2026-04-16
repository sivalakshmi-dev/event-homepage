export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="faq-box">
                <h3>Common Questions</h3>
                <details>
                    <summary>Do you provide custom themes?</summary>
                    <p>Yes! We specialize in custom decorations based on your favorite themes.</p>
                </details>
                <details>
                    <summary>What is the duration of the magic show?</summary>
                    <p>Usually, our magic shows last between 45 to 60 minutes.</p>
                </details>
            </div>

            <div className="form-box">
                <h3>Book Your Magic</h3>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Tell us about your event"></textarea>
                    <button type="submit">Send Inquiry</button>
                </form>
            </div>
        </section>
    );
}