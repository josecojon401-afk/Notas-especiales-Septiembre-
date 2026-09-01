const messages = [["💕 Emotivo", "Madelyn, septiembre comienza y quiero abrir este mes recordándote algo que para mí tiene mucho valor: tu amistad se ha convertido en uno de esos regalos que uno aprende a cuidar con el corazón."], ["🌷 Cariño", "Hay días normales que terminan siendo especiales solo porque alguien estuvo presente. Gracias por ser muchas veces esa presencia que hace más bonito el camino."], ["✨ Especial", "Si alguna vez llegas a sentir que eres una persona más entre tantas, recuerda que para quienes te apreciamos hay detalles tuyos que no podrían ser reemplazados por nadie."], ["🤍 Gratitud", "Gracias por cada ocasión en la que has escuchado, por cada palabra que llegó en el momento correcto y por esos pequeños gestos que quizá parecen sencillos, pero significan mucho."], ["💕 Emotivo", "No todas las amistades consiguen convertirse en un lugar de confianza. La tuya tiene esa cualidad especial de hacer sentir que se puede hablar desde el corazón."], ["🌸 Esperanza", "Deseo que hoy la vida te recuerde, aunque sea mediante algo pequeño, que también hay cosas bonitas esperándote después de los días difíciles."], ["🤍 Gratitud", "A veces no alcanzamos a decirle a las personas cuánto valor tienen mientras están presentes. Por eso hoy quiero decirte: agradezco sinceramente haberte encontrado en mi camino."], ["✨ Especial", "Tu historia todavía tiene páginas que no conoces. Ojalá las próximas estén llenas de oportunidades, tranquilidad, personas sinceras y sueños que poco a poco se hagan realidad."], ["💕 Emotivo", "Madelyn, quiero que cuando leas esto sepas que no necesitas estar siempre bien para seguir siendo valiosa. Incluso en tus días más silenciosos sigues siendo alguien importante."], ["🌷 Cariño", "Hay recuerdos que nacen de grandes momentos y otros de conversaciones sencillas. Me alegra que nuestra amistad tenga de ambos y que todavía queden muchos por crear."], ["✨ Especial", "Nunca permitas que un día difícil te haga olvidar todo lo que ya has superado. Dentro de ti existe una fortaleza que muchas veces aparece justo cuando más la necesitas."], ["🤍 Gratitud", "Gracias por mostrarme que una amistad puede sentirse cercana no solo por el tiempo compartido, sino por la sinceridad con la que se viven los momentos."], ["💕 Emotivo", "Si pudiera guardar algo de nuestra amistad en una caja, guardaría esas conversaciones que comenzaron sin importancia y terminaron convirtiéndose en recuerdos que hoy tienen mucho significado."], ["🌸 Esperanza", "Que hoy encuentres descanso para lo que te preocupa, claridad para lo que no comprendes y una razón nueva para creer que vienen días mejores."], ["🌷 Cariño", "Madelyn, no quiero que olvides que mereces el mismo cariño, paciencia y comprensión que tantas veces sabes ofrecer a los demás."], ["💕 Emotivo", "Llegamos a la mitad de septiembre y este mensaje tiene una sola intención: recordarte que tu amistad sigue teniendo un lugar especial y que cada detalle compartido ha valido la pena."], ["✨ Especial", "Hay personas que dejan recuerdos; otras dejan aprendizajes. Y algunas, como tú, logran dejar ambas cosas sin siquiera proponérselo."], ["🤍 Gratitud", "Gracias por seguir siendo tú, con tus días buenos, tus preocupaciones, tus sueños y tu manera particular de ver la vida. La autenticidad también es una forma de belleza."], ["💕 Emotivo", "Si en algún momento sientes que nadie nota tus esfuerzos, recuerda que muchas de las cosas buenas que haces sí dejan huella, aunque no siempre reciban palabras de reconocimiento."], ["🌷 Cariño", "Ojalá hoy tengas un momento que te haga detenerte y sonreír. No porque todo sea perfecto, sino porque incluso en medio de lo cotidiano todavía existen razones para agradecer."], ["🌸 Esperanza", "No te apresures por tener todas las respuestas. Algunas cosas bonitas necesitan tiempo, y algunos caminos comienzan a tener sentido solo después de haberlos recorrido."], ["💕 Emotivo", "Una amistad especial no se mide únicamente por las risas, sino también por la tranquilidad de saber que en los momentos difíciles hay alguien dispuesto a escuchar."], ["✨ Especial", "Madelyn, conserva esa parte de ti que todavía sueña. El mundo muchas veces intenta volvernos más duros, pero mantener un corazón sensible también requiere valentía."], ["🤍 Gratitud", "Gracias por los momentos en los que tu presencia fue suficiente, aun sin grandes palabras. Hay silencios acompañados que también se convierten en una forma de cariño."], ["💕 Emotivo", "Si alguna vez dudas de lo mucho que puedes significar para alguien, recuerda esto: algunas personas cambian nuestros días sin darse cuenta, simplemente por estar en ellos."], ["🌷 Cariño", "Que septiembre te vaya dejando pequeñas pruebas de que la vida también sabe sorprender: una llamada, una buena noticia, una sonrisa inesperada o un instante de verdadera paz."], ["✨ Especial", "Tu valor no está en ser perfecta, sino en ser real. En aprender, volver a intentar, equivocarte, crecer y seguir conservando aquello bueno que te hace ser tú."], ["🤍 Gratitud", "Agradezco que nuestra amistad tenga recuerdos que puedo mirar con una sonrisa y también conversaciones que me han enseñado a valorar mucho más tu manera de ser."], ["💕 Emotivo", "Septiembre está por terminar, pero quería dejarte antes un recordatorio: no importa cuántas cosas cambien alrededor, nunca olvides cuidar tu corazón y reconocer todo lo bueno que hay en ti."], ["🌸 Esperanza", "Hoy termina septiembre, pero no los buenos deseos. Que el nuevo mes te encuentre con fuerzas renovadas, sueños intactos y la certeza de que eres una persona muy valiosa. Gracias por compartir otro mes en este pequeño rincón."]];
const cover = document.getElementById('cover');
const notes = document.getElementById('notes');
const openBtn = document.getElementById('openBtn');
const backBtn = document.getElementById('backBtn');
const todayBtn = document.getElementById('todayBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dateTitle = document.getElementById('dateTitle');
const dayNumber = document.getElementById('dayNumber');
const styleBadge = document.getElementById('styleBadge');
const message = document.getElementById('message');
const progressBar = document.getElementById('progressBar');
const calendar = document.getElementById('calendar');
let currentDay = 1;

const today = new Date();
const isSeptember2026 = today.getFullYear() === 2026 && today.getMonth() === 8;
const defaultDay = isSeptember2026 ? Math.min(today.getDate(),30) : 1;

function renderCalendar(){
  calendar.innerHTML='';
  for(let d=1; d<=30; d++){
    const b=document.createElement('button');
    b.textContent=d;
    if(d===currentDay)b.classList.add('current');
    if(isSeptember2026 && d===today.getDate())b.classList.add('today');
    b.addEventListener('click',()=>showDay(d));
    calendar.appendChild(b);
  }
}

function showDay(day){
  currentDay=Math.max(1,Math.min(30,day));
  const item=messages[currentDay-1];
  const date=new Date(2026,8,currentDay);
  const label=date.toLocaleDateString('es-GT',{weekday:'long',day:'numeric',month:'long'});
  dateTitle.textContent=label.charAt(0).toUpperCase()+label.slice(1);
  dayNumber.textContent=`Día ${currentDay} de 30`;
  styleBadge.textContent=item[0];
  typeMessage(item[1]);
  progressBar.style.width=`${(currentDay/30)*100}%`;
  renderCalendar();
  window.scrollTo({top:0,behavior:'smooth'});
}

function openNotes(day=defaultDay){
  cover.classList.remove('active'); notes.classList.add('active'); showDay(day);
}
if(openBtn) openBtn.addEventListener('click',()=>openNotes());
if(backBtn) backBtn.addEventListener('click',()=>{notes.classList.remove('active');cover.classList.add('active');});
if(todayBtn) todayBtn.addEventListener('click',()=>showDay(defaultDay));
if(prevBtn) prevBtn.addEventListener('click',()=>showDay(currentDay-1));
if(nextBtn) nextBtn.addEventListener('click',()=>showDay(currentDay+1));
document.addEventListener('keydown',e=>{
  if(!notes.classList.contains('active')) return;
  if(e.key==='ArrowLeft')showDay(currentDay-1);
  if(e.key==='ArrowRight')showDay(currentDay+1);
});

const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseInNotes = document.getElementById('surpriseInNotes');
const letterBtn = document.getElementById('letterBtn');
const letterContent = document.getElementById('letterContent');

function surprise(){
  const randomDay = Math.floor(Math.random()*30)+1;
  openNotes(randomDay);
}
if (surpriseBtn) surpriseBtn.addEventListener('click', surprise);
if (surpriseInNotes) surpriseInNotes.addEventListener('click', surprise);
if(letterBtn) letterBtn.addEventListener('click', ()=>{
  letterContent.classList.toggle('open');
  letterBtn.textContent = letterContent.classList.contains('open')
    ? '💗 Cerrar la pequeña carta'
    : '💌 Abrir una pequeña carta';
});

const giftBox = document.getElementById('giftBox');
const giftScene = document.getElementById('giftScene');
const giftIntro = document.getElementById('giftIntro');
const closingBtn = document.getElementById('closingBtn');
const closingMessage = document.getElementById('closingMessage');
const bgMusic = document.getElementById('legacyBgMusic');

function openGift(){
  if(giftScene.classList.contains('opened')) return;
  giftScene.classList.add('opened');
  giftBox.classList.add('opening');
  setTimeout(()=>{
    giftScene.style.display='none';
    giftIntro.classList.add('visible');
  },700);
}
if(giftBox) giftBox.addEventListener('click', openGift);
if(giftBox) giftBox.addEventListener('keydown', e=>{ if(e.key==='Enter' || e.key===' ') openGift(); });

if(closingBtn) closingBtn.addEventListener('click', ()=>{
  closingMessage.classList.toggle('open');
  closingBtn.textContent = closingMessage.classList.contains('open')
    ? '💗 Ocultar mensaje final'
    : '🎁 Ver el mensaje final';
});

/* Si colocas un archivo music.mp3 junto a index.html, intentará reproducirlo
   al entrar al regalo; los navegadores pueden exigir una interacción del usuario. */
if(document.getElementById('openBtn')) document.getElementById('openBtn').addEventListener('click', ()=>{
  if(bgMusic && bgMusic.src) bgMusic.play().catch(()=>{});
});

const reasons = ["Porque tu amistad ha sabido sentirse cercana incluso en los días más sencillos.", "Porque tienes una manera especial de escuchar cuando alguien necesita ser comprendido.", "Porque contigo algunos recuerdos ordinarios terminan teniendo un significado especial.", "Porque tu forma de ser transmite una cercanía que no se encuentra todos los días.", "Porque has estado presente en momentos que hoy guardo con verdadero cariño.", "Porque tu sinceridad hace que la amistad se sienta auténtica.", "Porque aun sin proponértelo puedes mejorar el ánimo de un día difícil.", "Porque detrás de tu sonrisa hay una persona fuerte que merece ser valorada.", "Porque tu amistad ha dejado aprendizajes que también forman parte de los buenos recuerdos.", "Porque eres de esas personas a las que uno agradece haber conocido.", "Porque puedes hacer sentir importante a alguien con un detalle sencillo.", "Porque tu presencia ha dado un significado especial a momentos que de otra manera habrían sido comunes."];
let reasonIndex=0, typingTimer;

function typeMessage(text){clearInterval(typingTimer);message.textContent='';message.classList.add('typing');let i=0;typingTimer=setInterval(()=>{message.textContent+=text[i++]||'';if(i>=text.length){clearInterval(typingTimer);message.classList.remove('typing')}},18)}
function celebrate(count=55){const icons=['✦','♡','✧','❀'];for(let i=0;i<count;i++){const p=document.createElement('span');p.className='particle';p.textContent=icons[Math.floor(Math.random()*icons.length)];p.style.left=Math.random()*100+'vw';p.style.fontSize=(10+Math.random()*18)+'px';p.style.color=['#d7a4b6','#f0d4dd','#b89a67','#ffffff'][Math.floor(Math.random()*4)];p.style.setProperty('--x',(Math.random()*160-80)+'px');p.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),5200)}}
const reasonBtn=document.getElementById('reasonBtn');if(reasonBtn)reasonBtn.addEventListener('click',()=>{reasonIndex=(reasonIndex+1)%reasons.length;const el=document.getElementById('reasonText');el.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:450});el.textContent=reasons[reasonIndex]});
if(letterBtn)letterBtn.addEventListener('click',()=>letterBtn.classList.toggle('open'));
const celebrateBtn=document.getElementById('celebrateBtn');if(celebrateBtn)celebrateBtn.addEventListener('click',()=>celebrate(70));
const lightbox=document.getElementById('lightbox'),lightboxImage=document.getElementById('lightboxImage'),closeLightbox=document.getElementById('closeLightbox');if(lightbox&&lightboxImage){document.querySelectorAll('.memory-grid img,.photo-frame img').forEach(img=>img.addEventListener('click',()=>{lightboxImage.src=img.src;lightbox.classList.add('open')}));if(closeLightbox)closeLightbox.addEventListener('click',()=>lightbox.classList.remove('open'));lightbox.addEventListener('click',e=>{if(e.target.id==='lightbox')e.currentTarget.classList.remove('open')});}
const musicBtn=document.getElementById('musicBtn');if(musicBtn&&bgMusic)musicBtn.addEventListener('click',()=>{if(bgMusic.paused){bgMusic.play().then(()=>musicBtn.classList.add('playing')).catch(()=>{})}else{bgMusic.pause();musicBtn.classList.remove('playing')}});
const originalOpenGift=openGift;openGift=function(){originalOpenGift();celebrate(38)};


