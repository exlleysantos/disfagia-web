import { MdAddAlert } from "react-icons/md";

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


export default {
	STATES, 
	PRE_SCREENING_ANSWERS, 
	COMORBITIES,
	MARITAL_STATUS
};