const UP = '↥';

const names = document.querySelectorAll('.avatar-login a'); // 'javascript:username("name")'
const links = document.querySelectorAll('a:has([alt="Ссылка на сообщение"])');


function unite(name, link) {
  return name.replace('("', `("${link}`);
}

function formatLink(link) {
  return `[URL=${link}]${UP}[/URL]`;
}

function updateHref(a, index) {
  const link = formatLink(links[index]);
  a.href = unite(a.href, link);
}

function updateAllHrefs() {
  names.forEach(updateHref);
}


updateAllHrefs();
