const qs=[
["PRETEST","¿Qué tan importante es para ti proteger tu información personal en internet?",["Muy importante","Importante","Poco importante","Nada importante"],"choice"],
["PRETEST","¿Crees que compartir información personal en internet puede ser peligroso?",["Sí","No","No estoy seguro/a"],"choice"],
["RONDA 1 · UBICACIÓN 📍","Una aplicación te pide acceso a tu ubicación todo el tiempo. ¿Qué haces?",["A. Acepto","B. Reviso primero para qué la necesitan","C. No acepto"],"decision"],
["RONDA 1 · JUSTIFICACIÓN","¿Por qué escogiste esa opción?",null,"text"],
["RONDA 1 · REFLEXIÓN","¿Seguimos teniendo privacidad cuando entregamos nuestros datos a cambio de utilizar una aplicación?",null,"text"],
["RONDA 2 · FOTOGRAFÍAS 📸","Tus amigos quieren publicar una foto donde aparecen otras personas. ¿Qué haces?",["A. La publico sin preguntar","B. Pregunto primero a quienes aparecen","C. No la publico"],"decision"],
["RONDA 2 · JUSTIFICACIÓN","¿Por qué escogiste esa opción?",null,"text"],
["RONDA 2 · REFLEXIÓN","¿Tenemos derecho a publicar una foto de otra persona sin su permiso? ¿Por qué?",null,"text"],
["RONDA 3 · CONTRASEÑA 🔐","Un amigo te pide tu contraseña para ayudarte con tu cuenta. ¿Qué haces?",["A. Se la doy porque confío en él","B. Busco otra forma de ayudarlo","C. No se la doy"],"decision"],
["RONDA 3 · JUSTIFICACIÓN","¿Por qué escogiste esa opción?",null,"text"],
["RONDA 3 · REFLEXIÓN","¿Confiar en alguien significa que debemos compartir toda nuestra información privada con esa persona?",null,"text"],
["RONDA 4 · INFORMACIÓN FAMILIAR 👨‍👩‍👧","Quieres publicar que tu familia estará fuera de casa durante varios días. ¿Qué haces?",["A. Lo publico","B. Evito dar detalles","C. No publico esa información"],"decision"],
["RONDA 4 · JUSTIFICACIÓN","¿Por qué escogiste esa opción?",null,"text"],
["REFLEXIÓN FINAL 🧠","Después del juego, ¿cambió tu forma de pensar sobre compartir información personal en internet?",["Sí, mucho","Sí, un poco","No cambió","No estoy seguro/a"],"choice"],
["REFLEXIÓN FINAL 🧠","¿Qué significa para ti tener privacidad en internet?",null,"text"]
];
let i=0,sel=null,c={a:0,b:0,c:0};const $=x=>document.getElementById(x);
function start(){i=0;c={a:0,b:0,c:0};$("game").classList.remove("hidden");render();$("experiencia").scrollIntoView()}
function render(){let x=qs[i];sel=null;$("counter").textContent=`Pregunta ${i+1} de ${qs.length}`;$("bar").style.width=((i+1)/qs.length*100)+"%";$("station").textContent=x[0];$("q").textContent=x[1];$("opts").innerHTML="";$("txt").classList.toggle("hidden",x[3]!=="text");$("txt").value="";$("next").textContent=i===qs.length-1?"Ver mi resultado →":"Continuar →";if(x[2])x[2].forEach(o=>{let b=document.createElement("button");b.className="option";b.textContent=o;b.onclick=()=>{document.querySelectorAll(".option").forEach(z=>z.classList.remove("selected"));b.classList.add("selected");sel=o};$("opts").appendChild(b)})}
function next(){let x=qs[i],v=x[3]==="text"?$("txt").value.trim():sel;if(!v)return alert("Responde esta pregunta antes de continuar.");if(x[3]==="decision"){if(v.startsWith("A."))c.a++;else if(v.startsWith("B."))c.b++;else c.c++}if(i<qs.length-1){i++;render()}else finish()}
function finish(){$("game").classList.add("hidden");$("result").classList.remove("hidden");let total=c.a+c.b+c.c,score=total?Math.round((c.c*100+c.b*65+c.a*25)/total):0;$("score").textContent=score+"%";$("safe").textContent=c.c;$("check").textContent=c.b;$("share").textContent=c.a;$("result").scrollIntoView()}
function showRef(){$("reflexion").classList.remove("hidden");$("reflexion").scrollIntoView()}
$("final").addEventListener("input",()=>{$("chars").textContent=$("final").value.length+" / 500"});function save(){if(!$("final").value.trim())return alert("Escribe una reflexión antes de guardar.");localStorage.setItem("lo_compartirias_reflexion",$("final").value);$("saved").classList.remove("hidden")}
