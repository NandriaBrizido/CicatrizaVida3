
document.addEventListener('DOMContentLoaded', function(){
  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');
  const form = document.getElementById('cadastroForm');

  function maskCPF(v){ v = v.replace(/\D/g,'').slice(0,11); v = v.replace(/(\d{3})(\d)/,'$1.$2'); v = v.replace(/(\d{3})(\d)/,'$1.$2'); v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2'); return v; }
  function maskTel(v){ v = v.replace(/\D/g,'').slice(0,11); if(v.length > 10){ v = v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3'); } else { v = v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3'); } return v; }
  function maskCEP(v){ v = v.replace(/\D/g,'').slice(0,8); v = v.replace(/(\d{5})(\d{1,3})/,'$1-$2'); return v; }

  if(cpfInput){ cpfInput.addEventListener('input', e=>{ e.target.value = maskCPF(e.target.value); }); cpfInput.addEventListener('blur', e=>{ if(e.target.value && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(e.target.value)){ e.target.setCustomValidity('CPF em formato inválido.'); } else { e.target.setCustomValidity(''); } }); }
  if(telInput){ telInput.addEventListener('input', e=>{ e.target.value = maskTel(e.target.value); }); }
  if(cepInput){ cepInput.addEventListener('input', e=>{ e.target.value = maskCEP(e.target.value); }); cepInput.addEventListener('blur', e=>{ if(e.target.value && !/^\d{5}-\d{3}$/.test(e.target.value)){ e.target.setCustomValidity('CEP em formato inválido.'); } else { e.target.setCustomValidity(''); } }); }

  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        form.reportValidity();
      } else {
        e.preventDefault();
        alert('Cadastro recebido. Em ambiente real, os dados seriam enviados ao servidor.');
      }
    });
  }
});

(function(){
  const nav = document.getElementById('navbar');
  const btnMenu = document.getElementById('btnMenu');
  if (btnMenu && nav) {
    btnMenu.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  const toggle = document.getElementById('toggleTheme');
  const root = document.documentElement;
  if (toggle) {

    const saved = localStorage.getItem('theme');
    if (saved === 'dark') root.setAttribute('data-theme','dark');
    toggle.setAttribute('aria-pressed', saved === 'dark' ? 'true' : 'false');
    toggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme','light');
        toggle.setAttribute('aria-pressed','false');
      } else {
        root.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        toggle.setAttribute('aria-pressed','true');
      }
      showToast('Tema atualizado.');
    });
  }

  window.showToast = function(msg, timeout=2200){
    const t = document.getElementById('globalToast');
    if(!t) return;
    t.textContent = msg; t.classList.add('show');
    setTimeout(()=> t.classList.remove('show'), timeout);
  }

  const backdrop = document.getElementById('globalModal');
  const btnClose = document.getElementById('modalClose');
  const btnOk = document.getElementById('modalOk');
  if (backdrop && btnClose && btnOk) {
    btnClose.addEventListener('click', () => backdrop.classList.remove('open'));
    btnOk.addEventListener('click', () => backdrop.classList.remove('open'));
  }
  window.openModal = function(title, body){
    const el = document.getElementById('globalModal');
    if(!el) return;
    document.getElementById('modalTitle').textContent = title || 'Aviso';
    document.getElementById('modalBody').textContent = body || '';
    el.classList.add('open');
  }

  document.addEventListener('submit', (e) => {
    const form = e.target.closest('form');
    if (!form) return;
    if (!form.checkValidity()) {
      e.preventDefault();
      showToast('Verifique os campos destacados.');
    }
  }, true);
})();
