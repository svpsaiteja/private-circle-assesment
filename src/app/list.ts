
const entities = ["ACC", "Amara Raja Batteries", "ABG Shipyard", "AIA Engineering", "Torrent Pharmaceuticals", "Nahar Spinning Mills", "Anant Raj Industries", "Television Eighteen India", "Apollo Tyre", "Ashok Leyland", "Bata India", "National Fertilizer", "Aditya Birla Nuvo", "Alstom Projects India", "Balrampur Chini Mills", "Techno Electric & Engineering", "Walchandnagar Industries", "Alfa Laval (I)", "Bannari Amman Sugars", "Alembic", "Adani Enterprises", "Amtek India", "Berger Paints India", "Welspun Gujarat Stahl Rohren", "Allsec Technologies", "Donear Industries", "National Aluminium Company", "Aban Offshore", "Aftek", "Abbott India", "DS Kulkarni Developers", "Alok Industries", "Dredging Corporation of India", "Sakthi Sugars", "Sangam (India)", "Sanghi Industries", "Satyam Computer Services", "Shipping Corporation of India",
    "Simplex Infrastructures",
    "Solectron Centum Electronics",
    "South East Asia Marine Engg",
    "Southern Iron & Steel Company",
    "Madras Aluminium Co",
    "Madras Cements",
    "Mahanagar Telephone Nigam",
    "Mahindra Gesco Developers",
    "Mahindra Ugine Steel Company",
    "Mangalam Cement",
    "Manugraph India",
    "Marg Constructions",
    "J K Cement Limited",
    "Jain Irrigation Systems",
    "Jaiprakash Associates",
    "Jammu & Kashmir Bank",
    "Jaybharat Textiles And Real Estate",
    "JB Chemicals & Pharmaceuticals",
    "Havell's India",
    "Helios & Matheson Info. Tech.",
    "Hexaware Technologies",
    "Himadri Chemicals & Inds.",
    "Hindalco Industries",
    "Hinduja TMT",
    "Hindustan Construction Co",
    "Hindustan National Glass",
    "Hindustan Sanitaryware & Inds",
];



export interface ListItem {
    createdDate: Date;
    listName: string;
    entities: string[];
    id: any;
}

export type List = ListItem[];



export const list: List = [
    {
        id: 1,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: [],
    },
    {
        id: 2,
        listName: 'My vendors',
        createdDate: new Date(2020, 6, 10),
        entities: [],
    },
    {
        id: 3,
        listName: 'My customers',
        createdDate: new Date(2020, 6, 10),
        entities: [],
    },
    {
        id: 4,
        listName: 'Test_30_results',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 28),
    },
    {
        id: 5,
        listName: 'To_index',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 40),
    },
    {
        id: 6,
        listName: 'KPMG Requested Companies - Listed Set_Prasad Kumar',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 10),
    },
    {
        id: 7,
        listName: 'Error Case- LTB to EBITDA Blank_Prasad Kumar',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 21),
    },
    {
        id: 8,
        listName: 'Two companies',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 33),
    },
    {
        id: 9,
        listName: 'Custom',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 12),
    },
    {
        id: 10,
        listName: 'Mumbai',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 5),
    },
    {
        id: 11,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 43),
    },
    {
        id: 12,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 34),
    },
    {
        id: 13,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 32),
    },
    {
        id: 14,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 20),
    },
    {
        id: 15,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 10),
    },
    {
        id: 16,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 6),
    },
    {
        id: 17,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 22),
    },
    {
        id: 18,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 33),
    },
    {
        id: 19,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 43),
    },
    {
        id: 20,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 29),
    },
    {
        id: 21,
        listName: 'Competitive Intelligence',
        createdDate: new Date(2020, 6, 10),
        entities: entities.sort(() => .5 - Math.random()).slice(0, 55),
    },
]