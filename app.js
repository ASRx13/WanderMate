/**
 * WanderMate — Simple Travel Buddy, Itinerary & Expense Tracker
 * Features:
 * - Itinerary timeline with daily grouping & time tracking
 * - Next Points to Cover highlight banner & bucket list
 * - Complete Expense Logger with budget metrics & category breakdowns
 * - Travel Essentials checklist
 * - LocalStorage state persistence & Sample trip data reset
 * - Theme switcher & responsive UI
 */

// Initial Sample Trip Data
const DEFAULT_TRIP = {
  settings: {
    title: "Kyoto & Tokyo Autumn Journey 🍁",
    destination: "Japan (Tokyo & Kyoto)",
    startDate: "2026-10-12",
    endDate: "2026-10-18",
    budget: 2200,
    currency: "$"
  },
  itinerary: [
    {
      id: "itin-1",
      day: 1,
      time: "10:30",
      title: "Arrive at Haneda Airport & Pick up Suica IC Card",
      location: "Tokyo Haneda Airport Terminal 3",
      category: "Transport",
      estimatedCost: 35,
      notes: "Exchange JR pass vouchers at JR East Travel Service Center.",
      completed: true
    },
    {
      id: "itin-2",
      day: 1,
      time: "14:00",
      title: "Check-in at Hotel Gracery Shinjuku",
      location: "1-19-1 Kabukicho, Shinjuku",
      category: "Relaxation",
      estimatedCost: 180,
      notes: "Drop luggage and see the giant Godzilla head on the terrace!",
      completed: true
    },
    {
      id: "itin-3",
      day: 1,
      time: "17:30",
      title: "Sunset at Shibuya Sky Observation Deck",
      location: "Shibuya Scramble Square 47F",
      category: "Sightseeing",
      estimatedCost: 18,
      notes: "Pre-booked sunset ticket slot. Panoramic view of Tokyo tower & Fuji.",
      completed: true
    },
    {
      id: "itin-4",
      day: 2,
      time: "08:30",
      title: "Senso-ji Temple & Asakusa Nakamise Street",
      location: "2-3-1 Asakusa, Taito City",
      category: "Sightseeing",
      estimatedCost: 15,
      notes: "Try melonpan and matcha dango along the street vendors.",
      completed: false
    },
    {
      id: "itin-5",
      day: 2,
      time: "13:00",
      title: "teamLab Borderless Digital Art Museum",
      location: "Azabudai Hills, Minato City",
      category: "Activity",
      estimatedCost: 28,
      notes: "Wear comfortable socks and shoes for interactive mirror floors.",
      completed: false
    },
    {
      id: "itin-6",
      day: 3,
      time: "07:30",
      title: "Fushimi Inari Taisha Thousand Torii Gates",
      location: "Kyoto, Fushimi Ward",
      category: "Sightseeing",
      estimatedCost: 0,
      notes: "Arrive early to beat morning crowds at the thousands of vermilion Torii gates. Wear walking shoes!",
      completed: false
    },
    {
      id: "itin-7",
      day: 3,
      time: "12:00",
      title: "Nishiki Market Street Food Crawl",
      location: "Nakagyo Ward, Kyoto",
      category: "Food",
      estimatedCost: 30,
      notes: "Try tako tamago (baby octopus), matcha ice cream, and grilled wagyu skewers.",
      completed: false
    },
    {
      id: "itin-8",
      day: 4,
      time: "09:00",
      title: "Arashiyama Bamboo Grove & Tenryu-ji Garden",
      location: "Ukyo Ward, Kyoto",
      category: "Sightseeing",
      estimatedCost: 10,
      notes: "Take the Sagano Romantic Scenic Train if weather permits.",
      completed: false
    }
  ],
  points: [
    {
      id: "pt-1",
      title: "Fushimi Inari Taisha Shrine",
      category: "Sightseeing",
      priority: "High",
      location: "Kyoto, Fushimi Ward",
      notes: "Walk up to the Yotsutsuji intersection for a stunning city overlook.",
      completed: false
    },
    {
      id: "pt-2",
      title: "Nishiki Market Food Stalls",
      category: "Food",
      priority: "High",
      location: "Downtown Kyoto",
      notes: "Sample fresh seafood, matcha sweets, and traditional Japanese pickles.",
      completed: false
    },
    {
      id: "pt-3",
      title: "Akihabara Electric Town & Retro Arcades",
      category: "Activity",
      priority: "Medium",
      location: "Chiyoda City, Tokyo",
      notes: "Check out Super Potato for retro Nintendo games and gachapon.",
      completed: false
    },
    {
      id: "pt-4",
      title: "Shinjuku Gyoen National Garden",
      category: "Nature",
      priority: "Medium",
      location: "Shinjuku, Tokyo",
      notes: "Peaceful oasis with traditional Japanese, English and French garden sections.",
      completed: true
    },
    {
      id: "pt-5",
      title: "Ginza Itoya 12-Story Stationery Store",
      category: "Shopping",
      priority: "Low",
      location: "Ginza, Tokyo",
      notes: "Amazing fountain pens, washi papers, and travel journals.",
      completed: false
    }
  ],
  expenses: [
    {
      id: "exp-1",
      title: "Shinkansen Bullet Train Tokyo to Kyoto",
      amount: 195.00,
      category: "Transport",
      date: "2026-10-12",
      paymentMethod: "Card",
      notes: "Nozomi reserved seat tickets"
    },
    {
      id: "exp-2",
      title: "Hotel Gracery Shinjuku (2 nights)",
      amount: 360.00,
      category: "Stay",
      date: "2026-10-12",
      paymentMethod: "Card",
      notes: "City view room"
    },
    {
      id: "exp-3",
      title: "Shibuya Sky Sunset Entry Tickets",
      amount: 36.00,
      category: "Activities",
      date: "2026-10-12",
      paymentMethod: "Card",
      notes: "2 admission tickets"
    },
    {
      id: "exp-4",
      title: "Ichiran Ramen Shinjuku Dinner",
      amount: 28.50,
      category: "Food",
      date: "2026-10-12",
      paymentMethod: "Cash",
      notes: "Tonkotsu ramen + extra matcha pudding"
    },
    {
      id: "exp-5",
      title: "Suica IC Card Top-ups",
      amount: 40.00,
      category: "Transport",
      date: "2026-10-13",
      paymentMethod: "Cash",
      notes: "Subway and metro rides"
    },
    {
      id: "exp-6",
      title: "Asakusa Street Food & Snacks",
      amount: 22.00,
      category: "Food",
      date: "2026-10-13",
      paymentMethod: "Cash",
      notes: "Melonpan, dango, and iced hojicha"
    },
    {
      id: "exp-7",
      title: "Don Quijote Souvenirs & Skincare",
      amount: 115.00,
      category: "Shopping",
      date: "2026-10-13",
      paymentMethod: "Card",
      notes: "Matcha KitKats, sunscreen, and chopsticks"
    }
  ],
  packing: [
    { id: "pk-1", name: "Passports & Travel Insurance Documents", packed: true },
    { id: "pk-2", name: "Universal Travel Plug Adapters (Type A)", packed: true },
    { id: "pk-3", name: "Portable Power Bank (10,000mAh)", packed: true },
    { id: "pk-4", name: "Comfortable Walking Shoes / Sneakers", packed: true },
    { id: "pk-5", name: "eSIM / Pocket WiFi confirmation", packed: true },
    { id: "pk-6", name: "Prescription Medications & Band-aids", packed: false },
    { id: "pk-7", name: "Compact Umbrella / Rain Poncho", packed: false },
    { id: "pk-8", name: "Coin Purse for Japanese Yen coins", packed: true }
  ]
};

