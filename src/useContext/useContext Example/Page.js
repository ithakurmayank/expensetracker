import React from "react";
import Heading from "./Heading";
import Section from "./Section";

export default function Page() {
  return <>
    <Section >
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>

        <Section >
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>

            <Section>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
            </Section>
        </Section>
    </Section>
  </>;
}