(function(){
  const body = document.body;
  const intro = document.getElementById('luxuryIntro');
  const enter = document.getElementById('enterLuxury');
  const petals = document.getElementById('luxuryPetals');
  const musicBtn = document.getElementById('legacyLuxuryMusicBtn');
  const audio = document.getElementById('legacyLuxuryAudio');
  const celebrate = document.getElementById('luxuryCelebrate');

  function petalBurst(count=24){
    if(!petals) return;
    const symbols = ['🌸','🌷','♡','✦'];
    for(let i=0;i<count;i++){
      const p = document.createElement('span');
      p.className = 'luxury-petal';
      p.textContent = symbols[Math.floor(Math.random()*symbols.length)];
      p.style.left = Math.random()*100 + 'vw';
      p.style.fontSize = (13 + Math.random()*20) + 'px';
      p.style.animationDuration = (4 + Math.random()*5) + 's';
      p.style.animationDelay = (Math.random()*1.2) + 's';
      petals.appendChild(p);
      setTimeout(()=>p.remove(),10000);
    }
  }

  function enterExperience(){
    body.classList.remove('luxury-locked'); body.classList.add('luxury-ready');
    if(intro) intro.classList.add('hide');
    petalBurst(36);
  }

  if(enter) enter.addEventListener('click', enterExperience);
  if(celebrate) celebrate.addEventListener('click', ()=>petalBurst(60));

  if(musicBtn && audio){
    musicBtn.addEventListener('click', async ()=>{
      if(audio.paused){
        try{
          await audio.play();
          musicBtn.textContent='🔊 Música';
        }catch(e){
          musicBtn.textContent='🎵 Agrega music.mp3';
        }
      }else{
        audio.pause();
        musicBtn.textContent='🎵 Música';
      }
    });
  }

  setInterval(()=>petalBurst(2),2600);
})();


(function(){
  const button = document.getElementById('luxuryMusicBtn');
  const audio = document.getElementById('bgMusic');
  const status = document.getElementById('audioStatus');
  if(!button || !audio) return;

  const setStatus = text => { if(status) status.textContent = text; };

  audio.addEventListener('canplay', ()=>setStatus('Audio listo'));
  audio.addEventListener('playing', ()=>{
    button.textContent = '🔊 Pausar música';
    setStatus('Reproduciendo');
  });
  audio.addEventListener('pause', ()=>{
    button.textContent = '🎵 Reproducir música';
    if(audio.currentTime > 0) setStatus('Música en pausa');
  });
  audio.addEventListener('error', ()=>{
    setStatus('No se encontró music.mp3');
    button.textContent = '⚠️ Audio no disponible';
  });

  button.addEventListener('click', async ()=>{
    if(audio.paused){
      try{
        await audio.play();
      }catch(error){
        setStatus('Verifica que el archivo se llame music.mp3');
      }
    }else{
      audio.pause();
    }
  });
})();
