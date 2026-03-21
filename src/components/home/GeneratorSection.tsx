"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { StyleResultList } from "../generator/StyleResultList";
import { TextInputArea } from "../generator/TextInputArea";

const EXAMPLE_TEXT = "Havalı yazı stilleri ile ismimi güzelleştir";

export const GeneratorSection = () => {
    const [value, setValue] = useState("");

    const handleTryExample = () => {
        setValue(EXAMPLE_TEXT);
    };

    const handleClear = () => {
        setValue("");
    };

    return (
        <div id="olusturucu" className="bg-gray-50 border-b border-gray-200">
            <Container className="py-12 md:py-16">
                <div className="mx-auto max-w-4xl space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                            Type Your Text and See Styles
                        </h2>
                        <TextInputArea
                            value={value}
                            onChange={setValue}
                            onTryExample={handleTryExample}
                            onClear={handleClear}
                        />
                    </section>

                    <section className="space-y-4">
                        <StyleResultList input={value} />
                    </section>
                </div>
            </Container>
        </div>
    );
};
