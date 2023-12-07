import React from "react";
import Navbar from "../components/navbar";
import styles from "../contact/page.module.css";
import {RadioGroup, Radio} from "@nextui-org/react";

export default function Contact() {

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Navbar />
            </div>
            <div className={styles.body}>    
                <h1>Contact</h1>
                <div className={styles.contactDiv}>

                    <div className={styles.contactForm}>
                        <div role="group" className={styles.formGroup}>
                            <p id="name" className={styles.formLabel} aria-hidden>Name</p>

                            <input type="text" aria-labelledby="name" className={styles.formInput} />
                        </div>

                        <div role="group" className={styles.formGroup}>
                            <p id="email" className={styles.formLabel} aria-hidden>Email</p>

                            <input type="text" aria-labelledby="email" className={styles.formInputs} />
                        </div>

                        <div role="group" className="sm:col-span-3">
                            <label htmlFor="service-type" className="block text-sm font-medium leading-6 text-gray-900">
                                Choose Service
                            </label>
                            <div className="mt-2">
                                <select
                                    id="service-type"
                                    name="service-type"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Build Website</option>
                                        <option>Accessibility Consulting</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
}