// @ts-check

const tlds = {
  ae: {
    whois: (domainName, tld) =>
      `https://whois.aeda.net.ae/whois/whois_local.jsp?qry=${domainName}.${tld}`,
  },
  ai: {
    whois: () => `https://whois.nic.ai`,
  },
  app: {
    whois: (domainName, tld) =>
      `https://pubapi-dot-domain-registry.appspot.com/whois/${domainName}.${tld}`,
  },
  au: {
    whois: () => `https://whois.auda.org.au/`,
  },
  biz: {
    whois: () => `https://whois.nic.biz/`,
  },
  bot: {
    whois: (domainName, tld) =>
      `http://whois.nic.bot/?query=${domainName}.${tld}`,
  },
  ca: {
    whois: (domainName, tld) =>
      `https://www.cira.ca/ca-domains/whois/?domain=${domainName}.${tld}&whois=true`,
  },
  cam: {
    whois: () => `https://whois.nic.cam/`,
  },
  cc: {
    whois: (domainName, tld) =>
      `https://tld-webwhois.verisign.com/webwhois-ui/index.jsp?tld=cc&q=${domainName}.${tld}`,
  },
  ch: {
    whois: (domainName, tld) =>
      `https://www.nic.ch/whois/?domain=${domainName}.${tld}`,
  },
  chat: {
    whois: (domainName, tld) =>
      `https://whois.donuts.co/?q=${domainName}.${tld}`,
  },
  cl: {
    whois: (domainName, tld) =>
      `https://www.nic.cl/registry/Whois.do?d=${domainName}.${tld}&buscar=Submit`,
  },
  cm: {
    whois: () => `https://nic.cm/en/whoiscm/`,
  },
  cn: {
    whois: (domainName, tld) =>
      `https://webwhois.cnnic.cn/WhoisServlet?queryType=Domain&domain=${domainName}.${tld}`,
  },
  co: {
    whois: (domainName, tld) =>
      `https://www.go.co/register/?domain=${domainName}.${tld}`,
  },
  "co.de": {
    whois: () => `https://www.google.com/search?q=.co.de+whois`,
  },
  "co.il": {
    whois: (domainName, tld) =>
      `https://www.isoc.org.il/whois?search=${domainName}.${tld}`,
  },
  "co.uk": {
    whois: (domainName, tld) =>
      `https://www.nominet.uk/lookup/?domain=${domainName}.${tld}`,
  },
  "co.za": {
    whois: (domainName, tld) =>
      `https://coza.net.za/cgi-bin/whois.sh?Domain=${domainName}.${tld}`,
  },
  com: {
    whois: (domainName, tld) =>
      `https://tld-webwhois.verisign.com/webwhois-ui/index.jsp?tld=com&q=${domainName}.${tld}`,
  },
  "com.au": {
    whois: () => `https://whois.auda.org.au/`,
  },
  "com.br": {
    whois: (domainName, tld) =>
      `https://registro.br/tecnologia/ferramentas/whois?search=${domainName}.${tld}`,
  },
  "com.cn": {
    whois: (domainName, tld) =>
      `https://webwhois.cnnic.cn/WhoisServlet?queryType=Domain&domain=${domainName}.${tld}`,
  },
  "com.es": {
    whois: (domainName) =>
      `https://nic.es/sgnd/dominio/publicBuscarDominios.action?tDominio.nombreDominio=${domainName}&flag=activado`,
  },
  "com.hk": {
    whois: () => `https://www.hkirc.hk/en/whois/`,
  },
  "com.mx": {
    whois: () => `https://whois.mx/index.jsf?lng=en`,
  },
  "com.tr": {
    whois: (domainName, tld) =>
      `https://www.atakdomain.com/whois-sorgulama?domain=${domainName}.${tld}`,
  },
  contact: {
    whois: (domainName, tld) =>
      `https://whois.donuts.co/?q=${domainName}.${tld}`,
  },
  cyou: {
    whois: () => `https://lookup.icann.org/en`,
  },
  de: {
    whois: (domainName, tld) =>
      `https://webwhois.denic.de/?lang=en&query=${domainName}.${tld}`,
  },
  email: {
    whois: (domainName, tld) =>
      `https://whois.donuts.co/?q=${domainName}.${tld}`,
  },
  es: {
    whois: (domainName) =>
      `https://nic.es/sgnd/dominio/publicBuscarDominios.action?tDominio.nombreDominio=${domainName}&flag=activado`,
  },
  eu: {
    whois: (domainName, tld) =>
      `https://whois.eurid.eu/en/search/?domain=${domainName}.${tld}`,
  },
  fi: {
    whois: () =>
      `https://www.traficom.fi/en/communications/fi-domains/fi-domain-name-search`,
  },
  fr: {
    whois: () =>
      `https://www.afnic.fr/en/domain-names-and-support/everything-there-is-to-know-about-domain-names/find-a-domain-name-or-a-holder-using-whois/`,
  },
  help: {
    whois: () => `https://whois.nic.help/`,
  },
  hk: {
    whois: () => `https://www.hkirc.hk/en/whois/`,
  },
  icu: {
    whois: () => `https://whois.nic.icu/`,
  },
  id: {
    whois: (domainName, tld) => `https://pandi.id/whois/${domainName}.${tld}`,
  },
  in: {
    whois: () => `https://whois.registry.in/`,
  },
  info: {
    whois: (domainName, tld) =>
      `https://whois.donuts.co/?q=${domainName}.${tld}`,
  },
  io: {
    whois: (domainName, tld) =>
      `https://nic.io/whois-search.htm?domain_name=${domainName}.${tld}`,
  },
  is: {
    whois: (domainName, tld) =>
      `https://www.isnic.is/en/whois/search?query=${domainName}.${tld}`,
  },
  it: {
    whois: () => `https://web-whois.nic.it/`,
  },
  jp: {
    whois: (domainName, tld) =>
      `https://whois.jprs.jp/en/?key=${domainName}.${tld}`,
  },
  ke: {
    whois: () => `https://whois.kenic.or.ke/public.jsp`,
  },
  kr: {
    whois: (domainName, tld) =>
      `https://xn--c79as89aj0e29b77z.xn--3e0b707e/kor/whois/whois.jsp?query=${domainName}.${tld}`,
  },
  legal: {
    whois: (domainName, tld) =>
      `https://whois.donuts.co/?q=${domainName}.${tld}`,
  },
  me: {
    whois: (domainName, tld) => `https://domain.me/?query=${domainName}.${tld}`,
  },
  mx: {
    whois: () => `https://whois.mx`,
  },
  my: {
    whois: () => `https://mynic.my/whois/`,
  },
  net: {
    whois: (domainName, tld) =>
      `https://tld-webwhois.verisign.com/webwhois-ui/index.jsp?tld=net&q=${domainName}.${tld}`,
  },
  nl: {
    whois: (domainName, tld) =>
      `https://www.sidn.nl/en/whois?q=${domainName}.${tld}`,
  },
  no: {
    whois: (domainName, tld) =>
      `https://www.norid.no/en/domeneoppslag/hvem-har-domenenavnet/?query=${domainName}.${tld}`,
  },
  nz: {
    whois: (domainName) =>
      `https://dnc.org.nz/whois/whois-lookup/?domain_name=${domainName}#Form_show`,
  },
  online: {
    whois: () => `https://whois.nic.online/`,
  },
  org: {
    whois: (domainName, tld) =>
      `https://whois.publicinterestregistry.org/?q=${domainName}.${tld}`,
  },
  ph: {
    whois: (domainName, tld) =>
      `https://whois.dot.ph/whois?search=${domainName}.${tld}`,
  },
  pl: {
    whois: (domainName, tld) =>
      `https://www.dns.pl/en/whois?domainName=${domainName}.${tld}`,
  },
  pro: {
    whois: (domainName, tld) =>
      `https://whois.donuts.co/?q=${domainName}.${tld}`,
  },
  pt: {
    whois: (domainName) =>
      `https://www.pt.pt/pt/ferramentas/whois/detalhes/?site=${domainName}&tld=.pt`,
  },
  pw: {
    whois: (domainName, tld) =>
      `https://registry.pw/whois/?query=${domainName}.${tld}&output=nice`,
  },
  rs: {
    whois: (domainName, tld) =>
      `https://www.rnids.rs/en/whois/${domainName}.${tld}`,
  },
  se: {
    whois: (domainName, tld) =>
      `https://internetstiftelsen.se/en/search-domains/?q=${domainName}.${tld}`,
  },
  services: {
    whois: (domainName, tld) =>
      `https://whois.donuts.co/?q=${domainName}.${tld}`,
  },
  sg: {
    whois: (domainName, tld) =>
      `https://www.sgnic.sg/domain-search?SearchKey=${domainName}.${tld}`,
  },
  shop: {
    whois: (domainName, tld) =>
      `https://get.shop/getdomain/${domainName}.${tld}`,
  },
  site: {
    whois: (domainName, tld) =>
      `https://centralnicregistry.com/support/whois?object=${domainName}.${tld}`,
  },
  store: {
    whois: (domainName, tld) =>
      `https://centralnicregistry.com/support/whois?object=${domainName}.${tld}`,
  },
  support: {
    whois: (domainName, tld) =>
      `https://whois.donuts.co/?q=${domainName}.${tld}`,
  },
  to: {
    whois: () => `https://register.to/whois-lookup/`,
  },
  top: {
    whois: (domainName) =>
      `https://www.nic.top/en/whois.asp?topdomain=${domainName}`,
  },
  uk: {
    whois: (domainName, tld) =>
      `https://www.nominet.uk/lookup/?domain=${domainName}.${tld}`,
  },
  us: {
    whois: (domainName, tld) =>
      `https://www.about.us/register?domain=${domainName}.${tld}`,
  },
  vip: {
    whois: (domainName, tld) =>
      `https://domains.registry.godaddy/search?domain=${domainName}.${tld}`,
  },
  vn: {
    whois: (domainName, tld) =>
      `https://whois.inet.vn/whois?domain=${domainName}.${tld}`,
  },
  xyz: {
    whois: () => `https://whois.nic.xyz/`,
  },
};

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function h(elName, props, ...children) {
  const el = document.createElement(elName);
  for (const [key, value] of Object.entries(props)) {
    el[key] = value;
  }
  el.append(...children);
  return el;
}

