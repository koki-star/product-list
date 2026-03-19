import laptopImg from "./assets/laptop.png";
import phoneImg from "./assets/phone.png";
import headphonesImg from "./assets/headphones.png";
import tabletImg from "./assets/tablet.png";
import keyboardImg from "./assets/keyboard.png";
import mouseImg from "./assets/mouse.png";
import monitorImg from "./assets/monitor.png";
import speakerImg from "./assets/speaker.png";
import webcamImg from "./assets/webcam.png";
import notebookImg from "./assets/notebook.png";

function ProductList() {
  const normalCase1 = [
    {
      id: 1,
      name: "Laptop",
      description: "High-performance laptop for professionals.",
      price: 1200,
      image: laptopImg,
    },
    {
      id: 2,
      name: "Phone",
      description: "Latest smartphone with great features.",
      price: 800,
      image: phoneImg,
    },
    {
      id: 3,
      name: "Headphones",
      description: "Noise-cancelling wireless headphones.",
      price: 200,
      image: headphonesImg,
    },
  ];

  const normalCase2 = [
    {
      id: 1,
      name: "Tablet",
      description: "Lightweight tablet for school and work.",
      price: 500,
      image: tabletImg,
    },
    {
      id: 2,
      name: "Keyboard",
      description: "Mechanical keyboard with backlight.",
      price: 150,
      image: keyboardImg,
    },
    {
      id: 3,
      name: "Mouse",
      description: "Wireless mouse with ergonomic design.",
      price: 60,
      image: mouseImg,
    },
  ];

  const normalCase3 = [
    {
      id: 1,
      name: "Monitor",
      description: "27-inch monitor with clear display.",
      price: 300,
      image: monitorImg,
    },
    {
      id: 2,
      name: "Speaker",
      description: "Bluetooth speaker with rich sound.",
      price: 90,
      image: speakerImg,
    },
    {
      id: 3,
      name: "Webcam",
      description: "HD webcam for meetings and classes.",
      price: 75,
      image: webcamImg,
    },
  ];

  const edgeCase1 = [];

  const edgeCase2 = [
    {
      id: 1,
      name: "Notebook",
      description: "Simple paper notebook.",
      price: 0,
      image: notebookImg,
    },
  ];

  const edgeCase3 = [
    {
      id: 1,
      name: "Very Long Product Name Example for Testing",
      description:
        "This is a very long description used to test how the layout handles larger text without breaking.",
      price: 9999,
    },
  ];

  // -------- Dataset for demo --------

  const products = normalCase1;
  // const products = normalCase2;
  // const products = normalCase3;
  
  // Edge cases
  // const products = edgeCase1;
  // const products = edgeCase2;
  // const products = edgeCase3;

  return (
    <div className="product-list">
      <h2 className="section-title">Products</h2>

      {products.length === 0 ? (
        <p className="empty-message">No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;