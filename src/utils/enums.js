export const STATES = [
	{ initials: 'AC' },
	{ initials: 'AL' },
	{ initials: 'AM' },
	{ initials: 'AP' },
	{ initials: 'BA' },
	{ initials: 'CE' },
	{ initials: 'DF' },
	{ initials: 'ES' },
	{ initials: 'GO' },
	{ initials: 'MA' },
	{ initials: 'MG' },
	{ initials: 'MS' },
	{ initials: 'MT' },
	{ initials: 'PA' },
	{ initials: 'PB' },
	{ initials: 'PE' },
	{ initials: 'PI' },
	{ initials: 'PR' },
	{ initials: 'RJ' },
	{ initials: 'RN' },
	{ initials: 'RO' },
	{ initials: 'RR' },
	{ initials: 'RS' },
	{ initials: 'SC' },
	{ initials: 'SE' },
	{ initials: 'SP' },
	{ initials: 'TO' },
];

export const PRE_SCREENING_ANSWERS = {
	ASNWER_1:'Presença de Sialorreia durante e após as refeições?',
    ASNWER_2:'Presença de Engasgo durante e após as refeições?',
    ASNWER_3:'Presença de Voz Molhada durante e após as refeições?',
    ASNWER_4:'Perda de Peso nos últimos 3 meses?',
    ASNWER_5:'Ocorrências de Complicações Pulmonares?',
    ASNWER_6_1:'Permanente',
	ASNWER_6_2 : 'Protese',
	ASNWER_6_3 : 'Ausência',
};

export const COMORBITIES = [
    {value : 1, label : 'Não Apresenta'},
    {value : 2, label : 'Acidente Vascular Cerebral'},
    {value : 3, label : 'Parkinson'},
    {value : 4, label : 'Traumatismo Craniano'},
    {value : 5, label : 'Esclerose Lateral Amiotrofica'},
    {value : 6, label : 'Tumores no Sistema Nervoso Central'},
    {value : 7, label : 'Distrofias Musculares'},
    {value : 8, label : 'Miastenia Grave'},
    {value : 9, label : 'Polineuropatia'},
    {value : 10, label : 'Cirurgias na Região da Cabeça e Pescoço'},
    {value : 11, label : 'Ferimentos de Arma de Fogo na Região da Cabeça e Pescoço'},
    {value : 12, label : 'Osteófito Cervical'},
    {value : 13, label : 'Intubação Orotraqueal'},
    {value : 14, label : 'Traqueostomia'},
    {value : 15, label : 'Rebaixamento do Nível de Consciência'},
    {value : 16, label : 'Delirium'},
    {value : 17, label : 'Doença Pulmonar Obstrutiva Crônica'},
    {value : 18, label : 'Doença Refluxo Gastroesofágico'},
];

export const NOTIFICATION_TYPES = [
    {value : 1, label : 'Alerta'},
    {value : 2, label : 'Lembrete'},
    {value : 3, label : 'Notificação'},
];

export const SEX = [
	{value : 'male', label : 'Masculino'},
	{value : 'female', label : 'Feminino'}
]

export const MARITAL_STATUS = [
	{value : '1', label : 'Solteiro (a)'},
	{value : '2', label : 'Casado (a)'},
	{value : '3', label : 'Separado (a) / Divorciado (a)'},
	{value : '4', label : 'Viúvo (a)'},
	{value : '5', label : 'Outro'}
]

export const EAT10 = [
	{label : 1, question: '1. Meu problema para engolir me faz perder peso '},
	{label : 1, question: '2. Meu problema para engolir não me deixa comer fora de casa'},
	{label : 1, question: '3. Preciso fazer força para beber líquidos'},
	{label : 1, question: '4. Preciso fazer força para engolir comida (sólida)'},
	{label : 1, question: '5. Preciso fazer força para engolir remédios'},
	{label : 1, question: '6. Dói para engolir'},
	{label : 1, question: '7. O meu problema para engolir me tira o prazer de comer'},
	{label : 1, question: '8. Fico com comida presa/entalada na garganta '},
	{label : 1, question: '9. Eu tusso quando como'},
	{label : 1, question: '10. Engolir me deixa estressado (a)'},
]

export const AFERITION = [
	{title: "Peso (LOHMAN et al., 1988)",
	image : 'http://4.bp.blogspot.com/-jypRFKh8BeY/T_DCWRizaxI/AAAAAAAAAK8/GNzgBwFdIk4/s1600/Medindo.PNG', 
	text: ["1. Número de vezes a realizar a medida: duas" , 
	"2. Equipamento: balança eletrônica;", 
	"3. Técnica: Instalar a balança em superfície plana, firme e lisa e afastada da parede. Ligar a balança antes de o avaliado ser colocado sobre ela;",
	"4. Colocar o avaliado no centro do equipamento, com o mínimo de roupa possível, descalço, ereto, pés juntos e braços estendidos ao longo do corpo. Mantê-lo parado nesta posição;",
	"5. Realizar a leitura após o valor do peso estar fixado no visor.", 
	"6. Registre o valor mostrado no visor, imediatamente, sem arredondamentos (ex: 75,2 kg)"]},
	
	{title: "Altura (LOHMAN et al., 1988)",
	image: "",
	text: []},

	{title: "Altura do joelho (LOHMAN et al., 1988)",
	image: "",
	text: []},

	{title: "Envergadura do braço (LOHMAN et al., 1988)",
	image: "",
	text: []},

	{title: "Circunferência da cintura (LOHMAN et al., 1988)",
	image: "",
	text: []},

	{title: "Circunferência do quadril (LOHMAN et al., 1988)",
	image: "",
	text: []},

	{title: "Circunferência abdominal (LOHMAN et al., 1988)",
	image: "",
	text: []},

	{title: "Circunferência do braço (LOHMAN et al., 1988)",
	image: "",
	text: []},

	{title: "Circunferência da panturrilha (LOHMAN et al., 1988)",
	image: "",
	text: []},

	{title: "Dobras cutâneas (LOHMAN et al., 1988)",
	image: "",
	text: []},
]

export default {
	STATES, 
	PRE_SCREENING_ANSWERS, 
	COMORBITIES,
	MARITAL_STATUS,
	EAT10,
	NOTIFICATION_TYPES
};