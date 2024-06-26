export default function App() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* 🦁 Ceci est le premier composant */}
      {/* 🦁 Tu peux le copier/coller dans un nouveau composant pour le séparer */}
      <div className="card w-full bg-base-300 shadow-xl">
        <figure>
          <img
            src="/images/shoes-1.png"
            className="h-32 w-full object-cover object-center"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shark Shoes
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>This yellow shoes will make your friend jealous.</p>
        </div>
      </div>

      <div className="card w-full bg-base-300 shadow-xl">
        <figure>
          <img
            src="/images/shoes-2.png"
            className="h-32 w-full object-cover object-center"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Blue Wheti
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            You can wear this shoes with any clothes. It will make you look
            cool.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-300 shadow-xl">
        <figure>
          <img
            src="/images/shoes-3.png"
            className="h-32 w-full object-cover object-center"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Basic Fit</h2>
          <p>
            You know what? This shoes is the best shoes for you who like to
            walk.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-300 shadow-xl">
        <figure>
          <img
            src="/images/shoes-4.png"
            className="h-32 w-full object-cover object-center"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Darku Shoes</h2>
          <p>Wow, this shoes is so cool. You can wear it for any occasion.</p>
        </div>
      </div>
    </div>
  );
}

// 🦁 Créer un component `ShoeCard`
// 🦁 Celui-ci va prendre des "props"
// 🦁 Tu peux prendre une props `image`, `title` et `description`
