const dailyInput = document.getElementById('dailyAmount');
const daysValue = document.getElementById('daysValue');
const savedValue = document.getElementById('savedValue');
const panicButton = document.getElementById('panicButton');
const panicModal = document.getElementById('panicModal');
const closePanic = document.getElementById('closePanic');

function updateSavings() {
  const daily = Number(dailyInput.value || 0);
  const days = 30;
  const saved = daily * days;
  daysValue.textContent = days;
  savedValue.textContent = `KSh ${saved.toLocaleString('en-KE')}`;
}

function togglePanicModal(show) {
  panicModal.classList.toggle('hidden', !show);
}

if (dailyInput) {
  dailyInput.addEventListener('input', updateSavings);
  updateSavings();
}

if (panicButton) {
  panicButton.addEventListener('click', () => togglePanicModal(true));
}

if (closePanic) {
  closePanic.addEventListener('click', () => togglePanicModal(false));
}

if (panicModal) {
  panicModal.addEventListener('click', (event) => {
    if (event.target === panicModal) {
      togglePanicModal(false);
    }
  });
}
