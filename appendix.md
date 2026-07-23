# Appendix — Sleep OS Design Case Study

## Author
Shrinivas Shinde

## Date
July 24, 2026

---

## Tools Used

### Large Language Model
- **Model:** Claude (via Kiro IDE — AI-powered development environment)
- **Usage:** Assisted with structuring the case study, generating semantic HTML/CSS/SVG wireframes, iterating on design reasoning, and expanding the document with new system-level sections (Learning Engine, Confidence Engine, Knowledge Graph, Adaptive Journey, Multi-Device interactions, Trust architecture). All product decisions, feature definitions, design principles, and persona details were authored by me with the LLM accelerating implementation.

### Internet Research
The following searches were conducted to inform the design:

1. **"Oura Ring Whoop Eight Sleep smart mattress features comparison 2025"**
   - Findings: Oura Ring 4 achieves 96% sleep/wake accuracy and 79% sleep stage accuracy against polysomnography. Whoop focuses on strain/recovery for athletes. Eight Sleep provides active temperature regulation. None offer calendar-aware boundary management or behavioral coaching integrated with environmental control.
   - Sources: mattressnut.com, tomsguide.com, asianefficiency.com

2. **"circadian rhythm science sleep stages optimization personalized"**
   - Findings: Circadian rhythm is a 24-hour internal clock regulated by light. Combining CBT-I with circadian rhythm support produces superior outcomes vs either alone. Personalized protocols based on chronotype remain an active research gap.
   - Sources: NIH/PubMed (NBK526132, NBK534238), Cleveland Clinic, preprints.org

3. **"smart home sleep automation lighting temperature sound machine integration"**
   - Findings: Core body temperature must drop 1–2°F for deep sleep initiation. Optimal bedroom: 65–68°F, complete darkness, noise masking. Gradual dimming supports melatonin production better than abrupt lights-off. Home Assistant and Matter/Thread enable cross-device automation.
   - Sources: mattressnut.com, shipshape.ai, cnet.com

4. **"CBT-I cognitive behavioral therapy insomnia digital app features 2025"**
   - Findings: Fully automated digital CBT-I is effective and provides accessible alternative without therapist involvement. Digital CBT-I improves outcomes for both insomnia and comorbid depression. Key techniques: sleep restriction, stimulus control, cognitive restructuring, relaxation training.
   - Sources: Nature Digital Medicine, PubMed/PMC multiple studies

---

## Design Process

### Phase 1: Problem Definition (20 min)
- Defined the primary persona based on the challenge brief
- Identified the central insight: awareness ≠ execution
- Established design principles derived from behavioral economics (pre-commitment, decision fatigue, implementation intentions)

### Phase 2: System Architecture (25 min)
- Designed the 6-layer architecture (Observation → Knowledge → Prediction → Decision → Automation → Reflection)
- Mapped data sources and confidence classifications
- Defined the confidence-gated automation model (automate / recommend / ask)

### Phase 3: Feature Design (35 min)
- Designed each core feature with: problem statement, user story, interaction design, decision logic, edge cases, and tradeoffs
- Prioritized features that reduce decision fatigue over features that increase awareness
- Ensured each feature traces back to a specific persona problem

### Phase 4: Wireframes & UI (30 min)
- Created SVG-based low-fidelity wireframes for 9 core mobile screens
- Designed multi-device wireframes (Apple Watch, Voice Assistant, Bedroom Display, Notifications, Calendar Card)
- Designed the physical bedroom layout diagram
- Wrote annotations explaining design decisions for each screen

### Phase 5: Adaptive Journey & Intelligence (25 min)
- Designed the Day 0 → 30 → 90 user journey with wireframes showing system evolution
- Created the Learning Loop and Verification Engine architecture
- Designed the Confidence Engine with three-dimensional confidence model
- Built the Personal Knowledge Graph with negative/positive loop diagrams
- Designed Trust & Privacy section with progressive trust-building model

### Phase 6: Implementation & Polish (20 min)
- Structured as semantic HTML with CSS design system
- Implemented interactive navigation, wireframe prototype switching, and device tab navigation
- Applied print-friendly styles for PDF export
- Verified all HTML tags balanced and document structure intact

---

## Key Assumptions

