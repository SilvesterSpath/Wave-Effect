const labels = document.querySelectorAll('label');

labels.forEach(i=>{
  i.innerHTML = i.innerText.split('')
  .map((letter, idx)=>`<span style="transition-delay: ${idx * 30}ms">${letter}</span>`)
  .join('')
})
