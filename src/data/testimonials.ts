type Testimonial = {
    id: number;
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
    party: string
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "ANG",
        role: "Parti membre NFP",
        image: "/ANG.png",
        rating: 5,
        text: "L'ANG s'engage pleinement dans la Nouvelle Force Politique pour promouvoir la modernisation de la gouvernance et soutenir une nouvelle génération de leaders.",
        party: "ANG"
    },
    {
        id: 2,
        name: "FER",
        role: "Parti membre NFP",
        image: "/partis/fer.jpg",
        rating: 5,
        text: "FER soutient la NFP afin de porter des réformes éducatives profondes et renforcer la participation des jeunes dans la vie politique camerounaise.",
        party: "FER"
    },
    {
        id: 3,
        name: "PREMICES",
        role: "Parti membre NFP",
        image: "/partis/premices.jpg",
        rating: 4,
        text: "PREMICES voit dans la NFP une plateforme pour promouvoir l'intégrité, la solidarité et le développement durable au service des communautés.",
        party: "PREMICES"
    },
    {
        id: 4,
        name: "RPC",
        role: "Parti membre NFP",
        image: "/partis/rpc.jpg",
        rating: 5,
        text: "RPC considère la NFP comme un moyen de soutenir la renaissance nationale et la prospérité économique pour tous les Camerounais.",
        party: "RPC"
    },
    {
        id: 5,
        name: "MPEC",
        role: "Parti membre NFP",
        image: "/partis/mpec.jpg",
        rating: 5,
        text: "MPEC s'engage au sein de la NFP pour promouvoir l’unité nationale, l’entrepreneuriat local et l’innovation sociale au Cameroun.",
        party: "MPEC"
    },
    {
        id: 6,
        name: "UC",
        role: "Parti membre NFP",
        image: "/partis/unir.jpg",
        rating: 5,
        text: "UC rejoint la NFP pour renforcer la cohésion sociale et construire un Cameroun fort et solidaire.",
        party: "UC"
    }
];
