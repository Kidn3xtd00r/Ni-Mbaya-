const STORAGE_KEYS = {
  dailyAmount: 'niMbaya.dailyAmount',
};

const ui = {
  dailyInput: document.getElementById('dailyAmount'),
  daysValue: document.getElementById('daysValue'),
  savedValue: document.getElementById('savedValue'),
  panicButton: document.getElementById('panicButton'),
  panicModal: document.getElementById('panicModal'),
  closePanic: document.getElementById('closePanic'),
  navToggle: document.querySelector('.nav-toggle'),
  navLinks: document.querySelector('.nav-links'),
  heroCta: document.querySelector('.btn-primary'),
  maleboWidget: document.getElementById('maleboWidget'),
  maleboTitle: document.querySelector('.malebo-title'),
  maleboMessage: document.querySelector('.malebo-message'),
};

const maleboStates = {
  calm: {
    label: 'Calm Coach',
    message: 'Slow and steady. Keep the streak clean.',
  },
  motivator: {
    label: 'Motivator',
    message: 'This one is yours. Keep stacking days.',
  },
  pressure: {
    label: 'Pressure Friend',
    message: 'You know how this ends. Stay sharp.',
  },
  chaos: {
    label: 'Chaos Temptation',
    message: 'Mbaya is loud. You are louder.',
  },
};

let maleboTimer = null;

function saveDailyAmount(value) {
  try {
    localStorage.setItem(STORAGE_KEYS.dailyAmount, String(value));
  } catch {
    // ignore storage failures
  }
}

function loadDailyAmount() {
  if (!ui.dailyInput) return;
  const stored = localStorage.getItem(STORAGE_KEYS.dailyAmount);
  if (stored !== null && !Number.isNaN(Number(stored))) {
    ui.dailyInput.value = stored;
  }
}

function updateSavings() {
  if (!ui.dailyInput) return;
  const daily = Number(ui.dailyInput.value || 0);
  const days = 30;
  const saved = daily * days;

  if (ui.daysValue) {
    ui.daysValue.textContent = days;
  }

  if (ui.savedValue) {
    ui.savedValue.textContent = `KSh ${saved.toLocaleString('en-KE')}`;
  }

  saveDailyAmount(daily);

  if (saved >= 12000) {
    setMaleboState('motivator');
  } else {
    setMaleboState('calm');
  }
}

function setMaleboState(key) {
  const state = maleboStates[key] || maleboStates.calm;
  if (!ui.maleboWidget || !ui.maleboTitle || !ui.maleboMessage) return;

  ui.maleboTitle.textContent = state.label;
  ui.maleboMessage.textContent = state.message;
  ui.maleboWidget.classList.remove('hidden');
  ui.maleboWidget.classList.add('show');

  if (maleboTimer) {
    window.clearTimeout(maleboTimer);
  }

  maleboTimer = window.setTimeout(() => {
    ui.maleboWidget.classList.add('hidden');
    ui.maleboWidget.classList.remove('show');
  }, 4200);
}

function toggleNav() {
  if (!ui.navToggle || !ui.navLinks) return;

  const isOpen = ui.navLinks.classList.toggle('open');
  ui.navToggle.classList.toggle('open', isOpen);
  ui.navToggle.setAttribute('aria-expanded', String(isOpen));
  ui.navLinks.setAttribute('aria-hidden', String(!isOpen));

  if (isOpen) {
    setMaleboState('chaos');
  }
}

function togglePanicModal(show) {
  if (!ui.panicModal) return;
  ui.panicModal.classList.toggle('hidden', !show);
  if (show) {
    setMaleboState('pressure');
  }
}

function attachEvents() {
  if (ui.dailyInput) {
    ui.dailyInput.addEventListener('input', updateSavings);
  }

  if (ui.heroCta) {
    ui.heroCta.addEventListener('click', () => setMaleboState('motivator'));
  }

  if (ui.panicButton) {
    ui.panicButton.addEventListener('click', () => togglePanicModal(true));
  }

  if (ui.closePanic) {
    ui.closePanic.addEventListener('click', () => togglePanicModal(false));
  }

  if (ui.panicModal) {
    ui.panicModal.addEventListener('click', (event) => {
      if (event.target === ui.panicModal) {
        togglePanicModal(false);
      }
    });
  }

  if (ui.navToggle && ui.navLinks) {
    ui.navToggle.addEventListener('click', toggleNav);
  }
}

function initApp() {
  loadDailyAmount();
  updateSavings();
  attachEvents();
  setMaleboState('calm');
}

document.addEventListener('DOMContentLoaded', initApp);
