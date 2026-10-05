*This is a submission for the [Hacktoberfest Weekend Challenge: Build for a Friend](https://dev.to/challenges/hacktoberfest-weekend-2026-10-01)*

## What I Built

Traveling with friends is one of the most rewarding experiences in life—until the friction begins:
- *"Wait, what is our next stop again?"*
- *"Who paid for the train tickets and how much budget do we have left?"*
- *"Did we visit that shrine or is it scheduled for tomorrow morning?"*

I built **WanderMate** for my friend Alex, an avid globetrotter who loves planning trips across different cities but always gets overwhelmed juggling messy group chats, clunky spreadsheet trackers, and fragmented note apps on the go.

**WanderMate** is a clean, lightweight, all-in-one **Travel Buddy Web App** that keeps trips effortless and organized:

1. **📍 Smart "Next Destination to Cover" Hero Banner**: Automatically computes the immediate next unvisited itinerary stop or bucket list spot. It displays the day, scheduled time, helpful notes (e.g., *"Arrive early to beat morning crowds"*), and a 1-click **Open in Google Maps** shortcut, plus a 1-click **Mark as Visited** button.
2. **🗺️ Daily Itinerary Timeline**: Organizes trip activities chronologically by day with custom timestamps, categories (Sightseeing, Food, Transit, Leisure), and estimated costs.
3. **💳 Real-time Travel Expense Logger**: 
   - Live metrics for **Total Spent**, **Remaining Budget**, and **Daily Average Spend**.
   - Visual dynamic progress bar that turns amber/red if you approach or exceed your budget.
   - **Spending by Category breakdown** (Food & Dining, Accommodation, Transport, Tickets & Tours, Shopping, Misc) with interactive filters.
4. **🎒 Trip Essentials & Packing Checklist**: Quick checklist for passports, adapters, battery banks, and medicines.
5. **🌓 Sleek Dark & Light Themes**: Modern travel-inspired UI with glassmorphism, responsive layout for mobile and desktop, zero-latency offline performance, and automatic `localStorage` persistence.

---

## Demo

- **Local Preview**: Run `python -m http.server 3000` (or open [`index.html`](file:///e:/Rookie%20Techie/Hacktoberfest/C1/index.html) directly in any browser) and visit **`http://localhost:3000`**.
- **Interactive Capabilities**:
  - Preloaded with a curated **Tokyo & Kyoto Autumn Journey** trip to explore instantly.
  - Interactive tab navigation: *Itinerary Schedule*, *Next Points to Cover*, *Expense Logger*, and *Essentials*.
  - 1-click toggle to mark items visited, update live budget indicators, and export complete trip data as JSON.
  - Full theme switcher (🌙 Dark / ☀️ Light mode).

---

## Code

{% embed https://github.com/ASRx13/WanderMate %}

**GitHub Repository:** [https://github.com/ASRx13/WanderMate](https://github.com/ASRx13/WanderMate)

The project is structured with clean, dependency-free vanilla web technologies for lightning-fast loads and zero-setup deployment:

```
├── index.html       # Accessible semantic HTML5 layout, modals, and tab navigation
├── style.css        # Responsive design system, CSS variables, glassmorphic cards
├── app.js           # Reactive state manager, budget calculations, localStorage engine
└── README.md        # Complete setup and feature guide
```

### Key Highlights:
- **Zero build steps required**: Works out of the box by opening `index.html` in Chrome, Firefox, Safari, or Edge.
- **Privacy First**: 100% of itinerary notes and expense receipts remain stored in the user's browser via `localStorage`—no ads, no cloud trackers, no account signup hurdles.
- **One-Click JSON Export**: Allows travelers to download their itinerary and spending history anytime.

---

## How I Built It

WanderMate was designed and implemented through pair-programming with the **Antigravity AI Agent** harness:

1. **Prompt-to-Architecture Formulation**:
   - Specified core requirements: chronological itinerary management, a proactive "next stop" highlighter, and an intuitive travel expense logger.
2. **Design System & Aesthetics**:
   - Implemented custom CSS tokens with an ocean cyan and sunset amber palette, subtle radial background glows, accessible contrast ratios, and glassmorphic cards.
3. **Reactive Application Engine**:
   - Built an event-driven `TravelApp` JavaScript class handling state mutation, automatic budget recalibration, category percentage calculations, and dynamic next-stop queue resolution.
4. **Verification & Hardening**:
   - Verified JavaScript syntax via `node -c`, ensured HTML semantic hierarchy with unique identifiers, and established responsive breakpoints for mobile and desktop viewports.

---

## Why Does Open Innovation Matter?

Open innovation is the cornerstone of building software that truly respects human needs:
- **No Walled Gardens or Subscriptions**: Commercial travel apps lock basic features like offline access, multi-day itineraries, or expense tracking behind monthly subscriptions. Open-source, agentic development empowers anyone to build tailored software for their friends in an afternoon.
- **Privacy & Ownership**: Travel logs contain sensitive personal location history, flight dates, and financial expenses. Because WanderMate is open and runs directly in the client browser, a friend's private itinerary never leaves their device.
- **Modifiable & Future-Proof**: Anyone can clone, customize currency tags, add new transit integrations, or adapt the checklist for backpacking, road trips, or family vacations without fear of an API deprecation.

---

## My Agent Session

- **Tooling Used**: Antigravity IDE & AI Pair Programming Agent.
- **Workflow**: Autonomous file generation (`index.html`, `style.css`, `app.js`), iterative code verification, syntax checking, local HTTP server orchestration, and comprehensive documentation creation.

---

## Prize Categories

- **Build for a Friend**
- **Open Innovation / Open Source Productivity**
