const shoesList = [
  {
    id: 1,
    isNew: true,
    image: "/images/shoes-1.png",
    title: "Shark Shoes",
    description: "This yellow shoes will make your friend jealous.",
  },
  {
    id: 2,
    isNew: true,
    image: "/images/shoes-2.png",
    title: "Blue Wheti",
    description:
      "You can wear this shoes with any clothes. It will make you look cool.",
  },
  {
    id: 3,
    isNew: false,
    image: "/images/shoes-3.png",
    title: "Basic Fit",
    description:
      "You know what? This shoes is the best shoes for you who like to walk.",
  },
  {
    id: 4,
    isNew: false,
    image: "/images/shoes-4.png",
    title: "Darku Shoes",
    description:
      "Wow, this shoes is so cool. You can wear it for any occasion.",
  },
];

export default function App() {
  return (
    <ShoesList>
      {shoesList.map((shoe) => (
        <ShoeCard
          key={shoe.id}
          isNew={shoe.isNew}
          image={shoe.image}
          title={shoe.title}
          description={shoe.description}
        />
      ))}
    </ShoesList>
  );
}

function ShoesList({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
  );
}

function NewBadge() {
  return <div className="badge badge-secondary">NEW</div>;
}

function ShoeCard({ image, title, description, isNew = false }) {
  return (
    <div className="card w-full bg-base-300 shadow-xl">
      <figure>
        <img
          src={image}
          className="h-32 w-full object-cover object-center"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {isNew ? <NewBadge /> : null}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