1. **Hardware availability:** The persona has or is willing to invest in smart home devices (smart lights, thermostat, wearable sensor). Estimated cost: $500–800 for full setup.

2. **Calendar access:** The system has read/write access to the user's work calendar (Google Calendar or equivalent) with permission to send decline/reschedule messages.

3. **Smart home protocol maturity:** Matter/Thread protocol (ratified 2022, widely adopted by 2025) enables cross-manufacturer device communication without proprietary hubs.

4. **On-device ML capability:** Modern smartphones (2024+) have sufficient neural engine capacity to run sleep staging models locally without cloud dependency.

5. **Partner non-participation:** The partner does not need to use Sleep OS. The system operates with one-sided data collection (mattress sensor detects presence and movement without requiring partner's device).

6. **Organizational culture:** The system cannot force organizational change (e.g., eliminating late meetings). It operates within existing constraints and manages them rather than resolving them.

---

## Research Summary

### Sleep Science Foundations
- **Two-process model:** Sleep is regulated by homeostatic sleep pressure (Process S, adenosine accumulation) and circadian rhythm (Process C, ~24-hour oscillation). Optimal sleep occurs when both align.
- **Temperature regulation:** Core body temperature drops 1–2°F to initiate sleep. Room temperature of 65–68°F supports this physiological process.
- **Light and melatonin:** Light exposure (especially blue-enriched, >480nm) suppresses melatonin via melanopsin receptors. Dim light (<10 lux) for 30–60 minutes before bed allows natural melatonin onset.
- **Sleep architecture:** Normal adult sleep cycles through N1 → N2 → N3 (deep) → REM in ~90-minute cycles. Deep sleep predominates early; REM predominates in later cycles.

### Behavioral Science Foundations
- **Pre-commitment devices:** Originating from Ulysses contracts. People make better decisions about future behavior when not currently experiencing the temptation. (Thaler & Sunstein, 2008)
- **Decision fatigue:** Willpower depletes throughout the day. Evening decisions are systematically worse than morning decisions. (Baumeister et al., 1998)
- **Implementation intentions:** "If X, then Y" rules outperform pure goals by 2–3x in behavior change studies. (Gollwitzer, 1999)
- **Habit stacking:** Attaching new behaviors to existing habits increases adherence. (Clear, 2018)

### Technology Landscape (2026)
- **Oura Ring 4:** Best-in-class sleep tracking accuracy for consumers. 96% sleep/wake, 79% staging.
- **Eight Sleep Pod:** Active mattress temperature regulation. No integration with broader smart home or behavioral coaching.
- **WHOOP 5.0:** Strain and recovery focus. Athletic population. Limited sleep intervention capability.
- **Digital CBT-I (Sleepio, etc.):** Evidence-based insomnia treatment. Not integrated with physical environment or calendar systems.
- **Home Assistant / Matter:** Open protocol enabling cross-device automation. Mature ecosystem by 2026.

---

## Ethical Considerations

- Sleep data is intimate and reveals health conditions, relationship patterns, and stress levels.
- On-device processing prevents sensitive biometric data from reaching external servers.
- Partner detection via mattress sensor is limited to presence/movement — no biometric profiling without consent.
- Auto-decline messages are written in the user's voice and represent pre-committed decisions, not system-imposed restrictions.
- The user can always override any system action with a single interaction.

---

## Limitations of This Exercise

- Wireframes are digital (SVG) rather than hand-drawn. Physical sketches would communicate earlier-stage thinking more authentically.
- The case study is designed for one persona. A production system would need to accommodate diverse chronotypes, life stages, and cultural contexts.
- No user testing was conducted. Assumptions about interaction patterns and feature prioritization are hypothesis-level, not validated.
- The 130-minute time constraint limited exploration of alternative architectures and competitive positioning.

---

## LLM Interaction Notes

The LLM was used as an implementation accelerator, not a design decision-maker. Specifically:
- **Used for:** HTML/CSS generation, SVG coordinate calculation, formatting and structure, typography recommendations, CSS grid/flexbox implementation
- **Not used for:** Feature decisions, design principles, persona definition, system architecture choices, tradeoff analysis, design rationale

All content represents original thinking. The LLM reduced time-to-implementation for the technical artifact (HTML/CSS/JS) so that cognitive effort could be allocated to design reasoning and product thinking.