function domainItemEl(domainName, tld) {
  const whois = tlds[tld]?.whois?.(domainName, tld);

  return h(
    "li",
    {},
    h(
      "a",
      {
        className: "domain-link",
        href: `http://${domainName}.${tld}`,
        target: "_blank",
        rel: "noreferrer",
      },
      `${domainName}.${tld}`
    ),
    h("span", {}, " - "),
    h(
      "a",
      {
        className: "domain-link",
        href: whois || "#",
        target: whois ? "_blank" : "",
        rel: "noreferrer",
        style: whois ? "" : "color: red;",
      },
      "whois"
    )
  );
}

/** @type {HTMLUListElement} */
const domainList = document.querySelector(".domain-list");
const domainSeparators = /[\s,;]+/;

const renderDomains = debounce((e) => {
  const domains = e.target.value.trim().toLowerCase().split(domainSeparators);

  domainList.replaceChildren(
    ...domains.reduce((domainEls, domain) => {
      const firstDot = domain.indexOf(".");
      if (firstDot === -1) {
        return domainEls;
      }
      const domainName = domain.slice(0, firstDot);
      const tld = domain.slice(firstDot + 1);
      if (!tld) {
        return domainEls;
      }
      domainEls.push(domainItemEl(domainName, tld));
      return domainEls;
    }, [])
  );
}, 150);

/** @type {HTMLTextAreaElement} */
const domainInput = document.querySelector(".domain-input");

domainInput.addEventListener("input", (e) => {
  domainInput.style.height = "auto";
  domainInput.style.height = `${domainInput.scrollHeight + 2}px`;
  renderDomains(e);
});
