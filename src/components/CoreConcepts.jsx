import { CORE_CONCEPTS } from "../Data";
import { CoreConcept } from "./CoreConcept";
import { Section } from "./Section";

export const CoreConcepts = () => {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
};
