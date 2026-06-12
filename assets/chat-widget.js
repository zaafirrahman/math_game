/* ============================================================
   Math Arena · Chat Widget  (chat-widget.js)
   Include di student hub:
     <script src="../../assets/chat-widget.js"></script>
     <script>initChat({ studentId: 'asfa_1195', studentName: 'Asfa' })</script>
   ============================================================ */

(function () {
  const SUPA_URL = 'https://fjnpaglzdmofdgrfvbth.supabase.co';
  const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqbnBhZ2x6ZG1vZmRncmZ2YnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMDUzMDMsImV4cCI6MjA5Njc4MTMwM30.pgP4-x7d_Dca5r5ca4L3viS-qXTzvzRb7smswzJrj1k';

  const STYLE = `
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@700;800;900&family=Patrick+Hand&display=swap');

    #cw-fab{
      position:fixed;bottom:1.5rem;right:1.5rem;z-index:9000;
      width:54px;height:54px;border-radius:14px;
      background:#2c3a3a;
      border:2px dashed rgba(232,224,208,0.35);
      cursor:pointer;
      box-shadow:0 4px 18px rgba(0,0,0,0.45),0 1px 4px rgba(0,0,0,0.3);
      display:flex;align-items:center;justify-content:center;
      font-size:1.4rem;
      transition:transform 0.18s ease,box-shadow 0.18s ease;
    }
    #cw-fab:hover{transform:translateY(-3px) rotate(-2deg);box-shadow:0 8px 24px rgba(0,0,0,0.5);}
    #cw-fab:active{transform:translateY(1px) scale(0.97);}
    #cw-badge{
      position:absolute;top:-5px;right:-5px;
      background:#ef4444;color:#fff;
      font-family:'Nunito',sans-serif;font-size:0.6rem;font-weight:900;
      min-width:18px;height:18px;border-radius:99px;
      display:none;align-items:center;justify-content:center;
      padding:0 4px;border:2px solid #1e2a2a;
    }
    #cw-panel{
      position:fixed;bottom:5rem;right:1.5rem;z-index:8999;
      width:320px;max-width:calc(100vw - 2rem);height:450px;
      background:#1e2a2a;
      background-image:linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px);
      background-size:24px 24px;
      border:1.5px solid rgba(232,224,208,0.15);
      border-radius:16px;
      box-shadow:0 12px 48px rgba(0,0,0,0.6),0 2px 8px rgba(0,0,0,0.4);
      display:none;flex-direction:column;overflow:hidden;
      font-family:'Nunito',sans-serif;
    }
    #cw-panel.open{display:flex;}
    #cw-head{
      padding:0.85rem 1rem;
      background:#162020;
      border-bottom:1.5px dashed rgba(232,224,208,0.15);
      display:flex;align-items:center;gap:0.65rem;flex-shrink:0;
    }
    #cw-head .cw-avatar{
      width:34px;height:34px;border-radius:10px;
      background:#243030;border:1.5px dashed rgba(232,224,208,0.25);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;flex-shrink:0;
    }
    #cw-head .cw-info{flex:1;}
    #cw-head .cw-title{
      font-family:'Fredoka One',cursive;font-size:0.88rem;font-weight:400;
      color:#e8e0d0;letter-spacing:1.5px;text-shadow:1px 1px 0 rgba(0,0,0,0.4);
    }
    #cw-head .cw-sub{font-family:'Patrick Hand',cursive;font-size:0.7rem;color:rgba(232,224,208,0.5);margin-top:1px;}
    #cw-head .cw-close{background:none;border:none;color:rgba(232,224,208,0.4);font-size:1rem;cursor:pointer;padding:0 0.2rem;line-height:1;transition:color 0.15s;}
    #cw-head .cw-close:hover{color:#e8e0d0;}
    #cw-msgs{flex:1;overflow-y:auto;padding:0.9rem 0.85rem;display:flex;flex-direction:column;gap:0.6rem;scroll-behavior:smooth;}
    #cw-msgs::-webkit-scrollbar{width:3px;}
    #cw-msgs::-webkit-scrollbar-track{background:transparent;}
    #cw-msgs::-webkit-scrollbar-thumb{background:rgba(232,224,208,0.15);border-radius:99px;}
    .cw-bubble{max-width:84%;padding:0.5rem 0.8rem;border-radius:10px;font-family:'Patrick Hand',cursive;font-size:0.92rem;line-height:1.5;word-break:break-word;}
    .cw-bubble.student{align-self:flex-end;background:rgba(232,224,208,0.1);border:1px dashed rgba(232,224,208,0.3);color:#e8e0d0;border-bottom-right-radius:2px;}
    .cw-bubble.admin{align-self:flex-start;background:rgba(240,192,96,0.08);border:1px dashed rgba(240,192,96,0.3);color:#e8e0d0;border-bottom-left-radius:2px;}
    .cw-bubble .cw-sender{font-family:'Fredoka One',cursive;font-size:0.62rem;letter-spacing:1.5px;margin-bottom:2px;text-shadow:1px 1px 0 rgba(0,0,0,0.3);}
    .cw-bubble.student .cw-sender{color:rgba(232,224,208,0.55);}
    .cw-bubble.admin .cw-sender{color:#f0c060;}
    .cw-bubble .cw-time{font-family:'Nunito',sans-serif;font-size:0.6rem;color:rgba(232,224,208,0.35);margin-top:3px;text-align:right;}
    .cw-empty{text-align:center;color:rgba(232,224,208,0.35);font-family:'Patrick Hand',cursive;font-size:0.88rem;padding:2rem 1rem;line-height:1.8;}
    .cw-empty span{display:block;font-size:2.2rem;margin-bottom:0.5rem;opacity:0.6;}
    #cw-typing{padding:0.3rem 0.85rem;font-family:'Patrick Hand',cursive;font-size:0.75rem;color:rgba(232,224,208,0.35);font-style:italic;min-height:22px;flex-shrink:0;}
    #cw-footer{padding:0.65rem 0.75rem;border-top:1.5px dashed rgba(232,224,208,0.12);display:flex;gap:0.5rem;flex-shrink:0;background:#162020;}
    #cw-input{flex:1;background:rgba(255,255,255,0.04);border:1px dashed rgba(232,224,208,0.25);color:#e8e0d0;padding:0.55rem 0.75rem;border-radius:8px;font-family:'Patrick Hand',cursive;font-size:0.92rem;outline:none;transition:border-color 0.2s,background 0.2s;resize:none;height:38px;line-height:1.4;}
    #cw-input:focus{border-color:rgba(232,224,208,0.5);background:rgba(255,255,255,0.06);}
    #cw-input::placeholder{color:rgba(232,224,208,0.25);font-style:italic;}
    #cw-send{background:#2c3a3a;border:1.5px dashed rgba(232,224,208,0.3);color:#e8e0d0;width:38px;height:38px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;transition:all 0.15s;}
    #cw-send:hover{background:#3a4a4a;border-color:rgba(232,224,208,0.55);}
    #cw-send:disabled{opacity:0.3;cursor:default;}
  `;

  function api(path, opts = {}) {
    return fetch(SUPA_URL + '/rest/v1/' + path, {
      ...opts,
      headers: {
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer ' + SUPA_KEY,
        'Content-Type': 'application/json',
        'Prefer': opts.prefer || 'return=minimal',
        ...(opts.headers || {}),
      },
    });
  }

  function fmtTime(iso) {
    const d = new Date(iso);
    return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  window.initChat = function ({ studentId, studentName }) {
    // Inject styles
    const style = document.createElement('style');
    style.textContent = STYLE;
    document.head.appendChild(style);

    // Inject HTML
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <button id="cw-fab" title="Tanya ke Tutor">💬<span id="cw-badge">0</span></button>
      <div id="cw-panel">
        <div id="cw-head">
          <div class="cw-avatar">👨‍🏫</div>
          <div class="cw-info">
            <div class="cw-title">TANYA TUTOR</div>
            <div class="cw-sub" id="cw-status">Kirim pertanyaanmu!</div>
          </div>
          <button class="cw-close" id="cw-close">✕</button>
        </div>
        <div id="cw-msgs"></div>
        <div id="cw-typing"></div>
        <div id="cw-footer">
          <textarea id="cw-input" placeholder="Ketik pertanyaan..." rows="1"></textarea>
          <button id="cw-send">➤</button>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);

    const fab    = document.getElementById('cw-fab');
    const panel  = document.getElementById('cw-panel');
    const badge  = document.getElementById('cw-badge');
    const msgs   = document.getElementById('cw-msgs');
    const input  = document.getElementById('cw-input');
    const send   = document.getElementById('cw-send');
    const status = document.getElementById('cw-status');

    let isOpen = false;
    let unread = 0;
    let lastId = 0;

    // ── Toggle panel ──
    fab.addEventListener('click', () => {
      isOpen = !isOpen;
      panel.classList.toggle('open', isOpen);
      if (isOpen) {
        unread = 0;
        badge.style.display = 'none';
        markRead();
        input.focus();
        scrollDown();
      }
    });
    document.getElementById('cw-close').addEventListener('click', () => {
      isOpen = false;
      panel.classList.remove('open');
    });

    // ── Render bubble ──
    function renderBubble(msg) {
      const div = document.createElement('div');
      div.className = 'cw-bubble ' + msg.sender;
      div.dataset.id = msg.id;
      const senderLabel = msg.sender === 'admin' ? '<div class="cw-sender">TUTOR</div>' : '';
      div.innerHTML = senderLabel + `<div>${escHtml(msg.text)}</div><div class="cw-time">${fmtTime(msg.created_at)}</div>`;
      msgs.appendChild(div);
    }

    function escHtml(s) {
      return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function scrollDown() {
      setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 50);
    }

    function showEmpty() {
      msgs.innerHTML = `<div class="cw-empty"><span>💬</span>Belum ada pesan.<br>Kirim pertanyaanmu ke tutor!</div>`;
    }

    // ── Load history ──
    async function loadMessages() {
      const res = await api(`messages?student_id=eq.${encodeURIComponent(studentId)}&order=created_at.asc&select=*`);
      const data = await res.json();
      msgs.innerHTML = '';
      if (!data.length) { showEmpty(); return; }
      data.forEach(m => { renderBubble(m); if (m.id > lastId) lastId = m.id; });
      scrollDown();
      // Count unread admin messages
      const newAdminMsgs = data.filter(m => m.sender === 'admin' && !m.is_read);
      if (newAdminMsgs.length && !isOpen) {
        unread = newAdminMsgs.length;
        badge.textContent = unread > 9 ? '9+' : unread;
        badge.style.display = 'flex';
      }
    }

    // ── Mark admin msgs as read ──
    async function markRead() {
      await api(`messages?student_id=eq.${encodeURIComponent(studentId)}&sender=eq.admin&is_read=eq.false`, {
        method: 'PATCH',
        prefer: 'return=minimal',
        body: JSON.stringify({ is_read: true }),
      });
    }

    // ── Send message ──
    async function sendMsg() {
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      input.style.height = '38px';
      send.disabled = true;

      // Remove empty state
      const empty = msgs.querySelector('.cw-empty');
      if (empty) empty.remove();

      const optimistic = {
        id: 'tmp_' + Date.now(),
        sender: 'student',
        text,
        created_at: new Date().toISOString(),
        is_read: false,
      };
      renderBubble(optimistic);
      scrollDown();

      await api('messages', {
        method: 'POST',
        prefer: 'return=minimal',
        body: JSON.stringify({ student_id: studentId, student_name: studentName, sender: 'student', text }),
      });

      send.disabled = false;
      status.textContent = 'Terkirim! Tunggu balasan tutor 😊';
      setTimeout(() => { status.textContent = 'Kirim pertanyaanmu!'; }, 3000);
    }

    send.addEventListener('click', sendMsg);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
    });
    input.addEventListener('input', () => {
      input.style.height = '38px';
      input.style.height = Math.min(input.scrollHeight, 80) + 'px';
    });

    // ── Realtime subscription ──
    function subscribeRealtime() {
      const evtSource = new EventSource(
        `${SUPA_URL}/realtime/v1/api?apikey=${SUPA_KEY}`,
        { withCredentials: false }
      );
      // Supabase realtime via fetch polling fallback (lebih reliable di vanilla)
      setInterval(async () => {
        const res = await api(`messages?student_id=eq.${encodeURIComponent(studentId)}&id=gt.${lastId}&order=created_at.asc&select=*`);
        const data = await res.json();
        if (!data.length) return;
        data.forEach(m => {
          if (m.id > lastId) lastId = m.id;
          // Remove optimistic duplicate
          const existing = msgs.querySelector(`[data-id="${m.id}"]`);
          if (existing) return;
          // Remove tmp bubbles if this is the real one
          const empty = msgs.querySelector('.cw-empty');
          if (empty) empty.remove();
          renderBubble(m);
          scrollDown();
          if (m.sender === 'admin') {
            if (!isOpen) {
              unread++;
              badge.textContent = unread > 9 ? '9+' : unread;
              badge.style.display = 'flex';
              // Pulse fab
              fab.style.animation = 'none';
              setTimeout(() => { fab.style.animation = ''; }, 10);
            } else {
              markRead();
            }
          }
        });
        // Clean up tmp optimistic bubbles (replace with real id)
        document.querySelectorAll('[data-id^="tmp_"]').forEach(el => el.remove());
      }, 2500);
    }

    loadMessages();
    subscribeRealtime();
  };
})();