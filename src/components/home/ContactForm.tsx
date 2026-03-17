"use client";

import { useState } from "react";
import styles from "../../app/page.module.css";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const json = await res.json();
            if (!res.ok) {
                throw new Error(json.error || "Failed to send message.");
            }

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (err: any) {
            console.error(err);
            setStatus("error");
            setErrorMessage(err.message || "Something went wrong.");
        }
    };

    if (status === "success") {
        return (
            <div className={styles.formContainer} style={{ background: "white", padding: "2rem", borderRadius: "1rem" }}>
                <h3 className="heading-3" style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
                    Thank You!
                </h3>
                <p className="text-body">Your message has been received. We will get back to you shortly.</p>
                <button className="btn btn-secondary" style={{ marginTop: "1rem" }} onClick={() => setStatus("idle")}>
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className="heading-3" style={{ marginBottom: "1.5rem" }}>Contact Us</h3>

            {status === "error" && (
                <div style={{ color: "var(--primary-color)", marginBottom: "1rem", fontWeight: 500 }}>
                    {errorMessage}
                </div>
            )}

            <div className={styles.formGrid}>
                <div className="input-group">
                    <label htmlFor="name" className="input-label">Name</label>
                    <input type="text" id="name" name="name" className="input-field" required />
                </div>
                <div className="input-group">
                    <label htmlFor="phone" className="input-label">Phone</label>
                    <input type="tel" id="phone" name="phone" className="input-field" required />
                </div>
            </div>

            <div className="input-group">
                <label htmlFor="email" className="input-label">Email</label>
                <input type="email" id="email" name="email" className="input-field" required />
            </div>

            <div className="input-group">
                <label htmlFor="subject" className="input-label">Subject</label>
                <select id="subject" name="subject" className="input-field" required defaultValue="">
                    <option value="" disabled>Select a subject</option>
                    <option value="General">General</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Analytics">Analytics</option>
                    <option value="EHR">EHR</option>
                    <option value="Practice Management">Practice Management</option>
                </select>
            </div>

            <div className="input-group">
                <label htmlFor="message" className="input-label">Comment or Message</label>
                <textarea id="message" name="message" rows={4} className="input-field" required></textarea>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
