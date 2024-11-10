const Contact: React.FC = () => {
    return (
        <section id="contact" className="p-8 mt-10">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="flex flex-col space-y-4"
            >
                <label>
                    Name:
                    <input type="text" name="name" required className="border p-2 rounded w-full" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required className="border p-2 rounded w-full" />
                </label>
                <label>
                    Message:
                    <textarea name="message" required className="border p-2 rounded w-full"></textarea>
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
