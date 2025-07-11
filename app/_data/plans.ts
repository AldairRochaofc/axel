export const commonFeatures = ["Acesso à plataforma", "Suporte por email"];

export const plans = [
  {
    name: "Plano Free",
    handle: "Axel Lite",
    price: "R$0",
    frequency: "/mês",
    features: [
      ...commonFeatures,
      "Acesso básico ao assistente",
      "Respostas inteligentes limitadas",
      "Suporte via FAQ",
    ],
    isPopular: false,
  },
  {
    name: "Plano Mensal",
    handle: "Axel Plus",
    price: "R$25,90",
    frequency: "/mês",
    features: [
      ...commonFeatures,
      "Respostas inteligentes ilimitadas",
      "Até 5 automações conectadas",
      "Acesso a comandos personalizados",
      "Integração com dispositivos",
    ],
    isPopular: true,
  },
  {
    name: "Plano Anual",
    handle: "Axel Pro",
    price: "R$249,90",
    frequency: "/ano",
    features: [
      ...commonFeatures,
      "Tudo do Axel Plus",
      "Acesso antecipado a novos recursos",
      "Automação ilimitada",
      "Suporte premium",
    ],
    isPopular: false,
  },
];