// Application State Manager
class TravelApp {
  constructor() {
    this.storageKey = "wandermate_travel_data_v1";
    this.themeKey = "wandermate_theme_v1";
    this.state = this.loadState();
    this.currentPointFilter = "all";
    this.currentItineraryDayFilter = "all";
    this.currentExpenseFilter = "all";

    this.initDOM();
    this.initTheme();
    this.bindEvents();
    this.render();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load from localStorage:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_TRIP));
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
    this.render();
  }

  initTheme() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      this.dom.themeIcon.textContent = "☀️";
    } else {
      document.body.classList.remove("light-theme");
      this.dom.themeIcon.textContent = "🌙";
    }
  }

  toggleTheme() {
    const isLight = document.body.classList.toggle("light-theme");
    this.dom.themeIcon.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem(this.themeKey, isLight ? "light" : "dark");
    this.showToast(isLight ? "Light mode enabled" : "Dark mode enabled");
  }

  initDOM() {
    this.dom = {
      // Header & Hero
      themeToggleBtn: document.getElementById("themeToggleBtn"),
      themeIcon: document.getElementById("themeIcon"),
      tripSettingsBtn: document.getElementById("tripSettingsBtn"),
      resetDataBtn: document.getElementById("resetDataBtn"),
      tripDatesBadge: document.getElementById("tripDatesBadge"),
      tripTitleDisplay: document.getElementById("tripTitleDisplay"),
      tripDestinationDisplay: document.getElementById("tripDestinationDisplay"),
      statsStopsProgress: document.getElementById("statsStopsProgress"),
      stopsProgressFill: document.getElementById("stopsProgressFill"),
      statsBudgetSpent: document.getElementById("statsBudgetSpent"),
      budgetProgressFill: document.getElementById("budgetProgressFill"),
      statsBudgetLimit: document.getElementById("statsBudgetLimit"),

      // Next Highlight Section
      nextHighlightSection: document.getElementById("nextHighlightSection"),
      nextPointTitle: document.getElementById("nextPointTitle"),
      nextPointTime: document.getElementById("nextPointTime"),
      nextPointLocation: document.getElementById("nextPointLocation"),
      nextPointDay: document.getElementById("nextPointDay"),
      nextPointNotes: document.getElementById("nextPointNotes"),
      nextMapLink: document.getElementById("nextMapLink"),
      markNextDoneBtn: document.getElementById("markNextDoneBtn"),

      // Tabs & Badges
      navTabs: document.querySelectorAll(".nav-tab"),
      tabPanels: document.querySelectorAll(".tab-panel"),
      itineraryCountBadge: document.getElementById("itineraryCountBadge"),
      pointsCountBadge: document.getElementById("pointsCountBadge"),
      expensesCountBadge: document.getElementById("expensesCountBadge"),

      // Itinerary Tab
      itineraryListContainer: document.getElementById("itineraryListContainer"),
      itineraryDayFilter: document.getElementById("itineraryDayFilter"),
      addItineraryBtn: document.getElementById("addItineraryBtn"),

      // Points Tab
      pointsGridContainer: document.getElementById("pointsGridContainer"),
      pointCategoryFilters: document.getElementById("pointCategoryFilters"),
      addPointBtn: document.getElementById("addPointBtn"),

      // Expense Tab
      expMetricTotalSpent: document.getElementById("expMetricTotalSpent"),
      expMetricRemaining: document.getElementById("expMetricRemaining"),
      expMetricDailyAvg: document.getElementById("expMetricDailyAvg"),
      activeCurrencyDisplay: document.getElementById("activeCurrencyDisplay"),
      categoryBarsContainer: document.getElementById("categoryBarsContainer"),
      expenseCategoryFilter: document.getElementById("expenseCategoryFilter"),
      expensesTableBody: document.getElementById("expensesTableBody"),
      addExpenseBtn: document.getElementById("addExpenseBtn"),

      // Packing Tab
      packingListContainer: document.getElementById("packingListContainer"),
      addPackingItemBtn: document.getElementById("addPackingItemBtn"),

      // Modals
      itineraryModal: document.getElementById("itineraryModal"),
      itineraryForm: document.getElementById("itineraryForm"),
      pointModal: document.getElementById("pointModal"),
      pointForm: document.getElementById("pointForm"),
      expenseModal: document.getElementById("expenseModal"),
      expenseForm: document.getElementById("expenseForm"),
      settingsModal: document.getElementById("settingsModal"),
      settingsForm: document.getElementById("settingsForm"),

      // Extras
      quickExportBtn: document.getElementById("quickExportBtn"),
      toastContainer: document.getElementById("toastContainer")
    };
  }

  bindEvents() {
    // Theme Switcher
    this.dom.themeToggleBtn.addEventListener("click", () => this.toggleTheme());

    // Reset Sample Data
    this.dom.resetDataBtn.addEventListener("click", () => {
      if (confirm("Reset to sample trip data? This will overwrite current changes.")) {
        this.state = JSON.parse(JSON.stringify(DEFAULT_TRIP));
        this.saveState();
        this.showToast("Reset to sample trip data successfully!");
      }
    });

    // Navigation Tabs
    this.dom.navTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-tab");
        this.switchTab(targetTab);
      });
    });

    // Modal Close buttons
    document.querySelectorAll("[data-close-modal]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const modalId = btn.getAttribute("data-close-modal");
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add("hidden");
      });
    });

    // Close modal when clicking on backdrop
    [this.dom.itineraryModal, this.dom.pointModal, this.dom.expenseModal, this.dom.settingsModal].forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
      });
    });

    // Open Modals
    this.dom.addItineraryBtn.addEventListener("click", () => this.openItineraryModal());
    this.dom.addPointBtn.addEventListener("click", () => this.openPointModal());
    this.dom.addExpenseBtn.addEventListener("click", () => this.openExpenseModal());
    this.dom.tripSettingsBtn.addEventListener("click", () => this.openSettingsModal());
    this.dom.addPackingItemBtn.addEventListener("click", () => this.promptAddPackingItem());

    // Next Stop Done Button in Highlight Banner
    this.dom.markNextDoneBtn.addEventListener("click", () => this.markNextStopComplete());

    // Form Submissions
    this.dom.itineraryForm.addEventListener("submit", (e) => this.handleItinerarySubmit(e));
    this.dom.pointForm.addEventListener("submit", (e) => this.handlePointSubmit(e));
    this.dom.expenseForm.addEventListener("submit", (e) => this.handleExpenseSubmit(e));
    this.dom.settingsForm.addEventListener("submit", (e) => this.handleSettingsSubmit(e));

    // Filters
    this.dom.itineraryDayFilter.addEventListener("change", (e) => {
      this.currentItineraryDayFilter = e.target.value;
      this.renderItinerary();
    });

    this.dom.expenseCategoryFilter.addEventListener("change", (e) => {
      this.currentExpenseFilter = e.target.value;
      this.renderExpensesTable();
    });

    this.dom.pointCategoryFilters.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-pill")) {
        this.dom.pointCategoryFilters.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
        e.target.classList.add("active");
        this.currentPointFilter = e.target.getAttribute("data-point-filter");
        this.renderPointsGrid();
      }
    });

    // Quick Export JSON
    this.dom.quickExportBtn.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `WanderMate_${this.state.settings.title.replace(/\s+/g, "_")}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      this.showToast("Trip data exported as JSON!");
    });
  }

  switchTab(tabName) {
    this.dom.navTabs.forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-tab") === tabName);
    });
    this.dom.tabPanels.forEach(p => {
      p.classList.toggle("active", p.id === `panel${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    });
  }

  showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    this.dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Next Stop Calculation
  getNextPointToCover() {
    // 1. Look in itinerary first for uncompleted stop
    const nextItin = this.state.itinerary.find(item => !item.completed);
    if (nextItin) {
      return {
        type: "itinerary",
        id: nextItin.id,
        title: nextItin.title,
        location: nextItin.location || "Location not specified",
        time: nextItin.time ? `Day ${nextItin.day}, ${nextItin.time}` : `Day ${nextItin.day}`,
        day: `Day ${nextItin.day}`,
        notes: nextItin.notes || "No extra notes provided."
      };
    }

    // 2. If all itinerary stops are done, look at next points bucket list
    const nextPt = this.state.points.find(p => !p.completed);
    if (nextPt) {
      return {
        type: "point",
        id: nextPt.id,
        title: nextPt.title,
        location: nextPt.location || "City spot",
        time: `Priority: ${nextPt.priority}`,
        day: nextPt.category,
        notes: nextPt.notes || "Must-visit recommendation."
      };
    }

    return null;
  }

  markNextStopComplete() {
    const next = this.getNextPointToCover();
    if (!next) return;

    if (next.type === "itinerary") {
      const item = this.state.itinerary.find(i => i.id === next.id);
      if (item) {
        item.completed = true;
        this.saveState();
        this.showToast(`Checked off "${item.title}"! 🎉`);
      }
    } else if (next.type === "point") {
      const item = this.state.points.find(p => p.id === next.id);
      if (item) {
        item.completed = true;
        this.saveState();
        this.showToast(`Visited "${item.title}"! 🎉`);
      }
    }
  }

  // Formatting helpers
  formatCurrency(amount) {
    const curr = this.state.settings.currency || "$";
    return `${curr}${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  formatDate(dateStr) {
    if (!dateStr) return "";
    try {
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      }
    } catch (e) { }
    return dateStr;
  }

  // Global Render
  render() {
    this.renderHeaderAndHero();
    this.renderNextHighlight();
    this.renderItinerary();
    this.renderPointsGrid();
    this.renderExpenses();
    this.renderPackingList();
    this.updateBadges();
  }

  updateBadges() {
    const pendingItin = this.state.itinerary.filter(i => !i.completed).length;
    this.dom.itineraryCountBadge.textContent = pendingItin;

    const pendingPoints = this.state.points.filter(p => !p.completed).length;
    this.dom.pointsCountBadge.textContent = pendingPoints;

    this.dom.expensesCountBadge.textContent = this.state.expenses.length;
  }

  renderHeaderAndHero() {
    const { settings, itinerary, expenses } = this.state;

    // Dates
    let datesText = "Flexible Dates";
    if (settings.startDate && settings.endDate) {
      datesText = `${this.formatDate(settings.startDate)} – ${this.formatDate(settings.endDate)}`;
    } else if (settings.startDate) {
      datesText = `Starts ${this.formatDate(settings.startDate)}`;
    }
    this.dom.tripDatesBadge.textContent = datesText;
    this.dom.tripTitleDisplay.textContent = settings.title || "My Adventure";
    this.dom.tripDestinationDisplay.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      <span>${settings.destination || "Worldwide"}</span>
    `;

    // Stops Progress
    const totalStops = itinerary.length;
    const completedStops = itinerary.filter(i => i.completed).length;
    this.dom.statsStopsProgress.textContent = `${completedStops} / ${totalStops}`;
    const stopPercentage = totalStops > 0 ? (completedStops / totalStops) * 100 : 0;
    this.dom.stopsProgressFill.style.width = `${stopPercentage}%`;

    // Budget Progress
    const totalSpent = expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const budget = Number(settings.budget) || 1;
    const budgetPct = Math.min((totalSpent / budget) * 100, 100);

    this.dom.statsBudgetSpent.textContent = this.formatCurrency(totalSpent);
    this.dom.statsBudgetLimit.textContent = `of ${this.formatCurrency(budget)} budget`;
    this.dom.budgetProgressFill.style.width = `${budgetPct}%`;

    if (totalSpent > budget) {
      this.dom.budgetProgressFill.classList.add("over-budget");
    } else {
      this.dom.budgetProgressFill.classList.remove("over-budget");
    }
  }

  renderNextHighlight() {
    const next = this.getNextPointToCover();

    if (!next) {
      this.dom.nextHighlightSection.innerHTML = `
        <div class="next-highlight-card" style="text-align: center; border-color: rgba(16, 185, 129, 0.4);">
          <div class="next-badge" style="color: #34d399; justify-content: center;">
            <span>🎉</span> ALL DESTINATIONS & STOPS COMPLETED!
          </div>
          <p class="next-notes" style="font-size: 0.95rem; color: #fff;">
            You have checked off every scheduled itinerary stop and bucket list destination. Add more places to keep exploring!
          </p>
        </div>
      `;
      return;
    }

    // Maps link
    const query = encodeURIComponent(`${next.title} ${next.location}`);
    const mapsUrl = `https://maps.google.com/?q=${query}`;

    this.dom.nextHighlightSection.innerHTML = `
      <div class="next-highlight-card">
        <div class="next-badge">
          <span class="pulsing-dot"></span> NEXT DESTINATION TO COVER
        </div>
        <div class="next-card-content">
          <div class="next-card-info">
            <h3 id="nextPointTitle" class="next-title">${this.escapeHTML(next.title)}</h3>
            <div class="next-meta-tags">
              <span id="nextPointTime" class="tag-meta time-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ${this.escapeHTML(next.time)}
              </span>
              <span id="nextPointLocation" class="tag-meta location-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${this.escapeHTML(next.location)}
              </span>
              <span id="nextPointDay" class="tag-meta day-tag">${this.escapeHTML(next.day)}</span>
            </div>
            <p id="nextPointNotes" class="next-notes">${this.escapeHTML(next.notes)}</p>
          </div>
          <div class="next-card-actions">
            <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" id="nextPointMapBtn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
              <span>Open Maps</span>
            </a>
            <button id="markNextDoneBtn" class="btn btn-primary btn-sm">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Mark as Visited</span>
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("markNextDoneBtn").addEventListener("click", () => this.markNextStopComplete());
  }

  // ITINERARY TAB
  renderItinerary() {
    // Populate Day filter options
    const days = [...new Set(this.state.itinerary.map(i => Number(i.day) || 1))].sort((a, b) => a - b);
    let selectHTML = `<option value="all">All Days</option>`;
    days.forEach(d => {
      selectHTML += `<option value="${d}" ${this.currentItineraryDayFilter === String(d) ? "selected" : ""}>Day ${d}</option>`;
    });
    this.dom.itineraryDayFilter.innerHTML = selectHTML;

    // Filter items
    let items = [...this.state.itinerary];
    if (this.currentItineraryDayFilter !== "all") {
      items = items.filter(i => String(i.day) === this.currentItineraryDayFilter);
    }

    if (items.length === 0) {
      this.dom.itineraryListContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🗺️</div>
          <p class="empty-state-text">No itinerary stops found</p>
          <p class="empty-state-sub">Click "+ Add Itinerary Stop" above to start building your day plan!</p>
        </div>
      `;
      return;
    }

    // Sort items by Day, then by Time
    items.sort((a, b) => {
      if (a.day !== b.day) return a.day - b.day;
      return (a.time || "00:00").localeCompare(b.time || "00:00");
    });

    // Group by Day
    const grouped = {};
    items.forEach(item => {
      const d = item.day || 1;
      if (!grouped[d]) grouped[d] = [];
      grouped[d].push(item);
    });

    let containerHTML = "";
    Object.keys(grouped).sort((a, b) => Number(a) - Number(b)).forEach(dayKey => {
      const dayStops = grouped[dayKey];
      const completedCount = dayStops.filter(s => s.completed).length;

      containerHTML += `
        <div class="itinerary-day-group">
          <div class="day-group-header">
            <div class="day-badge-title">
              <span class="day-number-badge">Day ${dayKey}</span>
              <h3 class="day-title">Schedule & Stops</h3>
            </div>
            <span class="day-summary-count">${completedCount} of ${dayStops.length} done</span>
          </div>
          <div class="timeline-items-list">
            ${dayStops.map(stop => this.renderItineraryItem(stop)).join("")}
          </div>
        </div>
      `;
    });

    this.dom.itineraryListContainer.innerHTML = containerHTML;
    this.bindItineraryItemEvents();
  }

  renderItineraryItem(stop) {
    const isCompleted = stop.completed ? "is-completed" : "";
    const mapQuery = encodeURIComponent(`${stop.title} ${stop.location || ""}`);

    return `
      <div class="itinerary-item-card ${isCompleted}" data-itin-id="${stop.id}">
        <div class="item-checkbox-wrapper" title="${stop.completed ? "Mark pending" : "Mark visited"}">
          <div class="custom-checkbox">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>

        <div class="item-main-details">
          <div class="item-title-row">
            ${stop.time ? `<span class="item-time-pill">${stop.time}</span>` : ""}
            <h4 class="item-name">${this.escapeHTML(stop.title)}</h4>
            ${stop.category ? `<span class="category-tag">${this.escapeHTML(stop.category)}</span>` : ""}
          </div>
          <div class="item-meta-row">
            ${stop.location ? `
              <span class="item-location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${this.escapeHTML(stop.location)}
              </span>
            ` : ""}
            ${stop.estimatedCost ? `
              <span class="item-cost">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Est: ${this.formatCurrency(stop.estimatedCost)}
              </span>
            ` : ""}
          </div>
          ${stop.notes ? `<p class="item-notes">${this.escapeHTML(stop.notes)}</p>` : ""}
        </div>

        <div class="item-action-btns">
          <a href="https://maps.google.com/?q=${mapQuery}" target="_blank" rel="noopener" class="btn-icon-action" title="Open in Maps">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
          </a>
          <button class="btn-icon-action edit-itin-btn" title="Edit Stop">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-icon-action delete-action delete-itin-btn" title="Delete Stop">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }

  bindItineraryItemEvents() {
    this.dom.itineraryListContainer.querySelectorAll(".itinerary-item-card").forEach(card => {
      const id = card.getAttribute("data-itin-id");
      const checkbox = card.querySelector(".item-checkbox-wrapper");
      const editBtn = card.querySelector(".edit-itin-btn");
      const deleteBtn = card.querySelector(".delete-itin-btn");

      checkbox.addEventListener("click", () => {
        const item = this.state.itinerary.find(i => i.id === id);
        if (item) {
          item.completed = !item.completed;
          this.saveState();
          this.showToast(item.completed ? `Completed "${item.title}"! 🎉` : `Marked "${item.title}" as pending`);
        }
      });

      editBtn.addEventListener("click", () => {
        const item = this.state.itinerary.find(i => i.id === id);
        if (item) this.openItineraryModal(item);
      });

      deleteBtn.addEventListener("click", () => {
        const item = this.state.itinerary.find(i => i.id === id);
        if (item && confirm(`Delete "${item.title}" from itinerary?`)) {
          this.state.itinerary = this.state.itinerary.filter(i => i.id !== id);
          this.saveState();
          this.showToast("Itinerary stop removed");
        }
      });
    });
  }

  // POINTS TO COVER TAB (Bucket List)
  renderPointsGrid() {
    let list = [...this.state.points];

    // Filter
    if (this.currentPointFilter === "pending") {
      list = list.filter(p => !p.completed);
    } else if (this.currentPointFilter === "completed") {
      list = list.filter(p => p.completed);
    } else if (this.currentPointFilter !== "all") {
      list = list.filter(p => p.category === this.currentPointFilter);
    }

    if (list.length === 0) {
      this.dom.pointsGridContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">📍</div>
          <p class="empty-state-text">No points to cover in this filter</p>
          <p class="empty-state-sub">Add must-visit spots, viewpoints, and food places using "+ Add Point" above.</p>
        </div>
      `;
      return;
    }

    this.dom.pointsGridContainer.innerHTML = list.map(pt => {
      const isVisited = pt.completed ? "is-visited" : "";
      const mapQuery = encodeURIComponent(`${pt.title} ${pt.location || ""}`);

      return `
        <div class="point-card ${isVisited}" data-point-id="${pt.id}">
          <div class="point-card-top">
            <div>
              <h4 class="point-title">${this.escapeHTML(pt.title)}</h4>
              <span class="category-tag" style="margin-top: 0.35rem; display: inline-block;">${this.escapeHTML(pt.category || "Sight")}</span>
            </div>
            <span class="priority-badge priority-${pt.priority || "Medium"}">${pt.priority || "Medium"}</span>
          </div>

          <div class="point-card-body">
            ${pt.location ? `
              <div class="item-location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${this.escapeHTML(pt.location)}</span>
              </div>
            ` : ""}
            ${pt.notes ? `<p class="point-notes-text">${this.escapeHTML(pt.notes)}</p>` : ""}
          </div>

          <div class="point-card-footer">
            <button class="point-toggle-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${pt.completed ? "Visited" : "Mark Visited"}</span>
            </button>
            <div class="item-action-btns">
              <a href="https://maps.google.com/?q=${mapQuery}" target="_blank" rel="noopener" class="btn-icon-action" title="Open Map">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
              </a>
              <button class="btn-icon-action edit-point-btn" title="Edit Point">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
              <button class="btn-icon-action delete-action delete-point-btn" title="Delete Point">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    this.bindPointItemEvents();
  }

  bindPointItemEvents() {
    this.dom.pointsGridContainer.querySelectorAll(".point-card").forEach(card => {
      const id = card.getAttribute("data-point-id");
      const toggleBtn = card.querySelector(".point-toggle-btn");
      const editBtn = card.querySelector(".edit-point-btn");
      const deleteBtn = card.querySelector(".delete-point-btn");

      toggleBtn.addEventListener("click", () => {
        const item = this.state.points.find(p => p.id === id);
        if (item) {
          item.completed = !item.completed;
          this.saveState();
          this.showToast(item.completed ? `Visited "${item.title}"! 🎉` : `Set "${item.title}" to pending`);
        }
      });

      editBtn.addEventListener("click", () => {
        const item = this.state.points.find(p => p.id === id);
        if (item) this.openPointModal(item);
      });

      deleteBtn.addEventListener("click", () => {
        const item = this.state.points.find(p => p.id === id);
        if (item && confirm(`Delete "${item.title}"?`)) {
          this.state.points = this.state.points.filter(p => p.id !== id);
          this.saveState();
          this.showToast("Destination point removed");
        }
      });
    });
  }

  // EXPENSE LOGGER TAB
  renderExpenses() {
    const { settings, expenses } = this.state;
    const currency = settings.currency || "$";
    this.dom.activeCurrencyDisplay.textContent = `Currency: ${currency}`;

    const totalSpent = expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const budget = Number(settings.budget) || 0;
    const remaining = budget - totalSpent;

    // Calculate trip duration days for daily average
    let durationDays = 1;
    if (settings.startDate && settings.endDate) {
      const d1 = new Date(settings.startDate);
      const d2 = new Date(settings.endDate);
      const diffTime = Math.abs(d2 - d1);
      durationDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1, 1);
    }
    const dailyAvg = totalSpent / durationDays;

    this.dom.expMetricTotalSpent.textContent = this.formatCurrency(totalSpent);
    this.dom.expMetricRemaining.textContent = this.formatCurrency(remaining);
    this.dom.expMetricRemaining.style.color = remaining < 0 ? "#ef4444" : "#10b981";
    this.dom.expMetricDailyAvg.textContent = `${this.formatCurrency(dailyAvg)} / day`;

    // Render Category Breakdown Bars
    const categories = [
      { key: "Food", name: "Food & Dining", icon: "🍜", color: "#f97316" },
      { key: "Stay", name: "Accommodation", icon: "🏨", color: "#8b5cf6" },
      { key: "Transport", name: "Transport", icon: "🚆", color: "#06b6d4" },
      { key: "Activities", name: "Tickets & Tours", icon: "🎟️", color: "#ec4899" },
      { key: "Shopping", name: "Shopping", icon: "🛍️", color: "#eab308" },
      { key: "Misc", name: "Other / Misc", icon: "📦", color: "#64748b" }
    ];

    let categoryBarsHTML = "";
    categories.forEach(cat => {
      const catTotal = expenses
        .filter(e => e.category === cat.key)
        .reduce((sum, e) => sum + Number(e.amount || 0), 0);
      const catPct = totalSpent > 0 ? ((catTotal / totalSpent) * 100).toFixed(1) : 0;

      categoryBarsHTML += `
        <div class="category-bar-item">
          <div class="category-bar-header">
            <span class="category-bar-name"><span>${cat.icon}</span> ${cat.name}</span>
            <span><strong>${this.formatCurrency(catTotal)}</strong> (${catPct}%)</span>
          </div>
          <div class="category-bar-track">
            <div class="category-bar-fill" style="width: ${catPct}%; background: ${cat.color};"></div>
          </div>
        </div>
      `;
    });
    this.dom.categoryBarsContainer.innerHTML = categoryBarsHTML;

    // Render table
    this.renderExpensesTable();
  }

  renderExpensesTable() {
    let list = [...this.state.expenses];

    if (this.currentExpenseFilter !== "all") {
      list = list.filter(e => e.category === this.currentExpenseFilter);
    }

    // Sort newest date first
    list.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    if (list.length === 0) {
      this.dom.expensesTableBody.innerHTML = `
        <tr>
          <td colspan="6" class="text-center" style="text-align: center; padding: 2rem; color: var(--text-dim);">
            No expenses logged in this view. Click "+ Log Expense" to add your receipts!
          </td>
        </tr>
      `;
      return;
    }

    this.dom.expensesTableBody.innerHTML = list.map(item => `
      <tr data-expense-id="${item.id}">
        <td>
          <strong>${this.escapeHTML(item.title)}</strong>
          ${item.notes ? `<div style="font-size: 0.76rem; color: var(--text-dim);">${this.escapeHTML(item.notes)}</div>` : ""}
        </td>
        <td><span class="category-tag">${this.escapeHTML(item.category)}</span></td>
        <td>${this.formatDate(item.date)}</td>
        <td>${this.escapeHTML(item.paymentMethod || "Card")}</td>
        <td class="text-right"><span class="expense-amount-val">${this.formatCurrency(item.amount)}</span></td>
        <td class="text-right">
          <button class="btn-icon-action delete-action delete-expense-btn" title="Delete Expense">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </td>
      </tr>
    `).join("");

    this.dom.expensesTableBody.querySelectorAll(".delete-expense-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const row = e.target.closest("tr");
        const id = row.getAttribute("data-expense-id");
        const exp = this.state.expenses.find(x => x.id === id);
        if (exp && confirm(`Delete "${exp.title}" (${this.formatCurrency(exp.amount)})?`)) {
          this.state.expenses = this.state.expenses.filter(x => x.id !== id);
          this.saveState();
          this.showToast("Expense removed");
        }
      });
    });
  }

  // PACKING TAB
  renderPackingList() {
    if (!this.state.packing || this.state.packing.length === 0) {
      this.dom.packingListContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">🎒</div>
          <p class="empty-state-text">No packing items yet</p>
          <p class="empty-state-sub">Add clothes, chargers, passports, and medicines using "+ Add Checklist Item".</p>
        </div>
      `;
      return;
    }

    this.dom.packingListContainer.innerHTML = this.state.packing.map(item => `
      <div class="packing-card ${item.packed ? "is-packed" : ""}" data-pack-id="${item.id}">
        <div class="packing-left">
          <div class="custom-checkbox">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <span class="packing-name">${this.escapeHTML(item.name)}</span>
        </div>
        <button class="btn-icon-action delete-action delete-pack-btn" title="Remove Item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    `).join("");

    this.dom.packingListContainer.querySelectorAll(".packing-card").forEach(card => {
      const id = card.getAttribute("data-pack-id");
      const left = card.querySelector(".packing-left");
      const delBtn = card.querySelector(".delete-pack-btn");

      left.addEventListener("click", () => {
        const item = this.state.packing.find(p => p.id === id);
        if (item) {
          item.packed = !item.packed;
          this.saveState();
        }
      });

      delBtn.addEventListener("click", () => {
        this.state.packing = this.state.packing.filter(p => p.id !== id);
        this.saveState();
      });
    });
  }

  promptAddPackingItem() {
    const name = prompt("Enter packing or essential item name (e.g. Passport, Power bank, Rain jacket):");
    if (name && name.trim()) {
      this.state.packing.push({
        id: "pk-" + Date.now(),
        name: name.trim(),
        packed: false
      });
      this.saveState();
      this.showToast(`Added "${name.trim()}" to packing checklist!`);
    }
  }

  // MODAL HANDLERS
  openItineraryModal(item = null) {
    const isEdit = !!item;
    document.getElementById("itineraryModalTitle").textContent = isEdit ? "Edit Itinerary Stop" : "Add Itinerary Stop";
    document.getElementById("itinId").value = isEdit ? item.id : "";
    document.getElementById("itinTitle").value = isEdit ? item.title : "";
    document.getElementById("itinDay").value = isEdit ? item.day : "1";
    document.getElementById("itinTime").value = isEdit ? (item.time || "09:00") : "09:00";
    document.getElementById("itinLocation").value = isEdit ? (item.location || "") : "";
    document.getElementById("itinCategory").value = isEdit ? (item.category || "Sightseeing") : "Sightseeing";
    document.getElementById("itinEstimatedCost").value = isEdit && item.estimatedCost ? item.estimatedCost : "";
    document.getElementById("itinNotes").value = isEdit ? (item.notes || "") : "";

    this.dom.itineraryModal.classList.remove("hidden");
    document.getElementById("itinTitle").focus();
  }

  handleItinerarySubmit(e) {
    e.preventDefault();
    const id = document.getElementById("itinId").value;
    const title = document.getElementById("itinTitle").value.trim();
    const day = parseInt(document.getElementById("itinDay").value, 10) || 1;
    const time = document.getElementById("itinTime").value;
    const location = document.getElementById("itinLocation").value.trim();
    const category = document.getElementById("itinCategory").value;
    const estimatedCost = parseFloat(document.getElementById("itinEstimatedCost").value) || 0;
    const notes = document.getElementById("itinNotes").value.trim();

    if (id) {
      const item = this.state.itinerary.find(i => i.id === id);
      if (item) {
        Object.assign(item, { title, day, time, location, category, estimatedCost, notes });
        this.showToast(`Updated "${title}"!`);
      }
    } else {
      this.state.itinerary.push({
        id: "itin-" + Date.now(),
        title,
        day,
        time,
        location,
        category,
        estimatedCost,
        notes,
        completed: false
      });
      this.showToast(`Added "${title}" to Day ${day}!`);
    }

    this.saveState();
    this.dom.itineraryModal.classList.add("hidden");
  }

  openPointModal(item = null) {
    const isEdit = !!item;
    document.getElementById("pointModalTitle").textContent = isEdit ? "Edit Point to Cover" : "Add Point to Cover";
    document.getElementById("pointId").value = isEdit ? item.id : "";
    document.getElementById("pointTitle").value = isEdit ? item.title : "";
    document.getElementById("pointCategory").value = isEdit ? (item.category || "Sightseeing") : "Sightseeing";
    document.getElementById("pointPriority").value = isEdit ? (item.priority || "Medium") : "Medium";
    document.getElementById("pointLocation").value = isEdit ? (item.location || "") : "";
    document.getElementById("pointNotes").value = isEdit ? (item.notes || "") : "";

    this.dom.pointModal.classList.remove("hidden");
    document.getElementById("pointTitle").focus();
  }

  handlePointSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("pointId").value;
    const title = document.getElementById("pointTitle").value.trim();
    const category = document.getElementById("pointCategory").value;
    const priority = document.getElementById("pointPriority").value;
    const location = document.getElementById("pointLocation").value.trim();
    const notes = document.getElementById("pointNotes").value.trim();

    if (id) {
      const item = this.state.points.find(p => p.id === id);
      if (item) {
        Object.assign(item, { title, category, priority, location, notes });
        this.showToast(`Updated "${title}"!`);
      }
    } else {
      this.state.points.push({
        id: "pt-" + Date.now(),
        title,
        category,
        priority,
        location,
        notes,
        completed: false
      });
      this.showToast(`Added "${title}" to points to cover!`);
    }

    this.saveState();
    this.dom.pointModal.classList.add("hidden");
  }

  openExpenseModal() {
    this.dom.expenseForm.reset();
    document.getElementById("expenseId").value = "";
    document.getElementById("expenseDate").value = new Date().toISOString().split("T")[0];
    this.dom.expenseModal.classList.remove("hidden");
    document.getElementById("expenseTitle").focus();
  }

  handleExpenseSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("expenseTitle").value.trim();
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    const category = document.getElementById("expenseCategory").value;
    const date = document.getElementById("expenseDate").value;
    const paymentMethod = document.getElementById("expensePayment").value;
    const notes = document.getElementById("expenseNotes").value.trim();

    if (!title || isNaN(amount) || amount <= 0) return;

    this.state.expenses.push({
      id: "exp-" + Date.now(),
      title,
      amount,
      category,
      date,
      paymentMethod,
      notes
    });

    this.saveState();
    this.dom.expenseModal.classList.add("hidden");
    this.showToast(`Logged expense "${title}" (${this.formatCurrency(amount)})`);
  }

  openSettingsModal() {
    const s = this.state.settings;
    document.getElementById("tripTitleInput").value = s.title || "";
    document.getElementById("tripDestInput").value = s.destination || "";
    document.getElementById("tripStartDate").value = s.startDate || "";
    document.getElementById("tripEndDate").value = s.endDate || "";
    document.getElementById("tripBudgetInput").value = s.budget || 1000;
    document.getElementById("tripCurrencySelect").value = s.currency || "$";

    this.dom.settingsModal.classList.remove("hidden");
  }

  handleSettingsSubmit(e) {
    e.preventDefault();
    this.state.settings = {
      title: document.getElementById("tripTitleInput").value.trim() || "My Journey",
      destination: document.getElementById("tripDestInput").value.trim() || "Worldwide",
      startDate: document.getElementById("tripStartDate").value,
      endDate: document.getElementById("tripEndDate").value,
      budget: parseFloat(document.getElementById("tripBudgetInput").value) || 0,
      currency: document.getElementById("tripCurrencySelect").value
    };

    this.saveState();
    this.dom.settingsModal.classList.add("hidden");
    this.showToast("Trip details updated successfully!");
  }

  escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Bootstrap Application on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  window.travelApp = new TravelApp();
});
