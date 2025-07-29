"use client";
import { FC } from "react";
import { IconType } from "react-icons";

interface ContactItem {
    icon: IconType;
    label: string;
    href?: string;
    color?: string;
    download?: boolean;
}

interface Props {
    title: string;
    items: ContactItem[];
}

const ContactCardGroup: FC<Props> = ({ title, items }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                {items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex items-center gap-3">
                            <Icon className={item.color} />
                            {item.href ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download={item.download}
                                    className="hover:underline"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactCardGroup;
