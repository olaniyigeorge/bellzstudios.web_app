    "use client";
    import { useState } from "react";
    import { CurrencyDollarIcon, EnvelopeIcon, EnvelopeOpenIcon, ShareIcon } from "@heroicons/react/24/outline";
    import { Button } from "./ui/button";
import { toast } from "react-toastify";

    export default function SupportUs() {
        const [currentView, setCurrentView] = useState("default");
        const [email, setEmail] = useState<string>("");
        const [name, setName] = useState<string>("");
        const [message, setMessage] = useState<string>("");

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            const feedback = { name, email, message };

            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(feedback),
            });

            if (response.ok) {
                toast.success("Sent! Thanks for the feedback");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                toast.error("Failed to send feedback");
                console.error("Failed to send feedback");
            }
        };

        return (
            <div className="w-full flex justify-center my-4">
                <div id="support-us" className="w-full md:w-[60%] flex flex-col items-center text-center p-4 bg-white/5 shadow-[inset_10px_-80px_94px_0_rgb(199,199,199,0.01)] backdrop-blur-lg rounded-lg bg-opacity-10">
                    <h1 className="text-3xl font-bold mb-2">How Can You Support Us?</h1>

                    <p className="text-lg text-gray-400 mb-2">Your support keeps us building impactful products!</p>

                    <div className="w-full flex justify-center my-4">
                        {currentView === "default" && (
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <ShareIcon className="w-5 h-5 text-blue-400" />
                                    <span>Share our stories</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <EnvelopeOpenIcon className="w-5 h-5 text-green-400" />
                                    <span>Give feedback</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CurrencyDollarIcon className="w-5 h-5 text-yellow-400" />
                                    <span>Support financially</span>
                                </li>
                            </ul>
                        )}
                        {currentView === "share" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Share Our Stories</h2>
                                <p>You can share any of our stories on social media.</p>
                            </div>
                        )}
                        {currentView === "feedback" && (
                            <div>
                                <h2 className="font-medium ">We appreciate your feedback. Please let us know...</h2>

                                <p className="text-sm text-gray-600 mb-2">
                                    Want to be anonymous? No problem. Just leave the name and email fields empty.
                                </p>
                                
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full bg-transparent p-2 border border-gray-300 rounded-md mb-2"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full bg-transparent p-2 border border-gray-300 rounded-md mb-2"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <textarea
                                        className="w-full bg-transparent p-2 border border-gray-300 rounded-md mb-2"
                                        rows={4}
                                        name="message"
                                        placeholder="Your feedback..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                    <Button
                                        type="submit"
                                        variant="outline"
                                        className="rounded-full px-3 py-2 border-0 bg-green-500"
                                    >
                                        Send Feedback
                                    </Button>
                                </form>
                            </div>
                        )}
                        {currentView === "support" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Support Us Financially</h2>
                                <p>3112872143 - First Bank - Abeleje Olaniyi George</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            className="text-white border-gray-600 hover:bg-white hover:text-black"
                            onClick={() => setCurrentView("share")}
                        >
                            <ShareIcon className="w-4 h-4 mr-2" />
                            Share
                        </Button>
                        <Button
                            variant="outline"
                            className="text-white border-gray-600 hover:bg-white hover:text-black"
                            onClick={() => setCurrentView("feedback")}
                        >
                            <EnvelopeIcon className="w-4 h-4 mr-2" />
                            Give Feedback
                        </Button>
                        <Button
                            variant="outline"
                            className="text-white border-gray-600 hover:bg-white hover:text-black"
                            onClick={() => setCurrentView("support")}
                        >
                            <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                            Donate
                        </Button>
                    </div>

                    <p className="mt-6 text-sm opacity-80">
                        Want to consult, collaborate, or contribute?  
                        <br />
                        <a href="mailto:olaniyigeorge77@gmail.com" className="text-blue-400 underline flex items-center justify-center mt-1">
                            <EnvelopeIcon className="w-4 h-4 mr-1" />
                            Send us an email
                        </a>
                    </p>
                </div>
            </div>
        );
    }
