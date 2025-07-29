"use client";
import { FC } from "react";
import ContactCardGroup from "./ContactGroup";
import { codingProfiles, socialContacts } from "../constants/contact";

const Contact: FC = () => {
    return (
        <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
                🤝 Get in Touch
            </h2>

            <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
                <ContactCardGroup title="📬 Social & Personal Links" items={socialContacts} />
                <ContactCardGroup title="🧠 Coding Profiles" items={codingProfiles} />
            </div>
        </section>
    );
};

export default Contact;
