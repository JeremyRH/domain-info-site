// @ts-check

const tlds = {
  ae: {
    whois: (domain) =>
      `https://whois.aeda.net.ae/whois/whois_local.jsp?qry=${domain}`,
  },
  ai: {
    whois: () => `https://whois.nic.ai`,
  },
  app: {
    whois: (domain) =>
      `https://pubapi-dot-domain-registry.appspot.com/whois/${domain}`,
  },
  au: {
    whois: () => `https://whois.auda.org.au/`,
  },
  biz: {
    whois: () => `https://whois.nic.biz/`,
  },
  bot: {
    whois: (domain) => `http://whois.nic.bot/?query=${domain}`,
  },
  ca: {
    whois: (domain) =>
      `https://www.cira.ca/ca-domains/whois/?domain=${domain}&whois=true`,
  },
  cam: {
    whois: () => `https://whois.nic.cam/`,
  },
  cc: {
    whois: (domain) =>
      `https://tld-webwhois.verisign.com/webwhois-ui/index.jsp?tld=cc&q=${domain}`,
  },
  ch: {
    whois: (domain) => `https://www.nic.ch/whois/?domain=${domain}`,
  },
  chat: {
    whois: (domain) => `https://whois.donuts.co/?q=${domain}`,
  },
  cl: {
    whois: (domain) =>
      `https://www.nic.cl/registry/Whois.do?d=${domain}&buscar=Submit`,
  },
  cm: {
    whois: () => `https://nic.cm/en/whoiscm/`,
  },
  cn: {
    whois: (domain) =>
      `https://webwhois.cnnic.cn/WhoisServlet?queryType=Domain&domain=${domain}`,
  },
  co: {
    whois: (domain) => `https://www.go.co/register/?domain=${domain}`,
  },
  "co.de": {
    whois: () => `https://www.google.com/search?q=.co.de+whois`,
  },
  "co.il": {
    whois: (domain) => `https://www.isoc.org.il/whois?search=${domain}`,
  },
  "co.uk": {
    whois: (domain) => `https://www.nominet.uk/lookup/?domain=${domain}`,
  },
  "co.za": {
    whois: (domain) => `https://coza.net.za/cgi-bin/whois.sh?Domain=${domain}`,
  },
  com: {
    whois: (domain) =>
      `https://tld-webwhois.verisign.com/webwhois-ui/index.jsp?tld=com&q=${domain}`,
  },
  "com.au": {
    whois: () => `https://whois.auda.org.au/`,
  },
  "com.br": {
    whois: (domain) =>
      `https://registro.br/tecnologia/ferramentas/whois?search=${domain}`,
  },
  "com.cn": {
    whois: (domain) =>
      `https://webwhois.cnnic.cn/WhoisServlet?queryType=Domain&domain=${domain}`,
  },
  "com.es": {
    whois: (domain) =>
      `https://nic.es/sgnd/dominio/publicBuscarDominios.action?tDominio.nombreDominio=${domain.replace(
        /\.com\.es$/,
        ""
      )}&flag=activado`,
  },
  "com.hk": {
    whois: () => `https://www.hkirc.hk/en/whois/`,
  },
  "com.mx": {
    whois: () => `https://whois.mx/index.jsf?lng=en`,
  },
  "com.tr": {
    whois: (domain) =>
      `https://www.atakdomain.com/whois-sorgulama?domain=${domain}`,
  },
  contact: {
    whois: (domain) => `https://whois.donuts.co/?q=${domain}`,
  },
  cyou: {
    whois: () => `https://lookup.icann.org/en`,
  },
  de: {
    whois: (domain) => `https://webwhois.denic.de/?lang=en&query=${domain}`,
  },
  email: {
    whois: (domain) => `https://whois.donuts.co/?q=${domain}`,
  },
  es: {
    whois: (domain) =>
      `https://nic.es/sgnd/dominio/publicBuscarDominios.action?tDominio.nombreDominio=${domain.replace(
        /\.es$/,
        ""
      )}&flag=activado`,
  },
  eu: {
    whois: (domain) => `https://whois.eurid.eu/en/search/?domain=${domain}`,
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
    whois: (domain) => `https://pandi.id/whois/${domain}`,
  },
  in: {
    whois: () => `https://whois.registry.in/`,
  },
  info: {
    whois: (domain) => `https://whois.donuts.co/?q=${domain}`,
  },
  io: {
    whois: (domain) => `https://nic.io/whois-search.htm?domain_name=${domain}`,
  },
  is: {
    whois: (domain) => `https://www.isnic.is/en/whois/search?query=${domain}`,
  },
  it: {
    whois: () => `https://web-whois.nic.it/`,
  },
  jp: {
    whois: (domain) => `https://whois.jprs.jp/en/?key=${domain}`,
  },
  ke: {
    whois: () => `https://whois.kenic.or.ke/public.jsp`,
  },
  kr: {
    whois: (domain) =>
      `https://xn--c79as89aj0e29b77z.xn--3e0b707e/kor/whois/whois.jsp?query=${domain}`,
  },
  legal: {
    whois: (domain) => `https://whois.donuts.co/?q=${domain}`,
  },
  me: {
    whois: (domain) => `https://domain.me/?query=${domain}`,
  },
  mx: {
    whois: () => `https://whois.mx`,
  },
  my: {
    whois: () => `https://mynic.my/whois/`,
  },
  net: {
    whois: (domain) =>
      `https://tld-webwhois.verisign.com/webwhois-ui/index.jsp?tld=net&q=${domain}`,
  },
  nl: {
    whois: (domain) => `https://www.sidn.nl/en/whois?q=${domain}`,
  },
  no: {
    whois: (domain) =>
      `https://www.norid.no/en/domeneoppslag/hvem-har-domenenavnet/?query=${domain}`,
  },
  nz: {
    whois: (domain) =>
      `https://dnc.org.nz/whois/whois-lookup/?domain_name=${domain.replace(
        /\.nz$/,
        ""
      )}#Form_show`,
  },
  online: {
    whois: () => `https://whois.nic.online/`,
  },
  org: {
    whois: (domain) => `https://whois.publicinterestregistry.org/?q=${domain}`,
  },
  ph: {
    whois: (domain) => `https://whois.dot.ph/whois?search=${domain}`,
  },
  pl: {
    whois: (domain) => `https://www.dns.pl/en/whois?domainName=${domain}`,
  },
  pro: {
    whois: (domain) => `https://whois.donuts.co/?q=${domain}`,
  },
  pt: {
    whois: (domain) =>
      `https://www.pt.pt/pt/ferramentas/whois/detalhes/?site=${domain.replace(
        /\.pt$/,
        ""
      )}&tld=.pt`,
  },
  pw: {
    whois: (domain) => `https://registry.pw/whois/?query=${domain}&output=nice`,
  },
  rs: {
    whois: (domain) => `https://www.rnids.rs/en/whois/${domain}`,
  },
  se: {
    whois: (domain) =>
      `https://internetstiftelsen.se/en/search-domains/?q=${domain}`,
  },
  services: {
    whois: (domain) => `https://whois.donuts.co/?q=${domain}`,
  },
  sg: {
    whois: (domain) => `https://www.sgnic.sg/domain-search?SearchKey=${domain}`,
  },
  shop: {
    whois: (domain) => `https://get.shop/getdomain/${domain}`,
  },
  site: {
    whois: (domain) =>
      `https://centralnicregistry.com/support/whois?object=${domain}`,
  },
  store: {
    whois: (domain) =>
      `https://centralnicregistry.com/support/whois?object=${domain}`,
  },
  support: {
    whois: (domain) => `https://whois.donuts.co/?q=${domain}`,
  },
  to: {
    whois: () => `https://register.to/whois-lookup/`,
  },
  top: {
    whois: (domain) =>
      `https://www.nic.top/en/whois.asp?topdomain=${domain.replace(
        /\.top$/,
        ""
      )}`,
  },
  uk: {
    whois: (domain) => `https://www.nominet.uk/lookup/?domain=${domain}`,
  },
  us: {
    whois: (domain) => `https://www.about.us/register?domain=${domain}`,
  },
  vip: {
    whois: (domain) =>
      `https://domains.registry.godaddy/search?domain=${domain}`,
  },
  vn: {
    whois: (domain) => `https://whois.inet.vn/whois?domain=${domain}`,
  },
  xyz: {
    whois: () => `https://whois.nic.xyz/`,
  },
};

const tldList = Object.keys(tlds);
const domainInput = document.querySelector(".domain-input");
const domainList = document.querySelector(".domain-list");

function getDomainListItem(domain, tld) {
  const tldInfo = tlds[tld];
  const domainLink = `${domain}.${tld}`;
  return `<li>
    <a class="domain-link" href="https://${domainLink}" target="_blank" rel="noreferrer">${domainLink}</a>
    <span> - </span>
    <a class="domain-link" href="${tldInfo.whois?.(
      domainLink
    )}" target="_blank" rel="noreferrer">whois</a>
  </li>`;
}

domainInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  domainList.innerHTML = value
    ? tldList.map((tld) => getDomainListItem(value, tld)).join("")
    : "";
});
