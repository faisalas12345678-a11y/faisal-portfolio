function showDash(id) {
          ['ceo', 'manager', 'analytical'].forEach(function (d) {
            document.getElementById('dash-' + d).style.display = d === id ? 'block' : 'none';
            var tab = document.getElementById('tab-' + d);
            tab.style.background = d === id ? '#D62828' : '#F3F4F6';
            tab.style.color = d === id ? '#fff' : '#0F0F10';
            tab.style.borderColor = d === id ? '#D62828' : '#E5E7EB';
          });
        }
      


    function openModal(id) {
      const el = document.getElementById('modal-' + id);
      if (el) {
        el.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
    function closeModal(id) {
      const el = document.getElementById('modal-' + id);
      if (el) {
        el.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
    // Close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(el => {
          el.classList.remove('open');
          document.body.style.overflow = '';
        });
      }
    });
    function toggleMenu(el) {
      // Simple mobile menu — could be extended
      el.classList.toggle('active');
    }
