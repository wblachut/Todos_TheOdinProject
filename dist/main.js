(()=>{"use strict";const e=(e,t,n,l,i,o="")=>({name:e,description:t,priority:n,dueDate:l,checklist:i,notes:o,setName:e=>(void 0).name=e});let t=JSON.parse(localStorage.getItem("projectList"))||[];const n=(e,n="in progress",l=[])=>({name:e,taskList:l,status:n,_setName:e=>(void 0).name=e,getName:()=>e,_setStatus:e=>(void 0).status=e,getStatus:()=>e,addToProjectList:()=>{console.log("addToProjectList"),t.push(void 0)},addTask:e=>{l.push(e)},getTasks:()=>l});document.body.onload=function(){console.log("addBaseElements");const l=document.getElementById("main"),i=document.createElement("nav");i.id="navbar",l.appendChild(i);const o=document.createElement("div");o.id="logo-div",o.innerHTML='<img src="img/Logo.png">',i.appendChild(o);const a=document.createElement("div");a.id="top-buttons",i.appendChild(a);const c=document.createElement("button");c.id="add-task-button",c.textContent="+",a.appendChild(c);const s=document.createElement("button");s.id="menage-projects-button",s.innerHTML="˂",a.appendChild(s);const d=document.createElement("aside");d.id="projects-nav",l.appendChild(d);const r=document.createElement("button");r.id="new-project-button",r.innerHTML="new project",d.appendChild(r),(()=>{console.log("handleDOMEvents");const l=document.getElementById("main"),i=document.createElement("div");i.id="container",l.appendChild(i);const o=document.getElementById("menage-projects-button"),a=document.getElementById("projects-nav"),c=document.getElementById("new-project-button"),s=document.createElement("ul");s.innerHTML='<li> <input type="text" id="project-name-input" placeholder="New project name" autofocus></li>\n  <li> <button id="add-project-button">add new Project</button> </li>',s.id="new-project-ul",a.insertBefore(s,a.children[0].nextElementSibling),o.addEventListener("click",(function(){a.classList.toggle("active"),o.classList.toggle("active"),o.classList.contains("active")?o.textContent=" Projects ":o.textContent="˂"})),c.addEventListener("click",(function(){s.classList.toggle("active")}));const d=document.getElementById("project-name-input");if(document.getElementById("add-project-button").addEventListener("click",(function(e){let l;e.preventDefault(),l=""==d.value?"New Project":d.value;const i=n(l);t.push(i),console.log(t),s.classList.remove("active"),d.value="",u()})),t==[]){const l=n("Default Project"),i=n("The Project"),o=e("Cleaning","do the cleaning of my room","relevant","2020-11-11",["make the bed","vaccum","clean windows","clean surfaces","empty the trash"],"just some cleaning nannanananan, tadada, nanananannaanna, taadadadat"),a=e("Programming","learn JS React and Angular","important","2020-12-01",["Finish ToDos","make MB website","finish React"]),c=e("Christmas","Prepare for Christmas","minor","2020-12-20",["order presents","do the shopping","clean house","pack gifts","prepare meals"]);return l.addTask(o),l.addTask(a),l.addTask(c),i.addTask(c),t.push(l),t.push(i),t}let r=t[0];function u(){t.forEach(((e,n)=>{console.log(n,e.name);const l=document.createElement("button");return document.getElementById("Project"+n)||(l.id="Project"+n,l.classList.add("project"),l.innerText=e.name,a.appendChild(l),0==n&&l.classList.add("active-project")),l.addEventListener("click",(function(){return console.log("current project:",n,e),r=e})),localStorage.setItem("projectList",JSON.stringify(t)),r})),function(){const e=document.getElementById("projects-select");t.forEach(((t,n)=>{if(!document.getElementById("project-opt"+n)){const l=document.createElement("option");l.id="project-opt"+n,l.innerText=t.name,e.appendChild(l)}}))}(),function(){const e=document.querySelectorAll(".project");e.forEach(((t,n)=>{t.addEventListener("click",(n=>{e.forEach((e=>e.classList.remove("active-project"))),p(),t.classList.add("active-project")}))}))}()}function p(){!function(e){for(;e.firstChild;)e.removeChild(e.lastChild)}(i),r.taskList.forEach(((e,n)=>{const l=document.createElement("div");if(!document.getElementById("Task"+n)){l.id="Task"+n,l.classList.add("Task");let a="",c="";function o(e){l.querySelectorAll(".checklist-li").forEach((t=>{function n(){t.classList.toggle("crossed")}"on"==e?t.addEventListener("click",n):"off"==e&&(t.classList.remove("crossed"),t.removeEventListener("click",n))}))}e.checklist.forEach(((e,t)=>(a+=`<li><label class="task-checklist-bullet" for="bullet${t}">✦</label><span class="task-checklist-el for-edit">${e}</span></li>`,a))),""!=e.notes&&(c=`<br>\n        <li><div class ="notes"> Notes: </div></li>\n        <li><div class ="task-notes for-edit" >${e.notes}</div></li>`),l.innerHTML=`<div class="editing-label">editing</div><ul><li><div class="task-name for-edit">${e.name}</div>\n        <div class ="task-priority ${e.priority} for-edit">${e.priority} </div></li>\n        <li><div class ="task-description for-edit">${e.description}</div></li>\n        <li>due to: <div class ="task-dueDate for-edit">${e.dueDate}</div></li>\n        <ul class="task-checklist">${a} </ul> ${c}\n        <li><button class ="edit-task-button">\n            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMS40MzggMTYuODcybC0xLjQzOCA3LjEyOCA3LjEyNy0xLjQzOCAxMi42NDItMTIuNjQtNS42OS01LjY5LTEyLjY0MSAxMi42NHptMi4yNzEgMi4yNTNsLS44NS0uODQ5IDExLjE0MS0xMS4xMjUuODQ5Ljg0OS0xMS4xNCAxMS4xMjV6bTIwLjI5MS0xMy40MzZsLTIuODE3IDIuODE5LTUuNjktNS42OTEgMi44MTYtMi44MTcgNS42OTEgNS42ODl6Ii8+PC9zdmc+"> Edit </button>\n        <button class ="save-changes-button">\n            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjIgMnYyMmgtMjB2LTIyaDNjMS4yMyAwIDIuMTgxLTEuMDg0IDMtMmg4Yy44Mi45MTYgMS43NzEgMiAzIDJoM3ptLTExIDFjMCAuNTUyLjQ0OCAxIDEgMSAuNTUzIDAgMS0uNDQ4IDEtMXMtLjQ0Ny0xLTEtMWMtLjU1MiAwLTEgLjQ0OC0xIDF6bTkgMWgtNGwtMiAyaC0zLjg5N2wtMi4xMDMtMmgtNHYxOGgxNnYtMTh6bS0xMyA5LjcyOWwuODU1LS43OTFjMSAuNDg0IDEuNjM1Ljg1MiAyLjc2IDEuNjU0IDIuMTEzLTIuMzk5IDMuNTExLTMuNjE2IDYuMTA2LTUuMjMxbC4yNzkuNjRjLTIuMTQxIDEuODY5LTMuNzA5IDMuOTQ5LTUuOTY3IDcuOTk5LTEuMzkzLTEuNjQtMi4zMjItMi42ODYtNC4wMzMtNC4yNzF6Ii8+PC9zdmc+"> Save </button>\n        <button class ="archive-task-button">\n            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMS44IDlsLS44LTRoMjJsLS44IDRoLTIuMDI5bC4zOS0yaC0xNy4xMjJsLjQxNCAyaC0yLjA1M3ptMTguNTc1LTZsLjYwNC0yaC0xNy45NzlsLjY4OCAyaDE2LjY4N3ptMy42MjUgOGwtMiAxM2gtMjBsLTItMTNoMjR6bS04IDRjMC0uNTUyLS40NDctMS0xLTFoLTZjLS41NTMgMC0xIC40NDgtMSAxcy40NDcgMSAxIDFoNmMuNTUzIDAgMS0uNDQ4IDEtMXoiLz48L3N2Zz4="> Archive </button></li>\n        `,i.appendChild(l),function(){let e=l.querySelector(".edit-task-button"),t=l.querySelector(".save-changes-button"),i=l.querySelectorAll(".for-edit"),a=l.querySelector(".task-priority"),c=l.querySelector(".task-dueDate"),s=l.querySelector(".task-checklist"),d=c.textContent,u=a.classList[1];e.addEventListener("click",(function(){console.log(u),l.classList.add("editing"),e.style.display="none",t.style.display="inline-block",i.forEach((e=>e.contentEditable=!0)),a.innerHTML=`\n            <li><select name="priority" class="task-priority for-edit" selected="${u}">\n            <option value="minor"> low </option>\n            <option value="relevant"> normal </option>\n            <option value="important"> important </option>\n            </select></li>`,c.innerHTML=`<li><label for="date"></label><input type="date" class="task-dueDate for-edit" value="${d}"></li>`,s.innerHTML='<label for="checklist">checklist:</label><button class="add-bullet">+</button><button class="remove-bullet">-</button>'+s.innerHTML,Array.from(l.getElementsByTagName("option")).forEach((e=>{e.value==u&&(e.selected=!0)})),document.querySelector(".add-bullet").addEventListener("click",(function(e){e.preventDefault();const t=document.createElement("li");t.innerHTML='<label class="task-checklist-bullet" for="bullet">✦</label><span class="task-checklist-el for-edit" contentEditable="true"></span>',s.appendChild(t)})),document.querySelector(".remove-bullet").addEventListener("click",(function(e){e.preventDefault(),v.lastChild&&s.removeChild(s.lastChild)})),o("off")})),t.addEventListener("click",(a=>{t.style.display="none",e.style.display="inline-block";let c=[];i=l.querySelectorAll(".for-edit"),i.forEach((e=>{let t=e.classList[0].slice(5);console.log(t,e),"name"==t?r.taskList[n].name=e.textContent:"description"==t?r.taskList[n].description=e.textContent:"priority"==t?r.taskList[n].priority=e.value:"dueDate"==t?r.taskList[n].dueDate=e.value:"notes"==t?r.taskList[n].notes=e.textContent:(t="checklist-el")&&""!=e.textContent&&c.push(e.textContent)})),r.taskList[n].checklist=c,console.log(c),console.log(r.taskList[n]),o("on"),p(),i.forEach((e=>e.contentEditable=!1))}))}(),document.querySelectorAll(".archive-task-button")[n].addEventListener("click",(function(){r.taskList.splice(n,1),p()})),o("on"),localStorage.setItem("projectList",JSON.stringify(t))}}))}const m=document.createElement("div");m.id="add-task-modal",m.innerHTML='\n        <form id="new-task"> <div id="add-task-window">\n        <ul>\n        <div>  </div>\n        <li><input type="text" id="task-name-input" placeholder="New task" required></li>\n        <li><input type="text" id="description-input" placeholder="description"></li>\n        <li><label for="date">due to </label><input type="date" id="date-input" required></li>\n        <li><label for="priority"> Priority </label><select name="priority" id="priority-select" default="normal">\n        <option value="minor"> low </option>\n        <option value="relevant"> normal </option>\n        <option value="important"> important </option>\n        </select></li>\n        <label for="checklist">checklist:</label><button id="add-bullet">+</button><button id="remove-bullet">-</button>\n        <ul id="checklist-ul">\n\n        <li><label class="checklist-bullet" for="bullet1">✦</label><input type="text" class="checklist-input" id="bullet2" placeholder="add your text"></li> </ul>\n        <li><label for="notes">notes:</label></li>\n        <li><textarea id="notes-textarea" name="task notes" placeholder="add task notes"></textarea></li>\n        <div id="add-task-checklist"\n          <br>\n          <br>\n        <li><label for="projects">chose project:</label>\n        <select name="projects" id="projects-select"></select></li>\n        <li><input type="submit" value="Add task" id="submit-task"> </li>\n      </ul></div>\n    </form>',i.appendChild(m);const g=document.getElementById("add-task-button");g.addEventListener("click",(function(e){e.preventDefault(),g.classList.toggle("active"),m.classList.toggle("active")}));const v=document.getElementById("checklist-ul");document.getElementById("add-bullet").addEventListener("click",(function(e){e.preventDefault();const t=document.createElement("li");t.innerHTML=' <li><label class="checklist-bullet" for="bullet">✦</label><input type="text" class="checklist-input" placeholder="add your text"></li> ',v.appendChild(t)})),document.getElementById("remove-bullet").addEventListener("click",(function(e){e.preventDefault(),v.lastChild&&v.removeChild(v.lastChild)}));const y=document.getElementById("new-task");y.addEventListener("submit",(function(n){n.preventDefault();let l=document.getElementById("task-name-input"),i=document.getElementById("description-input"),o=document.getElementById("date-input"),a=document.getElementById("priority-select"),c=document.getElementById("projects-select"),s=document.getElementById("notes-textarea"),d=document.querySelectorAll(".checklist-input"),r=[];d.forEach((e=>{""!=e.value&&r.push(e.value)}));let u=c.options[c.selectedIndex].id.slice(-1),v=t[u];console.log("selected project:",u,c.value);const M=e(l.value,i.value,a.value,o.value,r,s.value);v.taskList.push(M),console.log(t),p(),y.reset(),g.classList.toggle("active"),m.classList.toggle("active")})),u(),p(),l.appendChild(m)})()}})();