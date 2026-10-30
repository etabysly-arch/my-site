const profileSelect = document.getElementById('profileSelect');
const profileMenu = document.getElementById('profileMenu');
profileSelect.addEventListener('click', () => profileMenu.classList.toggle('open'));

document.getElementById('logoutButton').addEventListener('click', () => {
  showToast('Demo page: logout is not connected.');
});

const menu = document.getElementById('sideMenu');
document.getElementById('menuToggle').addEventListener('click', () => menu.classList.add('open'));
document.getElementById('closeMenu').addEventListener('click', () => menu.classList.remove('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

document.querySelectorAll('.category-heading').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.closest('.category');
    category.classList.toggle('collapsed');
    button.setAttribute('aria-expanded', String(!category.classList.contains('collapsed')));
  });
});

const makePanel = document.getElementById('makePanel');
const historyPanel = document.getElementById('historyPanel');
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const history = tab.dataset.tab === 'history';
    makePanel.hidden = history;
    historyPanel.hidden = !history;
  });
});

const dialog = document.getElementById('serviceDialog');
document.querySelectorAll('.service').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('dialogTitle').textContent = button.dataset.service;
    document.getElementById('amount').value = '';
    dialog.showModal();
  });
});
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
document.getElementById('confirmPayment').addEventListener('click', () => {
  dialog.close();
  showToast('Demo only — no payment has been made.');
});
document.querySelectorAll('[data-info]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showToast(link.dataset.info);
  });
});

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
